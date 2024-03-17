/**
 * Wrap Quasar UI library to use as ES6 module in TeqFW on the front.
 *
 * @namespace TeqFw_Ui_Quasar_Front_Ext
 */

// MODULE'S FUNCS
/**
 * Load UMD script from the back and execute it.
 * @param {string} url
 * @return {Promise}
 */
async function loadUmd(url) {
    return new Promise((resolve, reject) => {
        // Create a script element
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
        document.head.appendChild(script);
    });
}

/**
 * Load CSS script from the back and add it to the DOM.
 * @param url
 * @return {Promise}
 */
async function loadCss(url) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.onload = () => resolve();
        link.onerror = (error) => reject(error);
        document.head.appendChild(link);
    });
}

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
