import React, { FC } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IPlayScreenProps, Array } from "./PlayScreenTypes";
import Square from "./Square";

export const PlayScreen: FC<IPlayScreenProps> = (props): JSX.Element => {
  const gridSize = Number(props.currentGameSize);
  const totalMoves = gridSize * gridSize;

  const createArray = () => {
    const arraySquares = [];
    for (let i = 1; i <= gridSize; i++) {
      for (let j = 1; j <= gridSize; j++) {
        arraySquares.push({
          id: Math.random().toString(),
          x: i,
          y: j,
          gridSize: gridSize,
          gameId: props.currentGameName,
          fill: "",
          winningCell: "white"
        });
      }
    }
    return arraySquares;
  };

  const array = createArray();
  const [remeiningMoves, setRemeiningMoves] = React.useState(totalMoves);
  const [currentTurn, setCurrentTurn] = React.useState("X");
  const [winner, setWinner] = React.useState("");
  const [newArray, setNewArray] = React.useState(array);

  const onPressSquare = (columnIndex: number, rowIndex: number) => {
    const objIndex = newArray.findIndex(
      (obj) => obj.x == columnIndex && obj.y == rowIndex
    );

    const isSquereEmpty = newArray[objIndex].fill === "";
    if (!isSquereEmpty) {
      return;
    }
    if (currentTurn === "X") {
      newArray[objIndex].fill = "X";
    } else {
      newArray[objIndex].fill = "O";
    }
    setNewArray(newArray);
    setRemeiningMoves(remeiningMoves - 1);

    // if (remeiningMoves === 0 && winner === "") {
    //   Alert.alert("Game over! No winner");
    //   return;
    // }
    checkForWinningCombinations()
  
    currentTurn === "X" ? setCurrentTurn("O") : setCurrentTurn("X");
  };

  const checkForWinningCombinations = () => {
    checkDiagonals(newArray);
    checkVerticals(newArray);
    checkHorizontals(newArray);
  };

  const checkDiagonals = (newArray: Array[]) => {
    let latestMarked = "";
    let winningCells = []

    for (let i = 0; i < gridSize; i++) {
      const position1dArray = i + gridSize * i;
      const item = newArray[position1dArray];

      if (item.fill === "") {
        latestMarked = "";
        break;
      } else if (latestMarked === "") {
        winningCells.push(position1dArray)   
        latestMarked = item.fill;
        continue;
      } else if (latestMarked === item.fill) {
        winningCells.push(position1dArray)   
        continue;
      } else if (latestMarked !== item.fill) {
        latestMarked = "";
        break;
      }
    }

    if (latestMarked !== "" && winner === "") {
      setWinner(latestMarked);
      markWinningCells(winningCells);
      return
    }

    for (let i = 0; i < gridSize; i++) {
      const position1dArray = gridSize - i - 1 + gridSize * i;
      const item = newArray[position1dArray];
      if (item.fill === "") {
        latestMarked = "";
        break;
      } else if (latestMarked === "") {
        winningCells.push(position1dArray)        
        latestMarked = item.fill;
        continue;
      } else if (latestMarked === item.fill) {
        winningCells.push(position1dArray)   
        continue;
      } else if (latestMarked !== item.fill) {
        latestMarked = "";
        winningCells = []
        break;
      }
    }
    if (latestMarked !== "" && winner === "") {
      setWinner(latestMarked);
      markWinningCells(winningCells)
    }
  };

  const markWinningCells = (winningCells: number[]): void => {
    winningCells.forEach(itemIndex => {
      newArray[itemIndex].winningCell = "yellow";
    });
    setNewArray(newArray);  
  };

  const checkVerticals = (newArray: Array[]) => {
    let latestMarked = "";
    let winningCells = []

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const position1dArray = i + gridSize * j;
        const item = newArray[position1dArray];
        if (item.fill === "") {
          latestMarked = "";
          break;
        } else if (latestMarked === "") {
          winningCells.push(position1dArray)   
          latestMarked = item.fill;
          continue;
        } else if (latestMarked === item.fill) {
          winningCells.push(position1dArray)   
          continue;
        }  else if (latestMarked !== item.fill) {
          latestMarked = "";
          winningCells = []
          break;
        }
      }
      if (latestMarked !== "" && winner === "") {
        setWinner(latestMarked);
        markWinningCells(winningCells)
      }
    }
  };

  const checkHorizontals = (newArray: Array[]) => {
    let winningCells = []
    let latestMarked = "";
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const position1dArray = j + gridSize * i;
        const item = newArray[position1dArray];
        if (item.fill === "") {
          latestMarked = "";
          break;
        } else if (latestMarked === "") {
          winningCells.push(position1dArray)   
          latestMarked = item.fill;
          continue;
        } else if (latestMarked === item.fill) {
          winningCells.push(position1dArray)   
          continue;
        } else if (latestMarked !== item.fill) {
          latestMarked = "";
          winningCells = []
          break;
        }
      }
      if (latestMarked !== "" && winner === "") {
        setWinner(latestMarked);
        markWinningCells(winningCells)
      }
    }
  };

  const renderItem = (item: Array) => (
    <Square
      gridSize={gridSize}
      key={Math.random().toString()}
      gameId={item.gameId}
      x={item.x}
      y={item.y}
      onPressSquare={onPressSquare}
      fill={item.fill}
      winningCell={item.winningCell}
    ></Square>
  );

  const onGoToLeaderBoardPress = () => {
    props.setIsPlayPageVissible(false);
    props.setIsLeaderPageVissible(true);
  };

  return (
    <>
      <Text>{props.currentGameName}</Text>
      <Text>Left moves: {remeiningMoves}</Text>
      <Text>Turn: {currentTurn}</Text>
      <View style={styles.board}>
        <FlatList
          data={newArray}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderItem(item.item)}
          numColumns={gridSize}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Leader Board" onPress={() => onGoToLeaderBoardPress()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    borderWidth: 1,
    marginBottom: 15,
  },
  btnContainer: {
    marginTop: 15,
  },
});
