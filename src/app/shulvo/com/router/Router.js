import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';


import DeviceRegistration from '../uiComponents/DeviceRegistration';
import Profile from '../uiComponents/Profile';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Register Device': {
        screen: DeviceRegistration,
        navigationOptions: {
            tabBarLabel: 'Register Device',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                                               color={tintColor}/>
        },
    },
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/>
        },
    },
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },

        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};