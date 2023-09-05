import {useContext, useState} from 'react';
import {TournamentContext} from '../context/tournament';

const useMatches = (playerId: string) => {
  const [isLoading, setLoading] = useState(false);
  const {matchesData} = useContext(TournamentContext);
  const [playerMatchdata, setData] = useState<Record<string, any>[]>([]);

  const getMatchData = () => {
    setLoading(true);
    const matchData = matchesData.filter(
      match => match.player1.id === playerId || match.player2.id === playerId,
    );
    setData(matchData);
    setLoading(false);
  };

  return {
    getMatchData,
    playerMatchdata,
    isLoading,
  };
};

export default useMatches;
