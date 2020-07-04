import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Pay() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pagamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  }
});
