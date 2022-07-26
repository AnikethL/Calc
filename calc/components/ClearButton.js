import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function ClearButton(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.buttons}>
          Clear
        </Text>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    //lex:1,
    justifyContent: 'flex-start',
    //marginTop: 20,
    backgroundColor:"grey",
    width: 390,
    height: 90,
    fontWeight: 'bold',
    fontSize: 50,
    textAlign:'center',
    color: "black",
    borderColor: "black",
    borderWidth: 1
  }
});
