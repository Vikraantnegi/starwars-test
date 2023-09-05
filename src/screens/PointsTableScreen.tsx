/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Button,
  Pressable,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import usePointsTable from '../hooks/usePointsTable';
import PlayerCard from '../components/PlayerCard';
import {PlayerDataProps} from '../utils/types';
import PageHeader from '../components/PageHeader';

const PointsTable = () => {
  const {fetchPointsData, isLoading, playerMapData} = usePointsTable();
  useEffect(() => {
    fetchPointsData();
  }, []);

  return (
    <View style={styles.table}>
      <PageHeader title="Points Table" />
      <View>
        <Pressable onPress={() => fetchPointsData(1)}>
          <Text>Ascending Order</Text>
        </Pressable>
        <Pressable onPress={() => fetchPointsData()}>
          <Text>Descending Order</Text>
        </Pressable>
      </View>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#5670fb" />
        </View>
      ) : (
        <FlatList
          data={playerMapData}
          renderItem={({item}) => <PlayerCard key={item.id} data={item} />}
          keyExtractor={(player: PlayerDataProps) => {
            return player.id;
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
          scrollEnabled={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PointsTable;
