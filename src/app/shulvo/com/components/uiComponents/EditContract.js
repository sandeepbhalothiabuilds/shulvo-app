import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class EditContract extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('id', 'NO-ID');

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Edit Contract #{JSON.stringify(itemId)}
                </Text>
                <Button
                    title="Back To Contracts"
                    onPress={() => this.props.navigation.navigate('Tabs')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
