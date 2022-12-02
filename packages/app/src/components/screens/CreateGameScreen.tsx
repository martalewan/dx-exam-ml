import React, { FC }  from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { ICreateGameScreen, NewGame } from "./CreateGameScreenTypes";
import { TextInputElement } from "../TextInputElement";
import { Header } from "../Header";
import { validateNumOfGrid } from "../services/gameHelpers";

type SentGameData = Pick<NewGame, "name" | "opponentName" | "gridSize">;

export const CreateGameScreen: FC<ICreateGameScreen> = (props): JSX.Element => {
  const onStartGamePress = (newGame: SentGameData) => {
    props.setIsPlayPageVissible(true);
    props.setIsCreateGamesPageVissible(false);

    if (!newGame) {
      return;
    }

    props.setGames([
      ...props.games,
      {
        name: newGame.name,
        id: Math.random().toString(),
        creationDate: new Date().toDateString(),
        opponentName: newGame.opponentName,
        gridSize: newGame.gridSize,
        winner: "",
      },
    ]);
  };

  return (
    <>
      <Header text={"Create Game"}></Header>
      <TextInputElement
        fileldPlaceholder={"Game Name"}
        fieldValue={props.currentGameName}
        fieldSetter={(val) => props.setCurrentGameName(val)}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder={"Grid Size: 3-20"}
        value={props.currentGameSize}
        onChangeText={(val) => validateNumOfGrid(val, props)}
      />
      <TextInputElement
        fileldPlaceholder={"Opponent Email"}
        fieldValue={props.currentGameOpponent}
        fieldSetter={(val) => props.setCurrentGameOpponent(val)}
      />
      <Button
        title="Start"
        onPress={() =>
          onStartGamePress({
            name: props.currentGameName,
            opponentName: props.currentGameOpponent,
            gridSize: props.currentGameSize,
          })
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 150, 
      marginBottom: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "white"
    }
});
