/**
 * @constructor
 */
var Stack = function() {
    this.array = Array()
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.array.push(x)
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.array.pop()
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    var len = this.array.length
    return this.array[len-1]
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    if (this.array.length) return false
    return true
};