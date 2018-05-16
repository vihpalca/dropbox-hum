import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import './styles/index.css';
import Menu from './components/menu';
import Body from './components/body';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Menu />
          <Route exact path="/" component={Body} />
          <Route path="/files" component={Body} />
          <Route path="/papers" component={Body} />
          <Route path="/showcases" component={Body} />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled.div `
  margin-top: 0px;
  margin-left: 0px;
`

export default App;
