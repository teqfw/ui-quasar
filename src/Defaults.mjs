export default class TeqFw_Ui_Quasar_Defaults {
    BACK_REALM = 'uiQuasar'; // realm for API services ('/api/project/...') and CLI commands ('project-...')
    DI_QUASAR = 'quasar'; // DI container label for Quasar lib.
    /** @type {TeqFw_Core_App_Defaults} */
    MOD_CORE;

    constructor(spec) {
        /** @type {TeqFw_Core_App_Defaults} */
        this.MOD_CORE = spec['TeqFw_Core_App_Defaults$'];    // pin 'core' defaults
        Object.freeze(this);
    }
}
