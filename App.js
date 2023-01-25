import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Screens/Home';
import TicTacToe from './src/Screens/TicTacToe';
import TicTacToeTwoPlayer from './src/TicTacToeTwoPlayer';
const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  TicTacToe: {
    screen: TicTacToe,
    navigationOptions: {
      title: 'Single Player',
    },
  },
  TicTacToeTwoPlayer: {
    screen: TicTacToeTwoPlayer,
    navigationOptions: {
      title: 'Two Player',
    },
  },
},
{
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;