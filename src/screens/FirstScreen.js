import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import palindromeChecker from '../helpers/palindromeChecker'

export default function FirstScreen({ navigation }) {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.primaryReducer.name)
  const [nameState, setNameState] = useState(name)
  const [palindromeStr, setPalindromeStr] = useState('')

  return(
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/mdpi/bg_bright.png')} style={{ width: '100%', height: 250, position: 'absolute', top: 0 }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 50,
            marginHorizontal: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderBottomWidth: 5,
            borderColor: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          <Image style={{ height: 90, width: 90, alignSelf: 'center', marginBottom: 30 }} source={require('../assets/mdpi/img_avatar.png')} />
          <TextInput
            style={{ height: 60, marginHorizontal: 20, marginVertical: 10, textAlign: 'center', fontSize: 17, color: 'black', borderRadius: 30, backgroundColor: 'rgba(220, 220, 220, 0.5)' }}
            placeholder='Type name here..'
            placeholderTextColor='rgba(0, 0, 0, 0.5)'
            value={nameState}
            onChangeText={setNameState}
          />
          <TextInput
            style={{ height: 60, marginHorizontal: 20, marginVertical: 10, textAlign: 'center', fontSize: 17, color: 'black', borderRadius: 30, backgroundColor: 'rgba(220, 220, 220, 0.5)' }}
            placeholder='Type text palindrome'
            placeholderTextColor='rgba(0, 0, 0, 0.5)'
            value={palindromeStr}
            onChangeText={setPalindromeStr}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 50 }}>
            <TouchableOpacity
              onPress={() => {
                dispatch({ type: 'ADD_NAME_DATA', payload: { name: nameState } })
                navigation.navigate('SecondScreen')
              }}
              style={{ height: 50, width: 200, borderWidth: 1, justifyContent: 'center', backgroundColor: 'orange', borderRadius: 50, borderColor: 'rgba(0, 0, 0, 0.2)' }}
            >
              <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                Next
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  '',
                  palindromeChecker(palindromeStr) ? 'isPalindrome' : 'not palindrome',
                )
              }}
              style={{ height: 50, width: 100, borderWidth: 1, justifyContent: 'center', backgroundColor: 'orange', borderRadius: 50, borderColor: 'rgba(0, 0, 0, 0.2)' }}
            >
              <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                Check
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignSelf: 'flex-end'
          }}
        >
          <Text style={{ textAlign: 'center' }}>
            Copyright © 2020 Suitmedia All Rights Reserved 
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
