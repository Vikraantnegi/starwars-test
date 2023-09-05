import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PageHeader = ({title = ''}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'gray',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PageHeader;
