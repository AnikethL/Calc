import React, {useState} from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {CalcButtonNum} from './CalcButtonNum';
import {CalcButtonOp} from './CalcButtonOp';
import {ClearButton} from './ClearButton';

export function ButtonContainer(){
  const [nums, setNums] = useState(""); 
  const [ans,setAns] = useState("");

  const Evaluater = (equation) =>{
    try{
      return (
        eval(equation)
      );
    }
    catch(e){
      return ("Input Error")
    }
    
  }

  return (
    <View style={{backgroundColor:"black"}}>
      <ScrollView horizontal>
        <Text style={{backgroundColor: "black", padding: 10, marginTop: 175, fontSize:60, fontWeight:'bold', color:'grey'}}> {`${nums} ${ans}`}</Text>
      </ScrollView>
      <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
        <CalcButtonNum num="1" onPress={()=>(setNums(nums+"1"), setAns(""))}/>        
        <CalcButtonNum num="2" onPress={()=>(setNums(nums+"2"), setAns(""))}/>
        <CalcButtonOp num="/" onPress={()=>(setNums(nums+"/"), setAns(""))}/>
        <CalcButtonNum num="3" onPress={()=>(setNums(nums+"3"), setAns(""))}/>
        <CalcButtonNum num="4" onPress={()=>(setNums(nums+"4"), setAns(""))}/>
        <CalcButtonOp num="*" onPress={()=>(setNums(nums+"*"), setAns(""))}/>
        <CalcButtonNum num="5" onPress={()=>(setNums(nums+"5"), setAns(""))}/>
        <CalcButtonNum num="6" onPress={()=>(setNums(nums+"6"), setAns(""))}/>
        <CalcButtonOp num="+" onPress={()=>(setNums(nums+"+"), setAns(""))}/>
        <CalcButtonNum num="7" onPress={()=>(setNums(nums+"7"), setAns(""))}/>
        <CalcButtonNum num="8" onPress={()=>(setNums(nums+"8"), setAns(""))}/>
        <CalcButtonOp num="-" onPress={()=>(setNums(nums+"-"), setAns(""))}/>
        <CalcButtonNum num="9" onPress={()=>(setNums(nums+"9"), setAns(""))}/>
        <CalcButtonNum num="0" onPress={()=>(setNums(nums+"0"), setAns(""))}/>
        <CalcButtonOp num="=" onPress={()=>(setAns(Evaluater(nums)), setNums(""))}/>
      </View>
      <ClearButton onPress={()=>(setNums(''), setAns(""))}/>
      <Text style={{backgroundColor: "black", padding: 10, marginTop: 200, fontSize:40, fontWeight:'bold'}}> </Text>
    </View>
  )
  

}