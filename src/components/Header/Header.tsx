import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Button } from 'semantic-ui-react';

import IHeaderProps, { IHeaderLink }from './IHeaderProps';

const HeaderSiteMapLink = (props: IHeaderLink[] )  =>
  <Grid.Row>
    {
      props.map((link) =>
        <Grid.Column>
          <Link to={link.url}>{link.link}</Link>
        </Grid.Column>
      )
    }
  </Grid.Row>

const StaticBar = () => 
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <Button animated>
          <Button.Content visible>
            <Icon name='heart'/>
            </Button.Content>
            <Button.Content hidden>Shop</Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>



const Header: React.StatelessComponent<IHeaderProps> = (props: IHeaderProps) => {
  const site_map: IHeaderLink[] = props.links || [
    { link: 'Home', url: '/home' },
    { link: 'Store', url: '/store' },
    { link: 'About', url: '/about'},
    { link: 'Contact Us', url: '/contact' },
  ];
  
  return (
    <React.Fragment>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={2}>
            <h3 className="">Sucus Cacti</h3>
          </Grid.Column>
          <Grid.Column width={6}>
            <HeaderSiteMapLink props={site_map} />
          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export default Header;