import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const eventData = [
  {
    id: 0,
    name: 'Dummy Event 1',
    date: new Date(2021, 8, 25),
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 1,
    name: 'Dummy Event 2',
    date: new Date(2021, 7, 25),
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Dummy Event 3',
    date: new Date(2023, 5, 10),
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Dummy Event 4',
    date: new Date(2022, 2, 22),
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Dummy Event 5',
    date: new Date(2021, 9, 12),
    image: 'https://via.placeholder.com/150'
  },
]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function ThirdScreen({ navigation }) {
  const dispatch = useDispatch()

  function eventItem({ item }) {
    return(
      <TouchableOpacity
        onPress={() => {
          dispatch({ type: 'ADD_EVENT_DATA', payload: { event: item.name } })
          navigation.goBack()
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 30,
          paddingBottom: 30,
          borderBottomWidth: 2,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <Image
          style={{ height: 150, width: 150 }}
          source={{ uri: item.image }}
        />
        <View>
          <Text style={{ fontSize: 25 }}>
            {item.name}
          </Text>
          <Text>
            {`${months[item.date.getMonth()]} ${item.date.getDate()}, ${item.date.getFullYear()}`}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  return(
    <View>
      <FlatList
        data={eventData}
        renderItem={eventItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
