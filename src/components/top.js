import React, { Component } from 'react';
import { Layout, Input } from 'element-react';
import styled from 'styled-components';
import 'element-theme-default';

import '../styles/body.css';
import notification from '../assets/img/notification.png';
import profile from '../assets/img/profile.png';
import menuMobile from '../assets/img/menu.png';

class Top extends Component {
  state = {
    url: 'Home'
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

  onFocus = () => {
    console.log('show!!');
  }

  openMenu = () => {
    document.getElementById('bg-menu').classList.add('menu-active')
  }

  render() {
    return (
      <div>
        <Layout.Row type="flex" className="container-menu" span="24">
          <Layout.Col xs="8" sm="10" md="15" lg="15">
            <Title>{this.state.url}</Title>
            <ImageMenu onClick={this.openMenu} src={menuMobile} width="22" height="22"/>
          </Layout.Col>
          <Layout.Col xs="10" sm="12" md="6" lg="6">
            <Input onFocus={ this.onFocus }  placeholder="search" icon="search" />          
          </Layout.Col>
          <Layout.Col className="align-center" span="3">
            <ImageNotification src={notification} width="22" height="22"/>
          </Layout.Col>
          <Layout.Col span="3">
            <ImageProfile src={profile} width="32" height="32"/>
          </Layout.Col>    
        </Layout.Row>
        <Layout.Row type="flex" span="24">
          <Layout.Col className="wrapper-mobile" span={24}>
            <TitleMobile>Início</TitleMobile>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}


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


const ImageFolder = styled.img `

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

const ImageProfile = styled.img `
`

const ContainerImage = styled.div ``

const ContainerDescription = styled.div `
  margin-left: 10px;
`

export default Top;
