/**
 * Wrap Quasar UI library to use as ES6 module in TeqFW on the front.
 *
 * @namespace TeqFw_Ui_Quasar_Front_Ext
 */
// MODULE'S IMPORTS
import {loadCss, loadUmd} from '../../../web/@teqfw/web/js/loaders.mjs';

// MODULE'S MAIN
if (!window.Quasar) {
    await loadUmd('../../../../src/quasar/quasar.umd.prod.js');
    await loadUmd('../../../../src/quasar/icon-set/svg-material-icons.umd.prod.js');
    await loadCss('../../../../src/quasar/quasar.prod.css');
}
//
/**
 * {@link https://next.quasar.dev/vue-components/dialog#qdialog-api QDialog API}
 * @typedef TeqFw_Ui_Quasar_Front_Ext.QDialog
 * @method focus
 * @method hide
 * @method shake
 * @method show
 * @method toggle
 */

const Quasar = window.Quasar;
export {Quasar as default} ;
