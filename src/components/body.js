import React, { Component } from 'react';
import { Layout, Button } from 'element-react';
import styled from 'styled-components';
import 'element-theme-default';
import "react-placeholder/lib/reactPlaceholder.css";

import '../styles/body.css';
import Top from './top'
import List from './list'

export default class Body extends Component {

  render() {
    return (
      <div id="navresp">
        <Top url={this.props.match.url}/>
        <Layout.Col className="container-text" xs="24" sm="14" md="14" lg="14">
          <Text>Recente</Text>          
        </Layout.Col>
        <Layout.Col className="container-list" xs="24" sm="24" md="16" lg="20">
          <List quantity={Math.floor((Math.random() * 8) + 1)}/>
        </Layout.Col>
        <Layout.Col className="wrapper-button" xs="0" sm="0" md="8" lg="4">
          <ContainerButton>
            <Button type="primary">Upload Files</Button>
          </ContainerButton>
        </Layout.Col>
      </div>
    )
  }
}



const Text = styled.h5 `
  line-height: 40px;
  font-size: 12px;
  color: #637282;
  font-weight: inherit;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin-left: 12px;
  }
`

const ContainerButton = styled.div `
  text-align: center;
`
