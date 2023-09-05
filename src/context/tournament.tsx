import React, {ReactNode, createContext, useState} from 'react';
import {PlayerDataProps} from '../utils/types';

type TournamentContextProps = {
  playersData: Record<string, PlayerDataProps>;
  matchesData: Record<string, any>[];
  setPlayersData: (data: PlayerDataProps[]) => void;
  setMatchesData: (data: Record<string, any>[]) => void;
};

type TournamentProviderProps = {
  children: ReactNode;
};

export const TournamentContext = createContext<TournamentContextProps>({
  playersData: {},
  matchesData: [],
  setPlayersData: () => null,
  setMatchesData: () => null,
});

export const TournamentProvider = ({children}: TournamentProviderProps) => {
  const [playersData, setPlayersData] = useState({});
  const [matchesData, setMatchesData] = useState([]);
  return (
    <TournamentContext.Provider
      value={{playersData, setPlayersData, matchesData, setMatchesData}}>
      {children}
    </TournamentContext.Provider>
  );
};
