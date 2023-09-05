/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import PageHeader from '../components/PageHeader';
import useMatches from '../hooks/useMatches';
import {FlatList} from 'react-native-gesture-handler';
import MatchCard from '../components/MatchCard';

const MatchScreen = ({route}) => {
  const {playerId} = route.params;
  const {getMatchData, isLoading, playerMatchdata} = useMatches(playerId);

  useEffect(() => {
    getMatchData();
  }, []);

  return (
    <View style={styles.matches}>
      <PageHeader title="Matches" />
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#5670fb" />
        </View>
      ) : (
        <FlatList
          data={playerMatchdata}
          renderItem={({item}) => (
            <MatchCard key={item.match} data={item} playerId={playerId} />
          )}
          keyExtractor={item => {
            return item.match;
          }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  matches: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MatchScreen;
