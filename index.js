import React from 'react';

export default {
  /*
   * Find and return all matched children by type. `type` can be a React element class or
   * string
   */
  findAllByType(children, type) {
    let result = [];

    if (type && type.displayName) {
      type = type.displayName;
    }

    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName === type) {
        result.push(child);
      }
    });

    return result;
  },

  /*
   * Return the first matched child by type, return null otherwise.
   * `type` can be a React element class or string.
   */
  findChildByType(children, type) {
    this.findAllByType(children, type)[0];
  },

  /*
   * Create a new array of children excluding the ones matched the type
   */
  withoutType(children) {
    let newChildren = [];
    let types = [].map.call(arguments, type => {
      if (type && type.displayName) { return type.displayName; }
      return type;
    });

    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
        return;
      }
      newChildren.push(child);
    });

    return newChildren;
  }
};
