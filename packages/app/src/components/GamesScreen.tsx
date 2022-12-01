import React, { FC } from "react";
import { Button, FlatList, StyleSheet, Text } from "react-native";
import { NewGame } from "./CreateGameScreen";

interface IGamesScreen {
  setIsGamesPageVissible: (arg0: boolean) => void;
  setIsCreateGamesPageVissible: (arg0: boolean) => void;
	games: NewGame[]
}

export const GamesScreen: FC<IGamesScreen> = (props): JSX.Element => {

  const onCreateGamePress = () => {
    props.setIsGamesPageVissible(false);
    props.setIsCreateGamesPageVissible(true);
  };

  return (
    <>
      <Button
        title="Create new game"
        onPress={() => onCreateGamePress()}
      />
      <FlatList
        style={styles.gamesList}
        data={props.games}
        renderItem={({ item }) => (
					<>
					  <Text style={styles.date}>{item.creationDate}</Text>
						<Text style={styles.gameItem}>{item.name} * {item.opponentName} * {item.gridSize} * {item.winner}</Text>
					</>

        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  gamesList: {
    marginTop: 10
  },
  date: {
    backgroundColor: "lightgrey",
		marginTop: 8,
		textAlign: "center"
  },
  gameItem: {
		fontWeight: "bold",
		textAlign: "center",
    borderColor: "lightgrey",
    borderWidth: 3,
    paddingTop: 5,
    paddingLeft: 3,
    paddingRight: 3
	},
});
