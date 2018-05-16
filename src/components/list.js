import React, { Component } from 'react';
import { Layout, Button } from 'element-react';
import styled from 'styled-components';
import 'element-theme-default';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import service from '../actions/list'
import folder from '../assets/img/folder_blue.png';

export default class List extends Component {
  state = {
    items: service.list(this.props.quantity),
    ready: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: !this.state.ready })
    }, 1000)
  }

  render() {
    return this.state.items.map((item, idx) => (
      <Row key={idx}>
        <ContainerImage>
          <ReactPlaceholder type='rect'  style={{ width: 30, height: 24 }}  showLoadingAnimation={true} ready={this.state.ready} color='#E0E0E0' delay={1000}>
            <ImageFolder src={folder} width="30" height="24"/>
          </ReactPlaceholder>
        </ContainerImage>
        <ReactPlaceholder showLoadingAnimation={true} ready={this.state.ready} rows={2} color='#E0E0E0' delay={1000} style={{ width: 100 }}>
          <ContainerDescription>
            <TitleItem>{item.title}</TitleItem>
            <DateItem>{item.date}</DateItem>             
          </ContainerDescription>
        </ReactPlaceholder>
      </Row>
    ));
  }
}


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
