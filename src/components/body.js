import React, { Component } from 'react';
import { Layout, Button } from 'element-react';
import styled from 'styled-components';
import 'element-theme-default';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import '../styles/body.css';
import folder from '../assets/img/folder_blue.png';
import Top from './top'
import List from './list'

export default class Body extends Component {

  render() {
    return (
      <div id="navresp">
        <Top url={this.props.match.url}/>
        <Layout.Col className="container-text" xs="24" sm="14" md="14" lg="14">
          <Text>Recente</Text>
          <Line />
        </Layout.Col>
        <Layout.Col className="container-list" xs="24" sm="14" md="14" lg="14">
          <List quantity={Math.floor((Math.random() * 8) + 1)}/>
        </Layout.Col>
        <Layout.Col className="wrapper-button" xs="0" sm="5" md="5" lg="5">
          <ContainerButton>
            <Button type="primary">Upload Files</Button>
          </ContainerButton>
        </Layout.Col>
      </div>
    )
  }
}

const Line = styled.hr `
  border-top: 1px solid #E6E8EB;
`

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

const TitleItem = styled.label `
  display: block;
  font-weight: 400;
  color: #1B2733;
  font-size: 14px;
  text-align: left;
`

const DateItem = styled.label `
  width: 100%;
  color: #637282;
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  -webkit-font-smoothing: antialiased;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Row = styled.div `
  height: 64px;
  width: 100%;
  min-height: 38px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  border-bottom: solid 1px #E6E8EB;

  &:hover {
    cursor: pointer;
  }
`
const ContainerButton = styled.div `
  text-align: center;
  margin-top: -8px;
`

const ImageFolder = styled.img `
`
const ContainerImage = styled.div `
  margin: 12px;
`

const ContainerDescription = styled.div `
  margin-left: 10px;
`
