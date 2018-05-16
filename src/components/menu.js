import React, { Component } from 'react';
import { Layout } from 'element-react';
import { BrowserRouter as Router, Route, NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';

import '../styles/menu.css';
import theme from '../theme';

import logo_drop from '../assets/img/Dropbox_Icon.png';



class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: !this.state.ready })
    }, 1000)
  }

  closeMenu = () => {
    document.getElementById('bg-menu').classList.remove('menu-active')
  };

  render() {
    return (
      <Layout.Col xs="0" sm="4" md="4" lg="4">
        <Wrapper id="bg-menu">            
          <ContainerImage>
            <ReactPlaceholder type={'media'} showLoadingAnimation={true} ready={this.state.ready} rows={0} color='#E0E0E0' delay={3000}>  
              <LinkLogo href="/">
                <Logo src={logo_drop} width="32" height="32" />
              </LinkLogo>
            </ReactPlaceholder>
          </ContainerImage>            
          <ListMenu>
            <ItemMenu>
              <Link to="/" exact className="link" activeClassName="active" onClick={this.closeMenu}>Home</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/files" exact className="link" activeClassName="active" onClick={this.closeMenu}>File</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/papers" exact className="link" activeClassName="active" onClick={this.closeMenu}>Paper</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/showcases" exact className="link" activeClassName="active" onClick={this.closeMenu}>Showcase</Link>
            </ItemMenu>
          </ListMenu>
        </Wrapper>
      </Layout.Col> 
    );
  }
}


const ListMenu = styled.ul `
  list-style-type: none;
`;
const ItemMenu = styled.li `
  font-size: 16px;
  line-height: 16px;
  display: block;
  -ms-flex: 1;
  text-decoration: none;
  margin-top: 25px;

  &:hover {
    opacity: 0.7;
  }
`;


const ContainerImage = styled.div `
  padding-left: 40px;
`

const LinkLogo = styled.a `

`

const Logo = styled.img `
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Wrapper = styled.nav `
  height: ${theme.height}px;
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  transition: all 300ms ease;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    width: 0;
  }
`

export default Menu;
