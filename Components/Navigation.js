import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Breakfast from './screens/Breakfast';
import Lunch from './screens/Lunch';
import Dinner from './screens/Dinner';
import Dessert from './screens/Dessert';
import DatabaseConnect from './Components/DatabaseConnect';

export default class Navigation extends Component {

    const AppDrawerNavigator = createDrawerNavigator({
        Home: HomeScreen,
        Breakfast: Breakfast,
        Lunch: Lunch,
        Dinner: Dinner,
        Dissert: Dissert
    },
    {
        defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#00aaff'
        }
        }
    })
    
    
    // const AppStackNavigator = createStackNavigator({
    //   screen: AppDrawerNavigator
    // })
    
    const AppContainer = createAppContainer(AppDrawerNavigator);
    
    
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
        },
        drawerStyles: {
        backgroundColor: '#3399ff',
        color: '#fff'
        }
    });

}
