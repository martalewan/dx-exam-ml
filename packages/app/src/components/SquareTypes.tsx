export interface ISquereProps {
  gameId: string;
  x: number;
  y: number;
  onPressSquare: (arg0: number, arg1: number) => void;
  gridSize: number;
  fill: string
  winningCell: string
}