import "../common/template/dependencies";
import React from "react";
import Header from "../common/template/header";
import SideBar from "../common/template/sidebar";
import Footer from '../common/template/footer'
import Routes from './routes'
import { Route } from "react-router";

export default (props) => (
  <div className="skin-blue">
    <Header />
    <SideBar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
  </div>
);
