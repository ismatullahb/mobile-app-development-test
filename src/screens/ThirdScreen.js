import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const eventData = [
  {
    id: 0,
    name: 'Dummy Event 1',
    date: new Date(2021, 8, 25),
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 1,
    name: 'Dummy Event 2',
    date: new Date(2021, 7, 25),
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 2,
    name: 'Dummy Event 3',
    date: new Date(2023, 5, 10),
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 3,
    name: 'Dummy Event 4',
    date: new Date(2022, 2, 22),
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 4,
    name: 'Dummy Event 5',
    date: new Date(2021, 9, 12),
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
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
          backgroundColor: 'white',
          borderRadius: 10
        }}
      >
        <Image
          style={{ height: 150, width: 150, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}
          source={{ uri: item.image }}
        />
        <View style={{ height: 150, flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {item.name}
          </Text>
          <Text numberOfLines={2} style={{ fontSize: 15 }}>
            {item.description}
          </Text>
          <Text style={{ position: 'absolute', bottom: 10, right: 10, color: 'rgba(220, 220, 220, 0.9)' }}>
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
