import React from 'react';
import IHeaderProps from '../components/Header/IHeaderProps';
import Header from '../components/Header/Header';

interface IHomeProps  {
  header_props: IHeaderProps
}

const Home = ( props: IHomeProps  ) => {
  <React.Fragment>
    <Header props={props.header_props}></Header>
  </React.Fragment>
}

export default Home;