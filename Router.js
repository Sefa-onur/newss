import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style = {{backgroundColor:'black'}} >
        <Left/>
          <Body>
            <Title style = {{color:'orange'}} >Haberler</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading='Politika' tabStyle = {{backgroundColor:'black'}} activeTabStyle = {{backgroundColor:'black'}} activeTextStyle = {{color:'orange'}} textStyle = {{color:'orange'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Teknoloji" tabStyle = {{backgroundColor:'black'}} activeTabStyle = {{backgroundColor:'black'}} activeTextStyle = {{color:'orange'}} textStyle = {{color:'orange'}}>
            <Tab2 />
          </Tab>
          <Tab heading="Ekonomi" tabStyle = {{backgroundColor:'black'}} activeTabStyle = {{backgroundColor:'black'}} activeTextStyle = {{color:'orange'}} textStyle = {{color:'orange'}}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}