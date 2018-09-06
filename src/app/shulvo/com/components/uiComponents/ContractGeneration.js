import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import ContractItems from './ContractItems';

export default class ContractGeneration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contracts: [
                {
                    contractId: 1,
                    contractTitle: 'Walmart Contract',
                    signedBy: 'Sandeep',
                    contractCover: 'http://www.underconsideration.com/brandnew/archives/walmart_detail.gif'
                },
                {
                    contractId: 2,
                    contractTitle: 'Aldi Contract',
                    signedBy: 'Gaurav',
                    contractCover: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Aldi_Sud_Logo_2017.png'
                },
                {
                    contractId: 3,
                    contractTitle: 'Big Bazar Contract',
                    signedBy: 'Jitan',
                    contractCover: 'https://www.bigbazaar.com/assets/images/logo-bigbazaar.jpg'
                }
            ]
        }
    }

    _renderItem = ({item}) => (
        <ContractItems
            contractId={item.contractId}
            contractTitle={item.contractTitle}
            signedBy={item.signedBy}
            contractCover={item.contractCover}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.contractId.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.contracts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});