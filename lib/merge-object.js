/**
 * Merge object functional
 *
 * @type {object}
 * @return {object}
 *
 * @author      Faizal Pribadi  <ical.rabbit@gmail.com>
 * @version     0.1.0
 */
exports = module.exports = function (object1, object2) {
    'use strict';
    var keys;

    // TODO: fix no input argument object to default object
    if (typeof object1 !== 'object' && typeof object2 !== 'object') {
        object1 = {};
        object2 = {};
    }

    for(keys in object2) {
        if (object2.hasOwnProperty(keys)) {
            object1[keys] = object2[keys];
        }
    }

    return object1;
};