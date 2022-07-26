//
// Unused File
//

/*
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Evaluater(equation){
  let returnVar = eval(equation);
  return (
    {returnVar}
  );
}

\import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Evaluater(props) {
  let returnVar = eval(props.equation);
  for(let i; i<props.equation.length;i++){
    if(props.equation[i]==="+" || props.equation[i]==="*" || props.equation[i]==="/" || props.equation[i]==="-"){
      if(props.equation[i]===props.equation[i-1]){
        returnVar="Input Error"
      }
    }
  }
  return (
        <Text style={{fontWeight:'bold', color:'grey'}}>
          {returnVar}
        </Text>
  );
}
*/