/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class TeqFw_Ui_Quasar_Front_Defaults {

    COLOR_Q_PRIMARY = 'primary';

    /** @type {TeqFw_Ui_Quasar_Shared_Defaults} */
    SHARED;

    constructor(spec) {
        // DEPS
        this.SHARED = spec['TeqFw_Ui_Quasar_Shared_Defaults$'];

        // MAIN
        Object.freeze(this);
    }
}
