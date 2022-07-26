import React, {useState} from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {CalcButton} from './components/CalcButton';
import {ClearButton} from './components/ClearButton';

function App() {
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
        <CalcButton num="1" onPress={()=>(setNums(nums+"1"), setAns(""))}/>        
        <CalcButton num="2" onPress={()=>(setNums(nums+"2"), setAns(""))}/>
        <CalcButton num="/" onPress={()=>(setNums(nums+"/"), setAns(""))}/>
        <CalcButton num="3" onPress={()=>(setNums(nums+"3"), setAns(""))}/>
        <CalcButton num="4" onPress={()=>(setNums(nums+"4"), setAns(""))}/>
        <CalcButton num="*" onPress={()=>(setNums(nums+"*"), setAns(""))}/>
        <CalcButton num="5" onPress={()=>(setNums(nums+"5"), setAns(""))}/>
        <CalcButton num="6" onPress={()=>(setNums(nums+"6"), setAns(""))}/>
        <CalcButton num="+" onPress={()=>(setNums(nums+"+"), setAns(""))}/>
        <CalcButton num="7" onPress={()=>(setNums(nums+"7"), setAns(""))}/>
        <CalcButton num="8" onPress={()=>(setNums(nums+"8"), setAns(""))}/>
        <CalcButton num="-" onPress={()=>(setNums(nums+"-"), setAns(""))}/>
        <CalcButton num="9" onPress={()=>(setNums(nums+"9"), setAns(""))}/>
        <CalcButton num="0" onPress={()=>(setNums(nums+"0"), setAns(""))}/>
        <CalcButton num="=" onPress={()=>(setAns(Evaluater(nums)), setNums(""))}/>
      </View>
      <ClearButton onPress={()=>(setNums(''), setAns(""))}/>
      <Text style={{backgroundColor: "black", padding: 10, marginTop: 200, fontSize:40, fontWeight:'bold'}}> </Text>
    </View>
  )
  
}
export default App;