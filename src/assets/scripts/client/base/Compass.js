/**
 * @class Compass
 */
class Compass {
    /**
     * @constructor
     */
    // istanbul ignore next
    constructor() {
        /**
         * Magnetic declination, in radians east
         *
         * @property _magneticNorth
         * @type {number}
         * @default 0
         */
        this._magneticNorth = 0;
    }

    /**
     * Facade to access the compass's magnetic declination value
     *
     * @for Compass
     * @property magneticNorth
     * @return {number}
     */
    get magneticNorth() {
        // TODO: remove check. for debugging only
        if (!this._magneticNorth) {
            throw "Compass is not set";
        }

        return this._magneticNorth;
    }

    /**
     * Fascade to change the compass's magnetic declination value
     *
     * @for Compass
     * @property magneticNorth
     * @param {number}
     */
    set magneticNorth(magneticNorth) {
        this._magneticNorth = magneticNorth;
    }
}

export default new Compass();