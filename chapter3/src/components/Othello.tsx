import { useState } from 'react';
import styled from 'styled-components';
import { Cell } from './Cell';
import { CellStatus } from '../types';
import { reverce } from '../utils/othelloUtil';

const getInitialRows = (): Array<Array<CellStatus>> => {
  // １次元配列を生成
  const row: Array<CellStatus> = Array(8).fill(CellStatus.Empty);
  const rows: Array<Array<CellStatus>> = [];
  for (let index = 0; index < 8; index++) {
    // 生成した１次元配列のコピーを２次元配列に追加
    const newRow = [...row];
    rows.push(newRow);
  }
  // 黒を配置
  rows[3][4] = CellStatus.Black;
  rows[4][3] = CellStatus.Black;
  // 白を配置
  rows[3][3] = CellStatus.White;
  rows[4][4] = CellStatus.White;
  return rows;
};

export const Othello = () => {
  const [isBlackTurn, setIsBlackTurn] = useState(true);
  const [rows, setRows] = useState(getInitialRows());

  const onClickCell = () => {
    const result = reverce();
    if (result === null) return;
    setRows(result);
    setIsBlackTurn(!isBlackTurn);
  };

  return (
    <>
      <SContainer>
        <div>
          <div>{isBlackTurn ? '黒の番' : '白の番'}</div>
          {rows.map((row) => {
            return (
              <SRow>
                {row.map((status) => {
                  return <Cell status={status} onClick={onClickCell} />;
                })}
              </SRow>
            );
          })}
        </div>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SRow = styled.div`
  display: flex;
`;
