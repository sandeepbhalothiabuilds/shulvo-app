import React, {Component} from 'react';
import {Dimensions, Platform, Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';


import DeviceRegistration from  '../components/uiComponents/DeviceRegistration';
import InvoiceGeneration from  '../components/uiComponents/InvoiceGeneration';
import ContractGeneration from  '../components/uiComponents/ContractGeneration';
import EditContract from  '../components/uiComponents/EditContract';
import Profile from '../components/uiComponents/Profile';
import SignIn from '../components/uiComponents/SignIn';
import SignUp from '../components/uiComponents/SignUp';
import LogoTitle from '../components/uiComponents/LogoTitle';
import Styles from '../components/uiComponents/Styles';

let screen = Dimensions.get('window');

export const BottomTabs = createBottomTabNavigator({
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
            header : null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
    EditContract: {
        screen: EditContract,
        navigationOptions: ({navigation}) => ({
            header : null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});

export const SignInSignUp = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            header : null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: ({navigation}) => ({
            header : null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),    
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: ({navigation}) => ({
            header : null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
},
{
    initialRouteName: 'Profile',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            BottomTabs: {
                screen: BottomTabs,
                navigationOptions: ({navigation}) => ({
                    headerTitle: <LogoTitle />,
                    headerRight: (
                        <Button
                        onPress={() => navigation.navigate('BottomTabs')}
                        title="Home"
                        style = {Styles.buttonText}                    />
                          ),
                    gesturesEnabled: false,
                    backgroundColor: '#fff',
                })
            },
            ContractStack: {
                screen: ContractStack,
                navigationOptions: ({navigation}) => ({
                    headerTitle: <LogoTitle />,
                    headerRight: (
                        <Button
                        onPress={() => navigation.goBack()}
                        title="Home"
                        style = {Styles.buttonText}                    />
                          ),
                    gesturesEnabled: false,
                    backgroundColor: '#fff',
                })
            },
            SignInSignUp: {
                screen: SignInSignUp,
                navigationOptions: ({navigation}) => ({
                    headerTitle: <LogoTitle />,
                    headerRight: (
                    <Button
                    onPress={() => navigation.goBack()}
                    title="Home"
                    style = {Styles.buttonText}                    />
                      ),
                    gesturesEnabled: false,
                    backgroundColor: '#fff',
                })
            }

        },
    );
};