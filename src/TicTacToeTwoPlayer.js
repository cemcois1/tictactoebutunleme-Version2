import React, { useState } from 'react';
import { Alert,View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TicTacToeTwoPlayer = () => {
  const [board, setBoard] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const checkWin = () => {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        setWinner(board[i][0]);
        Alert.alert(
          `Player ${board[i][0]} wins!`,
          'Do you want to play again?',
          [
            {
              text: 'Yes',
              onPress: handleReset
            },
            {
              text: 'No',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false },
        );
        return;
      }
    }

    // check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        setWinner(board[0][i]);
        Alert.alert(
          `Player ${board[0][1]} wins!`,
          'Do you want to play again?',
          [
            {
              text: 'Yes',
              onPress: handleReset
            },
            {
              text: 'No',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false },
        );
        return;
      }
    }

    // check diagonals
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      setWinner(board[0][0]);
      Alert.alert(
        `Player ${board[0][0]} wins!`,
        'Do you want to play again?',
        [
          {
            text: 'Yes',
            onPress: handleReset
          },
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
      return;
    }
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      setWinner(board[0][2]);
      Alert.alert(
        `Player ${board[0][2]} wins!`,
        'Do you want to play again?',
        [
          {
            text: 'Yes',
            onPress: handleReset
          },
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
      return;
    }
    let spaceCount=0;
    for (let i = 0; i < 3; i++){
      for (let j = 0; i < 3; i++){
      if(board[i][j]==' '){
        spaceCount+=1;
        
      }}
    }
    if(spaceCount==0){
      Alert.alert(
        `Draw!`,
        'Do you want to play again?',
        [
          {
            text: 'Yes',
            onPress: handleReset
          },
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }
  };
  const handlePress = (row, col) => {
    if (board[row][col] !== ' '||winner) {
      return;
    }
    let newBoard = [...board];
    newBoard[row][col] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
    checkWin();
  };

  const renderRow = (row, rowIndex) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {row.map((col, colIndex) => (
          <TouchableOpacity
            key={colIndex}
            style={styles.col}
            onPress={() => handlePress(rowIndex, colIndex)}
            activeOpacity={0.6}
          >
            <Text style={styles.textStyle}>{col}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const handleReset = () => {
    setBoard([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
    setTurn('X');
    setWinner(null);
  }
  return (
    <View style={[styles.container]}>
        
      {board.map((row, index) => renderRow(row, index))}
      {winner && (
        <View style={styles.winnerContainer}>
          <Text style={styles.winnerText}>{winner} wins!</Text>
        </View>
      )}
      <View style={styles.resetContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  textStyle:{
    fontSize:48
  }
  ,
  col: {
    width:128,
    height:128,
    
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2
  },
  
  winnerContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  winnerText: {
    margin:50,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  resetContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  resetButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  resetText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TicTacToeTwoPlayer;
