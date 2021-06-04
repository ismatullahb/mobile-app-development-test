import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function FirstScreen({ navigation }) {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.primaryReducer.name)
  const [nameState, setNameState] = useState(name)

  return(
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image style={{ height: 90, width: 200, alignSelf: 'center', marginBottom: 30 }} source={{ uri: 'https://via.placeholder.com/200x90' }} />
      <TextInput
        style={{ height: 60, borderWidth: 1, margin: 30, textAlign: 'center', fontSize: 30, color: 'black' }}
        placeholder='Type name here'
        placeholderTextColor='rgba(0, 0, 0, 0.5)'
        value={nameState}
        onChangeText={setNameState}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch({ type: 'ADD_NAME_DATA', payload: { name: nameState } })
          navigation.navigate('SecondScreen')
        }}
        style={{ height: 50, borderEndWidth: 3, borderWidth: 1, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}
