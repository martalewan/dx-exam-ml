import { Alert } from "react-native";
import { ICreateGameScreen } from "../screens/CreateGameScreenTypes";
import { Array } from "../screens/PlayScreenTypes"

export const validateNumOfGrid = (size: string, props: ICreateGameScreen ): void => {
  const gridSize = Number(size);
  if (!gridSize) {
    props.setCurrentGameSize("")
  }
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


export const checkForWinningCombinations = (newArray: Array[], gridSize: number, winner: string, setWinner: any, setNewArray: any ) => {
  checkDiagonals(newArray, gridSize, winner, setWinner, setNewArray);
  checkVerticals(newArray, gridSize, winner, setWinner, setNewArray);
  checkHorizontals(newArray, gridSize, winner, setWinner, setNewArray);
};

export const checkDiagonals = (newArray: Array[], gridSize: number, winner: string, setWinner: any, setNewArray: any) => {
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
    markWinningCells(winningCells, newArray, setNewArray)
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
    markWinningCells(winningCells, newArray, setNewArray)
  }
};

export const markWinningCells = (winningCells: number[], newArray: Array[], setNewArray: any): void => {
  winningCells.forEach(itemIndex => {
    newArray[itemIndex].winningCell = "yellow";
  });
  setNewArray(newArray);  
};

const checkVerticals = (newArray: Array[], gridSize: number, winner: string, setWinner: any, setNewArray: any) => {
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
      markWinningCells(winningCells, newArray, setNewArray)
    }
  }
};

export const checkHorizontals = (newArray: Array[], gridSize: number, winner: string, setWinner: any, setNewArray: any) => {
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
      markWinningCells(winningCells, newArray, setNewArray)
    }
  }
};