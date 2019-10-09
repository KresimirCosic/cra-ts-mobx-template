import React, { Component, createContext } from 'react';
import { HistoryAdapter } from 'mobx-state-router';

import Shell from './app/features/components/shell.component';
import history from './app/shared/routing/history.routing';
import RootStore from './app/shared/stores/root.store';

const rootStore = new RootStore();
export const RootStoreContext = createContext(rootStore);

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <RootStoreContext.Provider value={rootStore}>
          <Shell />
        </RootStoreContext.Provider>
      </div>
    );
  }
}

export default App;
