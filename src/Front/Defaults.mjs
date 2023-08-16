/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class TeqFw_Ui_Quasar_Front_Defaults {

    COLOR_Q_PRIMARY = 'primary';

    /** @type {TeqFw_Ui_Quasar_Shared_Defaults} */
    SHARED;

    /**
     * @param {TeqFw_Ui_Quasar_Shared_Defaults} SHARED
     */
    constructor(
        {
            TeqFw_Ui_Quasar_Shared_Defaults$: SHARED,
        }
    ) {
        // DEPS
        this.SHARED = SHARED;

        // MAIN
        Object.freeze(this);
    }
}
