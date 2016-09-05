/**
 * @constructor
 */
var Queue = function() {
    this.array = Array()
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.array.push(x)
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.array.shift()
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.array[0]
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    if (this.array.length) return false
    return true
};