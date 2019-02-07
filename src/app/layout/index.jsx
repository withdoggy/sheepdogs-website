import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from '../components/NavBar/Navbar';
import { Container, Segment } from 'semantic-ui-react';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const Content = styled(Container)`
  margin-top: 6em
  flex: 1;
`;
const FooterSegment = styled(Segment)`
  margin: 5em 0em 0em
  padding: 5em 0em
  text-align: center;
`;
export default class PageLayout extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar currentUser={this.props.childProps.currentUser} />
        <Content>{this.props.children}</Content>
        <FooterSegment inverted>
          <Footer />
        </FooterSegment>
      </Wrapper>
    );
  }
}
