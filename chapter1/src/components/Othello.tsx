import { Cell } from './Cell';
import { CellStatus } from '../types';

export const Othello = () => {
  return (
    <>
      <Cell status={CellStatus.White} />
    </>
  );
};
