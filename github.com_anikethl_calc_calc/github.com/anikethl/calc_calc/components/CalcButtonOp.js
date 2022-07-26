import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function CalcButtonOp(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.buttons}>
          {props.num}
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
    backgroundColor:"orange",
    width: 130,
    height: 90,
    fontWeight: 'bold',
    fontSize: 50,
    textAlign:'center',
    color: "black",
    borderColor: "black",
    borderWidth: 1
  }
});
