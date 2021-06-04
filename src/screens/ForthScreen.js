import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import LoadingOverlay from '../components/LoadingOverlay'

export default function ForthScreen({ navigation }) {
  const dispatch = useDispatch()
  const [guestData, setGuestData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(({ data }) => setGuestData(data))
      .finally(() => setIsLoading(false))
  }, [])
  
  return(
    <>
      <LoadingOverlay active={isLoading} />
      {
        guestData &&
        <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
          {
            guestData.map((item) => {
              return(
                <TouchableOpacity
                  onPress={() => {
                    dispatch({ type: 'ADD_GUEST_DATA', payload: { guest: `${item.first_name} ${item.last_name}` } })
                    navigation.goBack()
                  }}
                  key={item.id}
                  style={{ margin: 10 }}
                >
                  <Image source={{ uri: item.avatar }} style={{ height: 160, width: 160 }} />
                  <View style={{ position: 'absolute', backgroundColor: 'rgba(238, 238, 238, 0.8)', bottom: 0, width: 160, height: 50, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>{`${item.first_name} ${item.last_name}`}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      }
    </>
  )
}
