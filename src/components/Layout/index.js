import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Routes from '../../router';
import Header from '../Header';
import Footer from '../Footer';
import { Nav } from './styles';
export default class Layout extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Header/>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/1231412">Post</Link>
        </Nav>
        <Routes />
        <Footer/>
      </BrowserRouter>
    );
  }
}