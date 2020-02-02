import React from 'react';
import IHeaderProps from '../components/Header/IHeaderProps';
import Header from '../components/Header/Header';

interface IHomeProps  {
  header_props: IHeaderProps
}

const Home = () => {
  const props: { header_props: IHeaderProps[]} = {
    header_props: [
    { link: 'Home', url: '/home' },
    { link: 'Store', url: '/store' },
    { link: 'About', url: '/about'},
    { link: 'Contact Us', url: '/contact' },
  ]};
  <React.Fragment>
    <Header props={props.header_props}></Header>
  </React.Fragment>
}


export default Home;