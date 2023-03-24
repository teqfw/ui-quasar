/**
 * UI component for loading spinner.
 *
 * @namespace TeqFw_Ui_Quasar_Front_Lib_Spinner
 */
// MODULE'S VARS
const NS = 'TeqFw_Ui_Quasar_Front_Lib_Spinner';

// MODULE'S FUNCTIONS
/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @returns {TeqFw_Ui_Quasar_Front_Lib_Spinner.vueCompTmpl}
 */
export default function (spec) {
    /** @type {TeqFw_Ui_Quasar_Front_Defaults} */
    const DEF = spec['TeqFw_Ui_Quasar_Front_Defaults$'];

    // VARS
    const template = `
<q-inner-loading :showing="loading">
    <q-spinner-gears size="50px" color="${DEF.COLOR_Q_PRIMARY}"/>
</q-inner-loading>    
    `;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf TeqFw_Ui_Quasar_Front_Lib_Spinner
     */
    return {
        name: NS,
        template,
        props: {
            loading: Boolean,
        },
    };
}
