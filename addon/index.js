/* eslint-disable ember/no-classic-components */
import EmberComponent from '@ember/component';
import EmberMixin from '@ember/object/mixin';
import { schedule } from '@ember/runloop';
import { getOwner } from '@ember/application';

import React from 'react';
import ReactDOM from 'react-dom';
import isObject from 'is-object';

import YieldWrapper from './-private/yield-wrapper';
import grantOwnerAccess from './-private/grant-owner-access';
import isFunctionalComponent from './-private/is-functional-component';

/**
 * Wrap React compatible with Ember hooks
 *
 * @param {Class} Klass React-renderable component to render in Ember
 * @param {Object} mixinProps Ember mixin properties for Ember classic component wrapper node
 * @returns Ember-compatible React component
 */
const wrapReactComponent = (Klass, mixinProps) => {
  // eslint-disable-next-line ember/no-new-mixins
  const ComponentMixin = EmberMixin.create({ ...mixinProps });

  // eslint-disable-next-line ember/no-classic-classes, ember/require-tagless-components
  return EmberComponent.extend(ComponentMixin, {
    /**
     * Add type annotation for private `attrs` property on component
     *
     * Accounts for possibility of passing HBS props as MutableCell objects.
     *
     * @private
     */
    getReactProps() {
      return Object.entries(this.attrs).reduce(
        (acc, [propName, propValue]) => ({
          ...acc,
          [propName]:
            isObject(propValue) && propValue.constructor.name === 'MutableCell'
              ? propValue.value
              : propValue,
        }),
        {}
      );
    },

    /**
     * Mount React element to DOM
     *
     * @private
     */
    mountElement() {
      let { children, ...props } = this.getReactProps();

      if (!children) {
        const childNodes = this.element.childNodes;
        children = [
          React.createElement(YieldWrapper, {
            key: this.elementId,
            nodes: [...childNodes],
          }),
        ];
      }

      const KlassToRender = isFunctionalComponent(Klass)
        ? Klass
        : grantOwnerAccess(Klass, getOwner(this));

      ReactDOM.render(
        React.createElement(KlassToRender, props, children),
        this.element
      );
    },

    didUpdateAttrs() {
      schedule('render', () => this.mountElement());
    },

    didInsertElement() {
      this._super(...arguments);

      this.mountElement();
    },

    willDestroyElement() {
      ReactDOM.unmountComponentAtNode(this.element);

      this._super(...arguments);
    },
  });
};

/**
 * Higher-order function for providing Ember hooks to a React component
 *
 * Can also be used as an ECMAScript decorator
 *
 * @param {Object} descriptor React renderable component
 * @param {Object} [mixinProps] Ember mixin properties for Ember classic component wrapper node
 * @returns Ember-compatible React component
 */
export default function WithEmberSupport(descriptor, mixinProps) {
  const isHOC = descriptor
    .toString()
    .includes('/*#__PURE__*/_react.default.createElement');

  return isHOC
    ? wrapReactComponent(descriptor, mixinProps)
    : function (target) {
        return wrapReactComponent(target, descriptor);
      };
}
