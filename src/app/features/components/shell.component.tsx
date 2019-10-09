import React, { Component } from 'react';
import { RouterView } from 'mobx-state-router';

import Header from './header.component';
import Footer from './footer.component';

import withRootStore from '../../shared/hocs/withRootStore.hoc';
import viewMap from '../../shared/routing/viewMap.routing';
import RootStore from '../../shared/stores/root.store';

type ShellProps = {
  rootStore: RootStore;
};

class Shell extends Component<ShellProps> {
  render() {
    const { routerStore } = this.props.rootStore;

    return (
      <div className='Shell'>
        <Header />
        <RouterView routerStore={routerStore} viewMap={viewMap} />
        <Footer />
      </div>
    );
  }
}

export default withRootStore(Shell);
