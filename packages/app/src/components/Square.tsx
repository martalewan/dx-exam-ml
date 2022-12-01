import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ISquereProps {
    gameId: string;
    x: number;
    y: number;
    onPressSquare: (arg0: number, arg1: number) => void;
    gridSize: number;
    fill: string
    winningCell: string
}

const Squere: FC<ISquereProps> = (props): JSX.Element => {
  return (
    <>
      <Pressable
        style={{...styles.button, backgroundColor: props.winningCell}}
        onPress={() => props.onPressSquare(props.x, props.y)}
      >
        <View style={{...styles.square,  height: 300 / props.gridSize}}>
          <Text style={styles.text}>{props.fill}</Text>
        </View>
      </Pressable>
    </>
  );
}

export default Squere

const styles = StyleSheet.create({
    square: {
        borderWidth: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flexGrow: 1,

    },
    buttonWinning: {
      flexGrow: 1,
      backgroundColor: "yellow"
    },
    text: {
      fontWeight: "900",
      fontSize: 20,
      position: "absolute"
    }
});
