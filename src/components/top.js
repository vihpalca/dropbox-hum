import React, { Component } from 'react';
import { Layout, Input } from 'element-react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';

import '../styles/top.css';
import notification from '../assets/img/notification.png';
import profile from '../assets/img/profile.png';
import menuMobile from '../assets/img/menu.png';

export default class Top extends Component {
  state = {
    url: 'Home',
    ready: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: !this.state.ready })
    }, 1000)
  }

  componentWillMount() {
    switch (this.props.url) {
      case '/':
        this.setState({ url: 'Home' })
        break;
      case '/files':
        this.setState({ url: 'File' })
        break;
      case '/papers':
        this.setState({ url: 'Paper' })
        break;
      case '/showcases':
        this.setState({ url: 'Showcase' })
        break;
      default:
        this.setState({ url: 'Home' })
        break;
    }
  }

  openMenu = () => {
    document.getElementById('bg-menu').classList.add('menu-active')
  }

  render() {
    return (
      <Wrapper>
        <Layout.Row type="flex" className="container-menu" span="24">
          <Layout.Col xs="10" sm="10" md="14" lg="18">
            <ReactPlaceholder rows={1} showLoadingAnimation={true} ready={this.state.ready} color='#E0E0E0' delay={3000}>
              <Title>{this.state.url}</Title>
            </ReactPlaceholder>
            <ImageMenu onClick={this.openMenu} src={menuMobile} width="22" height="22"/>
          </Layout.Col>
          <Layout.Col xs="7" sm="10" md="6" lg="4">
            <Input placeholder="search" icon="search" />          
          </Layout.Col>
          <Layout.Col className="align-center" xs="4" sm="2" md="2" lg="1">
            <ImageNotification src={notification} width="22" height="22"/>
          </Layout.Col>
          <Layout.Col xs="3" sm="2" md="2" lg="1">
            <ImageProfile src={profile} width="32" height="32"/>
          </Layout.Col>    
        </Layout.Row>
        <Layout.Row type="flex" span="24">
          <Layout.Col className="wrapper-mobile" span={24}>
            <TitleMobile>Início</TitleMobile>
          </Layout.Col>
        </Layout.Row>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div ``

const Title = styled.h3 `
  font-size: 20px;
  line-height: 32px;
  padding: 0;
  margin: 0;
  color: #1B2733;
  font-weight: normal;

  @media (max-width: 768px) {
    display: none;
  }
`
const TitleMobile = styled.h3 `
  font-size: 20px;
  line-height: 32px;
  padding: 0;
  margin: 0;
  color: #1B2733;
  font-weight: normal;
  margin-left: 12px;
`

const ImageNotification = styled.img `
  margin-top: 7px;
`

const ImageMenu = styled.img `
  display: none;
  margin-top: 7px;

  @media (max-width: 768px) {
    display: block;
  }
`

const ImageProfile = styled.img ``

