import React from 'react';
import { addNavigationHelpers, StackNavigator} 'from react-navigation';

import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

import LoginToHome from './shulvo/com/src/components/uiComponents/LoginToHome';

export cont AppNavigator = StackNavigator({
    Main: {screen: LoginToHome}},
    {
    initialRouteName: 'Main';
    });

cont AppNavigationState = ({dispatch, nav}) =>(
    <AppNavigator
    navigation = {addNavigationHelpers(dispatch, state: nav)}
    />
);

cont mapStateToProps = state =>  ({
nav: state.nav,
});

export default connect(mapStateToProps))(AppNavigationState);