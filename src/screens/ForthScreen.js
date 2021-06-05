import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import LoadingOverlay from '../components/LoadingOverlay'

function wait(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function isCloseToBottom({layoutMeasurement, contentOffset, contentSize}) {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default function ForthScreen({ navigation, route }) {
  const dispatch = useDispatch()
  const [guestData, setGuestData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(Infinity)
  const [reload, setReload] = useState(true)
  const currentPage = route.params.page

  const onRefresh = useCallback(() => {
    setIsLoading(true)
    setReload(prevState => !prevState)
    wait(2000).then(() => setIsLoading(false))
  }, [])
  
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://reqres.in/api/users?page=${currentPage}&per_page=10`)
      .then(resp => resp.json())
      .then((data) => {
        setTotalPages(data.total_pages)
        setGuestData(data.data)
      })
      .finally(() => setIsLoading(false))
  }, [reload])
  
  return(
    <>
      <LoadingOverlay active={isLoading} />
      {
        guestData &&
        <ScrollView
          overScrollMode={'always'}
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingBottom: 200 }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />
          }
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent) && currentPage < totalPages) {
              navigation.push('ForthScreen', { page: currentPage + 1  })
            }
          }}
        >
          {
            guestData.map((item) => {
              return(
                <TouchableOpacity
                  onPress={() => {
                    dispatch({ type: 'ADD_GUEST_DATA', payload: { guest: `${item.first_name} ${item.last_name}` } })
                    navigation.goBack()
                  }}
                  key={item.id}
                  style={{ margin: 10, width: 160 }}
                >
                  <Image source={{ uri: item.avatar }} style={{ height: 100, width: 100, borderRadius: 90, alignSelf: 'center' }} />
                  <Text style={{ textAlign: 'center', fontSize: 20 }}>{`${item.first_name} ${item.last_name}`}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      }
    </>
  )
}
