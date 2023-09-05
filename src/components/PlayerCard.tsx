import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {PlayerDataProps} from '../utils/types';
import useNavigation from '../hooks/useNavigation';

type PlayerCardProps = {
  data: PlayerDataProps;
};

const PlayerCard = ({data}: PlayerCardProps) => {
  const {name = '', icon = '', score = 0, id = 0} = data;
  const {navigationRef} = useNavigation();

  const handlePlayerClick = () => {
    navigationRef.navigate('Matches', {playerId: id});
  };

  return (
    <Pressable onPress={handlePlayerClick} style={styles.playerStyles}>
      <View style={styles.playerDetails}>
        <Image source={{uri: icon, height: 60, width: 60}} />
        <Text style={styles.playerName}>{name}</Text>
      </View>
      <Text style={styles.score}>{score}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playerStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  playerDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  playerName: {
    fontWeight: '600',
    fontSize: 18,
    color: 'grey',
  },
  score: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginRight: 12,
  },
});

export default PlayerCard;
