/**
 * Backend connection state model implementation with Vue 3 refs.
 *
 * @implements TeqFw_Web_Front_Api_Mod_Server_Connect_IState
 */
export default class TeqFw_Ui_Quasar_Front_Mod_Server_Connect_State {
    /**
     * @param {TeqFw_Vue_Front_Ext_Vue.ref|function} ref
     */
    constructor(
        {
            ['TeqFw_Vue_Front_Ext_Vue.ref']: ref,
        }) {
        // VARS
        let _online = ref(false);
        let _active = ref(false);
        /**
         * Number of active requests.
         * @type {number}
         */
        let _actCount = 0;

        // INSTANCE METHODS

        this.getRefActive = () => _active;

        this.getRefOnline = () => _online;

        this.isOnline = () => _online.value;

        this.setOffline = () => {
            _online.value = false;
            _actCount = 0;
        };

        this.setOnline = () => _online.value = true;

        this.startActivity = () => {
            _actCount++;
            if (!_active.value) _active.value = true;
        };

        this.stopActivity = () => {
            _actCount--;
            if (_actCount <= 0) {
                if (_actCount < 0) _actCount = 0;
                if (_active.value) _active.value = false;
            }
        };

        // MAIN
        window.addEventListener('offline', this.setOffline);
        window.addEventListener('online', this.setOnline);
        if (navigator.onLine) this.setOnline();
    }
}
