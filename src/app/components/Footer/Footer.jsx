import React, { Component } from 'react';
import { Grid, Header, List, Divider } from 'semantic-ui-react';
const socialMenu = () => (
  <>
    <Header inverted as="h4" content="Social" />
    <List link inverted>
      <List.Item as="a" href="//www.youtube.com/channel/UC8RDbmn1sqWSaLYY30syrGg">
        YouTube
      </List.Item>
      <List.Item as="a" href="//github.com/withdoggy/">
        GitHub
      </List.Item>
    </List>
  </>
);

const contactMenu = () => (
  <>
    <Header inverted as="h4" content="Kontakt" />
    <List link inverted>
      <List.Item>Email: fff@ss.ss</List.Item>
    </List>
  </>
);

const copyright = () => (
  <>
    <List horizontal inverted divided link size="small">
      <List.Item>SheepDogs.pl</List.Item>
    </List>
  </>
);

export default class Footer extends Component {
  render() {
    return (
      <>
        <Grid divided inverted stackable columns={2}>
          <Grid.Row>
            <Grid.Column>{socialMenu()}</Grid.Column>
            <Grid.Column>{contactMenu()}</Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        {copyright()}
      </>
    );
  }
}
