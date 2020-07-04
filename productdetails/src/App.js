import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import {MainView} from './views/mainView';

function App() {
  return (   
    <Provider store={store}>
       <MainView></MainView> 
    </Provider>  

  );
}

export default App;
