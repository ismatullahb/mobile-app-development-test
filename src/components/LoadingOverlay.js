import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function LoadingOverlay(props) {
  return(
    <>
      {
        props.active &&
        <View style={{ bottom: 0, left: 0, right: 0, top: 0, justifyContent: 'center', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <ActivityIndicator size='large' color="black" />
        </View>
      }
    </>
  )
}
