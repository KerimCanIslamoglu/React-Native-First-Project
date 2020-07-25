import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Button color='black'
        title="Press me"
        onPress={() => Alert.alert('Hello World')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
