import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function FirstScreen({ navigation }) {
  const name = useSelector((state) => state.primaryReducer.name)
  const event = useSelector((state) => state.primaryReducer.event)
  const guest = useSelector((state) => state.primaryReducer.guest)

  return(
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 30 }}>
        <Text style={{ fontSize: 20 }}>Name :</Text>
        <Text style={{ fontSize: 20 }}>{name}</Text>
      </View>

      {/* Event Button */}
      <TouchableOpacity
      onPress={() => navigation.navigate('ThirdScreen')}
        style={{ height: 55, borderEndWidth: 3, borderWidth: 1, borderBottomWidth: 3, borderColor: 'rgba(0, 0, 0, 0.2)', marginVertical: 10, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 25 }}>
          {event ? event : 'Choose Event'}
        </Text>
      </TouchableOpacity>

      {/* Guest Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ForthScreen')}
        style={{ height: 55, borderEndWidth: 3, borderWidth: 1, borderBottomWidth: 3, borderColor: 'rgba(0, 0, 0, 0.2)', marginVertical: 10, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 25 }}>
          {guest ? guest : 'Choose Guest'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
