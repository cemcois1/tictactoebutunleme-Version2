import React from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import TicTacToeTwoPlayer from "../TicTacToeTwoPlayer";
import TicTacToe from "./TicTacToe";
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TicTacToe')}
        >
          <Text style={styles.buttonText}>Single Player</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TicTacToeTwoPlayer')}
        >
          <Text style={styles.buttonText}>Two Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 400,
    height: '10%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Home;

