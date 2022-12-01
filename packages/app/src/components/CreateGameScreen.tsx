import React, { FC }  from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import { TextInputElement } from "./TextInputElement";

export type NewGame = {
  name: string;
  id: string;
  creationDate: string;
  opponentName: string;
  gridSize: string;
  winner: string;
};

interface ICreateGameScreen {
  setIsPlayPageVissible: (arg0: boolean) => void;
  setIsCreateGamesPageVissible: (arg0: boolean) => void;
  games: NewGame[];
  setGames: (arg0: NewGame[]) => void;
  currentGameName: string;
  currentGameSize: string;
  currentGameOpponent: string;
  setCurrentGameName: (arg0: string) => void;
  setCurrentGameSize: (arg0: string) => void;
  setCurrentGameOpponent: (arg0: string) => void;
}

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
  const validateNumOfGrid = (size: string): void => {
    const gridSize = Number(size); 
    if(gridSize > 20){
        Alert.alert("To big grid size. Maximum size is 20")
        props.setCurrentGameSize("")
    } else if (gridSize < 3){
        Alert.alert("To small grid size. Minimum size is 3")
        props.setCurrentGameSize("")
    } else {
        props.setCurrentGameSize(size)
    }
  }

  return (
    <>
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
        onChangeText={(val) => validateNumOfGrid(val)}
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
  header: {
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 12,
  },
  date: {
    backgroundColor: "lightgrey",
    marginTop: 8,
    textAlign: "center",
  },
  gameItem: {
    fontWeight: "bold",
    textAlign: "center",
  },
    input: {
      height: 40,
      width: 150, 
      marginBottom: 12,
      borderWidth: 1,
      padding: 10,
    }
});
