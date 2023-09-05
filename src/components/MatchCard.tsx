import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {TournamentContext} from '../context/tournament';

const MatchCard = ({data, playerId}) => {
  const {playersData} = useContext(TournamentContext);
  const {player1, player2} = data;

  let backgroundColor;

  if (player1.score > player2.score) {
    if (player1.id === playerId) {
      backgroundColor = 'green';
    } else {
      backgroundColor = 'red';
    }
  } else if (player1.score < player2.score) {
    if (player2.id === playerId) {
      backgroundColor = 'green';
    } else {
      backgroundColor = 'red';
    }
  } else if (player1.score === player2.score) {
    backgroundColor = 'white';
  }

  return (
    <View style={[styles.matchCard, {backgroundColor}]}>
      <Text style={styles.playerName1}>{playersData[player1.id].name}</Text>
      <Text style={[styles.playerName1, styles.score]}>
        {player1.score} - {player2.score}
      </Text>
      <Text style={[styles.playerName1, styles.playerName2]}>
        {playersData[player2.id].name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  matchCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  playerName1: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
    width: '33%',
  },
  score: {
    textAlign: 'center',
  },
  playerName2: {
    textAlign: 'right',
  },
});

export default MatchCard;
