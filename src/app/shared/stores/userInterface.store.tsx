import { decorate, observable, computed, action } from "mobx";
import RootStore from "./root.store";

export default class UserInterfaceStore {
  overlay: boolean = false;
  menu: boolean = false;

  constructor(private rootStore: RootStore) {}

  get overlayStatus(): boolean {
    return this.overlay;
  }

  get menuStatus(): boolean {
    return this.menu;
  }

  overlayOff(): void {
    this.overlay = false;
  }

  menuOff(): void {
    this.menu = false;
  }

  overlayOn(): void {
    this.overlay = true;
  }

  menuOn(): void {
    this.menu = true;
  }
}

decorate(UserInterfaceStore, {
  overlay: observable,
  menu: observable,

  overlayStatus: computed,
  menuStatus: computed,

  overlayOff: action,
  menuOff: action,
  overlayOn: action,
  menuOn: action,
});
