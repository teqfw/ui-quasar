/**
 * Class to integrate plugin into TeqFW application.
 * @extends TeqFw_Core_Plugin_Init_Base
 */
export default class TeqFw_Ui_Quasar_Plugin_Init {

    constructor(spec) {
        /** @type {TeqFw_Ui_Quasar_Defaults} */
        const DEF = spec['TeqFw_Ui_Quasar_Defaults$'];    // singleton

        this.getCommands = function () {
            return [];
        };

        this.getHttpStaticMaps = function () {
            return {
                '/quasar/': '/quasar/dist/',
            };
        };

        this.getServicesList = function () {
            return [];
        };

        this.getServicesRealm = function () {
            return DEF.BACK_REALM;
        };
    }


}
