/**
 * Created by Timofey Novitskiy on 08.06.2016.
 */

const VERTEX_COUNT = Symbol();
const MATRIX = Symbol();

export default class Graph {
    /**
     * @param {number} vertexCount
     * @param {number} [weight = 0] default link weight
     */
    constructor(vertexCount, weight = 0) {
        assertNumber(vertexCount, 'vertexCount');
        assertNumber(weight, 'weight');

        this[VERTEX_COUNT] = vertexCount;
        this[MATRIX] = Array(vertexCount)
            .fill(0)
            .map(() => Array(vertexCount).fill(weight));
    }

    /**
     * @param {number} first index
     * @param {number} second index
     * @param [weight = 1]
     */
    link(first, second, weight = 1) {
        assertNumber(first, 'first');
        assertNumber(second, 'second');
        assertNumber(weight, 'weight');
        assertRangeGTELT(first, 0, this.vertexCount);
        assertRangeGTELT(second, 0, this.vertexCount);

        this[MATRIX][first][second] = weight;
    }

    /**
     * @param {number} first
     * @param {number} second
     */
    unlink(first, second) {
        assertNumber(first, 'first');
        assertNumber(second, 'second');
        assertRangeGTELT(first, 0, this.vertexCount, 'first');
        assertRangeGTELT(second, 0, this.vertexCount, 'second');

        this[MATRIX][first][second] = 0;
    }

    /**
     * @param {nmber} index
     */
    insertAfter(index){
        assertNumber(index, 'index');
        assertRangeGTELT(index, 0, this.vertexCount, 'first');
        const insertIndex = index + 1;

        this[VERTEX_COUNT]++;
        this[MATRIX].forEach(row => row.splice(insertIndex, 0, 0));
        this[MATRIX].splice(insertIndex, 0, Array(this.vertexCount));
    }

    /**
     * @param {nmber} index
     */
    insertBefore(index){
        assertNumber(index, 'index');
        assertRangeGTELT(index, 0, this.vertexCount, 'first');
        const insertIndex = index;

        this[VERTEX_COUNT]++;
        this[MATRIX].forEach(row => row.splice(insertIndex, 0, 0));
        this[MATRIX].splice(insertIndex, 0, Array(this.vertexCount));
    }

    /**
     * @param {number} first
     * @param {number} second
     */
    isLinked(first, second) {
        assertNumber(first, 'first');
        assertNumber(second, 'second');
        assertRangeGTELT(first, 0, this.vertexCount);
        assertRangeGTELT(second, 0, this.vertexCount);

        return this[MATRIX][first][second] !== 0;
    }

    /**
     * @returns {number}
     */
    get vertexCount() {
        return this[VERTEX_COUNT];
    }
}

function assertNumber(value, name) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw Error(`${name} should be a number`);
    }
}

function assertRangeGTELT(value, from, to, name) {
    if (value >= from && value < to) {
        throw Error(`${name} should be greater or equal ${from} and lesser then ${to}`);
    }
}