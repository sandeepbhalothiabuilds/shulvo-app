import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import BookcaseItem from './bookcaseItem';

export default class ContractGeneration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Walmart Contract',
                    author: 'Sandeep',
                    thumbnail: 'http://www.underconsideration.com/brandnew/archives/walmart_detail.gif'
                },
                {
                    id: 2,
                    title: 'Aldi Contract',
                    author: 'Gaurav',
                    thumbnail: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Aldi_Sud_Logo_2017.png'
                },
                {
                    id: 3,
                    title: 'Big Bazar Contract',
                    author: 'Jitan',
                    thumbnail: 'https://www.bigbazaar.com/assets/images/logo-bigbazaar.jpg'
                }
            ]
        }
    }

    _renderItem = ({item}) => (
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
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