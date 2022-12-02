import React, { FC } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { checkForWinningCombinations } from "../services/gameHelpers";
import Square from "../Square";
import { IPlayScreenProps, Array } from "./PlayScreenTypes";

export const PlayScreen: FC<IPlayScreenProps> = (props): JSX.Element => {
  const gridSize = Number(props.currentGameSize);
  const totalMoves = gridSize * gridSize;

  const createGameArray = () => {
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

  const gameArray = createGameArray();
  const [remeiningMoves, setRemeiningMoves] = React.useState(totalMoves);
  const [currentTurn, setCurrentTurn] = React.useState("X");
  const [winner, setWinner] = React.useState("");
  const [newArray, setNewArray] = React.useState(gameArray);

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

    if (remeiningMoves === 0 && winner === "") {
      Alert.alert("Game over! No winner");
      return;
    }

    checkForWinningCombinations(newArray, gridSize, winner, setWinner, setNewArray)
  
    currentTurn === "X" ? setCurrentTurn("O") : setCurrentTurn("X");
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
