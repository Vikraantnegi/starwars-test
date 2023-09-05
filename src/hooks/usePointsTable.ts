import {useContext, useState} from 'react';
import axiosInstance from '../utils/axios';
import {PlayerDataProps} from '../utils/types';
import {TournamentContext} from '../context/tournament';

const usePointsTable = () => {
  const [isLoading, setLoading] = useState(false);
  const [playerMapData, setPlayerMapData] = useState<PlayerDataProps[]>();
  const {setPlayersData, setMatchesData} = useContext(TournamentContext);

  const fetchUserData = async () => {
    try {
      const {data} = await axiosInstance.get(
        'https://www.jsonkeeper.com/b/IKQQ',
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMatchDetails = async () => {
    try {
      const {data} = await axiosInstance.get(
        'https://www.jsonkeeper.com/b/JNYL',
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // id, name, icon, score, matchesPlayed

  const fetchPointsData = async () => {
    setLoading(true);
    const playerData = await fetchUserData();
    const matchData = await fetchMatchDetails();
    setMatchesData(matchData);

    let playerMap: Record<string, PlayerDataProps> = {};

    for (const player of playerData) {
      const {id = 0} = player;
      playerMap[id] = {...player, score: 0, totalScore: 0};
    }

    for (const matchDetails of matchData) {
      const {player1, player2} = matchDetails;
      playerMap[player1.id].totalScore += player1.score;
      playerMap[player2.id].totalScore += player2.score;
      if (player1.score > player2.score) {
        playerMap[player1.id].score += 3;
      } else if (player1.score < player2.score) {
        playerMap[player2.id].score += 3;
      } else {
        playerMap[player1.id].score += 1;
        playerMap[player2.id].score += 1;
      }
    }

    setPlayersData(playerMap);

    const sortedPlayerData: PlayerDataProps[] = Object.values(playerMap)?.sort(
      (a, b) => {
        const scoreDiff = b.score - a.score;
        if (scoreDiff === 0) {
          return b.totalScore - a.totalScore;
        } else {
          return b.score - a.score;
        }
      },
    );

    setPlayerMapData(sortedPlayerData);
    setLoading(false);
  };

  return {
    fetchPointsData,
    playerMapData,
    isLoading,
  };
};

export default usePointsTable;
