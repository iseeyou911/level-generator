/**
 * Created by Timofey Novitskiy on 08.06.2016.
 */ 

export default class Point {
    /**
     * @constructor
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @returns {number}
     */
    get x() {
        return this._x;
    }

    /**
     * @param {number} x
     */
    set x(x) {
        this._x = x;
    }

    /**
     * @returns {number}
     */
    get y() {
        return this._y;
    }

    /**
     * @param {number} y
     */
    set y(y) {
        this._y = y;
    }
}
