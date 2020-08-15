import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

class Modals extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const width = Dimensions.get('window').width
        return (
            <View>
                <Image
                    source={{ uri: this.props.data.urlToImage }}
                    style={{ height: width / 2, width: width }}
                />
                <Text style={{ fontSize: 20 }} >
                    {this.props.data.author}
                </Text>
                <Text>
                    {this.props.data.title}
                </Text>
                <Text>
                    {this.props.data.description}
                </Text>

            </View>
        )

    }
}

export default Modals; 