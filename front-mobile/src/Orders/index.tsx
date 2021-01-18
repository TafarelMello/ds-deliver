import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getOrders } from '../api'

import Header from '../Header'
import OrderCard from '../OrderCard'

export default function Orders() {
  useEffect(() => {
    getOrders()
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
})
