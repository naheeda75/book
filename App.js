import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View, Image} from 'react-native';

const Stack=createNativeStackNavigator();
export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Product" component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen=({navigation})=>{
  return (
    <View>
      <Text> Welcome to online book store</Text>
      <Button title="list of books" onPress={()=>navigation.navigate('Product')}/>
    </View>
  );
};
const ProductScreen=({navigation})=>{
  return (
    <>
    <View style={{flexDirection:"row",backgroundColor:"pink"}}>
      <Text> Technologies</Text>
      <Image source={require('./pics/1.jpg')} style={{width:100,height:100}}/>
      <Image source={require('./pics/2.jpg')} style={{width:100,height:100}}/>
    </View>
    <View style={{flexDirection:"row",backgroundColor:"lightblue"}}>
      <Text> React</Text>
      <Image source={require('./pics/3.jpg')} style={{width:100,height:100}}/>
    </View>
    </>
  );
};
