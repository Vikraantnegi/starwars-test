/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import PointsTableScreen from './src/screens/PointsTableScreen';
import {createStackNavigator} from '@react-navigation/stack';
import MatchScreen from './src/screens/MatchScreen';
import useNavigation from './src/hooks/useNavigation';
import {TournamentProvider} from './src/context/tournament';

const RootStack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  PointsTable: undefined;
  Matches: {
    playerId: string;
  };
};

const App = () => {
  const {navigationRef} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TournamentProvider>
        <NavigationContainer ref={navigationRef}>
          <RootStack.Navigator initialRouteName="PointsTable">
            <RootStack.Screen
              name="PointsTable"
              component={PointsTableScreen}
              options={{
                headerTitle: 'Star Wars Blaster Tournament',
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name="Matches"
              component={MatchScreen}
              options={{headerTitle: 'Matches'}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </TournamentProvider>
    </SafeAreaView>
  );
};

export default App;
