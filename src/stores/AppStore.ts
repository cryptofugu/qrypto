
import walletStore from './WalletStore';
import uiStore from './UiStore';
import homeStore from './HomeStore';

class AppStore {
  public location = '/import-mnemonic';
  public ui = {};
  public walletStore = {};
  public homeStore = {};

  constructor() {
    this.ui = uiStore;
    this.walletStore = walletStore;
    this.homeStore = homeStore;
  }
}

const store = new AppStore();
window.store = store; // allows us to see store in browser console for debugging
export default store;