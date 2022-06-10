import React from 'react';
import {element} from 'prop-types';
import Header from '../Shared/Layout/Header.js'
import './App.css';
import Footer from '../Shared/Layout/Footer.js';
import Content from '../Shared/Layout/Content.js';

function App(props) {
  return (
    <div className="App">
      <Header title="Routing" url="https://github.com/" />
      <Content>
        {props.children}
      </Content>
      <Footer/> 
    </div>
  );
}

App.propTypes = {
  children: element.isRequired,
}
export default App;
