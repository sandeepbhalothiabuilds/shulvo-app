import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';


import DeviceRegistration from  '../components/uiComponents/DeviceRegistration';
import InvoiceGeneration from  '../components/uiComponents/InvoiceGeneration';
import ContractGeneration from  '../components/uiComponents/ContractGeneration';

import EditContract from  '../components/uiComponents/EditContract';

import Profile from '../components/uiComponents/Profile';

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
     'Generate Invoice': {
            screen: InvoiceGeneration,
            navigationOptions: {
                tabBarLabel: 'Generate Invoice',
                tabBarIcon: ({tintColor}) => <Icon name="ios-document-outline" type="ionicon" size={28}
                                                   color={tintColor}/>
            },
        },
       'ContractGeneration': {
                    screen: ContractGeneration,
                    navigationOptions: {
                        tabBarLabel: 'Contracts',
                        tabBarIcon: ({tintColor}) => <Icon name="ios-contacts-outline" type="ionicon" size={28}
                                                           color={tintColor}/>
                    },
                },
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor}/>
        },
    },
});





export const ContractStack = createStackNavigator({
    ContractGeneration: {
        screen: ContractGeneration,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    EditContract: {
        screen: EditContract,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
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
            ContractStack: {
                screen: ContractStack,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            }

        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};