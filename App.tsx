import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: "black",
  },
  text: {
    color:"white",
    fontWeight: "bold",
    fontSize: 20,
  }
});

export default App;
