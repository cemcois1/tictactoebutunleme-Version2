import React, { useState } from 'react';
import { Alert,View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TicTacToe = () => {
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
        console.log(i);
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
        console.log(i+"Sutun");

        Alert.alert(
          `Player ${board[0][i]} wins!`,
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

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      if(board[i][j]==' '){
        spaceCount+=1;
         }
    }
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
    if(!winner){
        RobotTurn();
    }
    checkWin();


  };

  const RobotTurn = () => {
        let newBoard = [...board];

        // check rows
        for (let i = 0; i < 3; i++) {
        if (newBoard[i][0] === 'X' && newBoard[i][1] === 'X' && newBoard[i][2] === ' ') {
        newBoard[i][2] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if (newBoard[i][0] === 'X' && newBoard[i][2] === 'X' && newBoard[i][1] === ' ') {
        newBoard[i][1] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if (newBoard[i][1] === 'X' && newBoard[i][2] === 'X' && newBoard[i][0] === ' ') {
        newBoard[i][0] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        }

        // check columns
        for (let i = 0; i < 3; i++) {
        if (newBoard[0][i] === 'X' && newBoard[1][i] === 'X' && newBoard[2][i] === ' ') {
        newBoard[2][i] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if (newBoard[0][i] === 'X' && newBoard[2][i] === 'X' && newBoard[1][i] === ' ') {
        newBoard[1][i] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if(newBoard[1][i] === 'X' && newBoard[2][i] === 'X' && newBoard[0][i] === ' ') {
        newBoard[0][i] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        }
        
        // check diagonals
        if (newBoard[0][0] === 'X' && newBoard[1][1] === 'X' && newBoard[2][2] === ' ') {
        newBoard[2][2] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if (newBoard[0][0] === 'X' && newBoard[2][2] === 'X' && newBoard[1][1] === ' ') {
        newBoard[1][1] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if (newBoard[1][1] === 'X' && newBoard[2][2] === 'X' && newBoard[0][0] === ' ') {
        newBoard[0][0] = 'O';
        setBoard(newBoard);
        setTurn('X');
        return;
        }
        if (newBoard[0][2] === 'X' && newBoard[1][1] === 'X' && newBoard[2][0] === ' ') {
        newBoard[2][0] = 'O';
        setTurn('X');
        return;
        };


//Random Tile Filling
        newBoard = [...board];
        let emptySpaces = [];
        for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        if (newBoard[i][j] === ' ') {
        emptySpaces.push([i, j]);
        }
        }
        }
        if (emptySpaces.length > 0) {
                let randomIndex = Math.floor(Math.random() * emptySpaces.length);
                let randomSpace = emptySpaces[randomIndex];
                newBoard[randomSpace[0]][randomSpace[1]] = 'O';
                setBoard(newBoard);
                setTurn('X');
        }
        }

  const renderRow = (row, rowIndex) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {row.map((col, colIndex) => (
          <TouchableOpacity
            key={colIndex}
            style={[styles.col,{borderLeftWidth: colIndex%3===0? 0:2,borderTopWidth:rowIndex%3===0?0:2,borderBottomWidth:rowIndex%3===2?0:2,borderRightWidth:colIndex%3===2?0:2}]}
            onPress={() => handlePress(rowIndex, colIndex)}
            activeOpacity={0.6}
          >
            <Text style={[styles.textStyle, { color: col === 'X' ? 'blue' : 'red' }]}>{col}</Text>

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

export default TicTacToe;
