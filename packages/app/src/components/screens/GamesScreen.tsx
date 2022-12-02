import React, { FC } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { NewGame } from "./CreateGameScreenTypes";

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
    <View 
    style={styles.gameContainer}>
      <Button
        title="Create new game"
        onPress={() => onCreateGamePress()}
      />
      <FlatList
        style={styles.gamesList}
        data={props.games}
        renderItem={({ item }) => (
					<View style={styles.gameItemsContainer}>
					  <Text style={styles.date}>  {item.creationDate} - {item.name} ({item.gridSize})</Text>
						<Text style={styles.gameItem}> vs {item.opponentName} won: {item.winner}</Text>
					</View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gamesList: {
    marginTop: 12
  },
  gameContainer: {
    marginTop: 18,
  },
  gameItemsContainer: {
    borderWidth: 1,
    marginTop: 12,
    padding: 3,
    backgroundColor: "white",

  },
  date: {
    textAlign: "center",
    color: "black",
  },
  gameItem: {
		textAlign: "center",
    color: "black",
    paddingLeft: 3,
    paddingRight: 3
	},
});
