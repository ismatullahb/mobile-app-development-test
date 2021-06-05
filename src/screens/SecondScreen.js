import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

export default function FirstScreen({ navigation }) {
  const name = useSelector((state) => state.primaryReducer.name)
  const event = useSelector((state) => state.primaryReducer.event)
  const guest = useSelector((state) => state.primaryReducer.guest)

  return(
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ImageBackground source={require('../assets/mdpi/bg_bright.png')} style={{ width: '100%', height: 250, position: 'absolute', top: 0 }} />
      <ImageBackground source={require('../assets/mdpi/img_bg_bottom.png')} style={{ width: '100%', height: 49, position: 'absolute', bottom: 0 }} />
      <ImageBackground source={require('../assets/mdpi/img_suitmedia.png')} style={{ width: 244, height: 160, position: 'absolute', bottom: 120, alignSelf: 'center' }} />
      <View style={{ margin: 30, height: 150, justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, color: 'grey' }}>Hallo,</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'orange' }}>{name}</Text>
      </View>

      {/* Event Button */}
      <TouchableOpacity
      onPress={() => navigation.navigate('ThirdScreen')}
        style={{ height: 55, borderEndWidth: 3, borderRadius: 50, backgroundColor: 'orange', borderWidth: 1, borderBottomWidth: 3, borderColor: 'rgba(0, 0, 0, 0.2)', marginVertical: 5, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 15, color: 'white' }}>
          {event ? event : 'Choose Event'}
        </Text>
      </TouchableOpacity>

      {/* Guest Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ForthScreen', { page: 1 })}
        style={{ height: 55, borderEndWidth: 3, borderRadius: 50, backgroundColor: 'orange', borderWidth: 1, borderBottomWidth: 3, borderColor: 'rgba(0, 0, 0, 0.2)', marginVertical: 5, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 15, color: 'white' }}>
          {guest ? guest : 'Choose Guest'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
