import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CenteredTextWithBoxes = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centeredText}>Alif Bagas Saputra</Text>

      {/* Dua kotak dengan tata letak horizontal */}
      <View style={styles.row}>
        <View style={[styles.box, {backgroundColor: 'lightcoral'}]} />
        <View style={[styles.box, {backgroundColor: 'lightseagreen'}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default CenteredTextWithBoxes;
