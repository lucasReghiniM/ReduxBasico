import React from 'react';

//redux
import { Provider } from 'react-redux'
import store from './store/index'

//components
import Video from "./components/Video"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div>
      <h1>AULAS</h1>
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;
