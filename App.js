import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [nen, setNen] = useState('#6ea6e2');

  return(
    <View style={[styles.container, {backgroundColor: nen}]}>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#6ea6e2'}]}
        onPress={() => setNen('#6ea6e2')}
        >
          <Text style={styles.buttonText}>Blue</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#be3d3b'}]}
        onPress={() => setNen('#be3d3b')}
        >
          <Text style={styles.buttonText}>Red</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'black'}]}
        onPress={() => setNen('black')}
        >
          <Text style={styles.buttonText}>Black</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#e783b8'}]}
        onPress={() => setNen('#e783b8')}
        >
          <Text style={styles.buttonText}>Pink</Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#479d47'}]}
        onPress={() => setNen('#479d47')}
        >
          <Text style={styles.buttonText}>Green</Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#f2f55e'}]}
        onPress={() => setNen('#f2f55e')}
        >
          <Text style={styles.buttonText}>Yellow</Text>
        </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    height: 60,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
