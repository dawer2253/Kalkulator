import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onButtonPress = () => {
        a = this.props.value
        this.props.klikniecie(a)
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onButtonPress} style={{ height: '25%', flex: 1, backgroundColor: this.props.bgColor, flexBasis: this.props.flexB, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text}> {this.props.value} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text: { fontSize: 48, color: 'white' }
});

export default Item;
