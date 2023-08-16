/**
 * UI component to reflect the state of backend connection as a LED indicator.
 *
 * @namespace TeqFw_Ui_Quasar_Front_Lib_Led_Connect
 */
// MODULE'S VARS
const NS = 'TeqFw_Ui_Quasar_Front_Lib_Led_Connect';
// Quasar codes for colors
const Q_COLOR_OFF = 'grey';
const Q_COLOR_OK = 'light-green';
const Q_COLOR_AJAX = 'lime';

// MODULE'S FUNCTIONS
/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @returns {TeqFw_Ui_Quasar_Front_Lib_Led_Connect.vueCompTmpl}
 */
/**
 * @param {TeqFw_Ui_Quasar_Front_Defaults} DEF
 * @param {TeqFw_Ui_Quasar_Front_Mod_Server_Connect_State} modState -  as interface
 */
export default function (
    {
        TeqFw_Ui_Quasar_Front_Defaults$: DEF,
        TeqFw_Web_Front_Api_Mod_Server_Connect_IState$: modState,
    }) {
    // VARS
    const _refActive = modState.getRefActive();
    const _refOnline = modState.getRefOnline();
    const template = `
<div>
    <q-btn dense flat round icon="lens" size="8.5px" :color="color" />
</div>
`;
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf TeqFw_Ui_Quasar_Front_Lib_Led_Connect
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        computed: {
            color() {
                if (_refOnline.value)
                    if (_refActive.value)
                        return Q_COLOR_AJAX;
                    else return Q_COLOR_OK;
                else return Q_COLOR_OFF;
            }
        },
    };
}
