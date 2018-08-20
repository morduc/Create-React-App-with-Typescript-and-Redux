import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import { AppContainer } from 'react-hot-loader';
const render = () => {
   ReactDOM.render(
    <Provider store={store} >     
              <ConnectedRouter history={history}>
                  <AppContainer>
                      <App/>
                  </AppContainer>
              </ConnectedRouter>
      </Provider>,

    document.getElementById('root') as HTMLElement
  );
}
registerServiceWorker();
render();

if(module.hot) {
  module.hot.accept('./App', ()=> {
  render();

})
}