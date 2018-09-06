import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

export default class ContractItems extends Component {

    _onEditContract = () => {
        let contractId = this.props.contractId;

    };

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditContract', { contractId: this.props.contractId })}>
                <View style={styles.rowContainer}>
                    <Image source={{ uri: this.props.contractCover }}
                        style={styles.contractCover}
                        resizeMode="contain" />
                    <View style={styles.rowText}>
                        <Text style={styles.contractTitle} numberOfLines={2} ellipsizeMode={'tail'}>
                            {this.props.contractTitle}
                        </Text>
                        <Text style={styles.signedBy} numberOfLines={1} ellipsizeMode={'tail'}>
                            {this.props.signedBy}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
    },
    contractTitle: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    signedBy: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    contractCover: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    rowText: {
        flex: 4,
        flexDirection: 'column'
    }
});