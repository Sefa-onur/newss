import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button, Content, Container, Header, Icon, Title } from 'native-base';
import { Linking, Modal } from 'react-native';
import Modals from './Modals';

class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalvisible: false
        }
    }
    render() {
        return (
            <Content>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={{ uri: this.props.data.urlToImage }} />
                    </Left>
                    <Body>
                        <Text numberOfLines={2} > {this.props.data.author} </Text>
                        <Text note numberOfLines={2}> {this.props.data.title} </Text>
                    </Body>
                    <Right>
                        <Button transparent style={{ marginTop: 5 }} onPress={() => this.setState({ modalvisible: true })} >
                            <Text>View</Text>
                        </Button>
                    </Right>
                </ListItem>
                <Modal
                    visible={this.state.modalvisible}
                    animationType='slide'
                    transparent={true}
                >
                    <Container style={{ margin: 15, marginBottom: 0, backgroundColor: '#fff' }}>
                        <Header style={{ backgroundColor: 'black' }}>
                            <Left>
                                <Button transparent onPress={() => { this.setState({ modalvisible: false }) }} >
                                    <Icon name="close" style={{ color: 'white', fontSize: 24 }} />
                                </Button>
                            </Left>
                            <Body>
                                <Title children={this.props.data.author} style={{ color: 'orange' }} />
                            </Body>
                            <Right>
                                <Button transparent onPress={() => { Linking.openURL(this.props.data.url) }} >
                                    <Icon name="location" style={{ color: 'white', fontSize: 24 }} />
                                </Button>
                            </Right>
                        </Header>
                        <Content>
                            <Modals data = {this.props.data}/> 
                        </Content>
                    </Container>
                </Modal>
            </Content>
        )
    }
}

export default Items;
