import { RouterState, RouterStore } from 'mobx-state-router';

import routes from '../routing/routes.routing';

const notFound = new RouterState('notFound');

export default class RootStore {
  routerStore = new RouterStore(this, routes, notFound);
}

export const rootStore = new RootStore();
