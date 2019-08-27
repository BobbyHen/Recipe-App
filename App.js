import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Breakfast from './screens/Breakfast';
import Lunch from './screens/Lunch';
import Dinner from './screens/Dinner';
import Dessert from './screens/Dessert';
import DatabaseConnect from './Components/DatabaseConnect';


const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Breakfast: Breakfast,
  Lunch: Lunch,
  Dinner: Dinner,
  Dessert: Dessert
},
{
  defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#000'
    }
  }
})


// const AppStackNavigator = createStackNavigator({
//   screen: AppDrawerNavigator
// })

const AppContainer = createAppContainer(AppDrawerNavigator);


export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}


