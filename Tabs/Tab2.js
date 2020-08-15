import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Modal } from 'react-native';
import { Container, List } from 'native-base';
import axios from 'axios';
import Items from './Items';


export default class Tab2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    this.getapi();
  }
  getapi = async () => {
    await axios.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=745dee2c375a4ccea65fed4cf368fbf7')
      .then(res => this.setState({ data: res.data.articles }))
      .catch(error => console.log(error))
  }
  View = () => {
    if (this.state.data.length == 0) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={"large"} color='orange' />
          <Text style={{ marginTop: 10 }}>Lütfen Bekleyin ...</Text>
        </View>
      )
    } else {
      return (
          <List
            dataArray={this.state.data}
            renderRow={(item) => {
              return (
                <Items data={item} />
              );
            }}
            keyExtractor={item => item.url}
          />
      )
    }
  }
  render() {
    console.log(this.state.data)
    return (
      <Container>
        {this.View()}
      </Container>
    );
  }
}