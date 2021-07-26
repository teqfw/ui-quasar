/**
 * DI-compatible wrapper for 'vue' library.
 * 'vue' library does not compatible with DI-container and should be loaded on front with HTML '<script>' tag.
 *
 * @namespace TeqFw_Quasar_Front_Lib
 */
export default class TeqFw_Quasar_Front_Lib {
    #quasar;

    constructor() {
        // noinspection JSValidateTypes
        /** @type {{Quasar}} */
        const window = self;
        if (window.Quasar) {
            this.#quasar = window.Quasar;
        } else {
            console.log(`
Add

<script type="application/javascript" src="./src/quasar/quasar.umd.prod.js"></script>
<script type="application/javascript" src="./src/quasar/icon-set/svg-material-icons.umd.prod.js"></script>
<link rel="stylesheet" href="./src/quasar/quasar.prod.css">

to your startup HTML to use Quasar UI.            
`);
        }
    }

    getQuasar() {
        return this.#quasar;
    }
}

