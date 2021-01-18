<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Alert, StyleSheet, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
=======
import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
>>>>>>> 78cf355a6a9584cd062dba485343691aa095e414
import { getOrders } from '../api'

import Header from '../Header'
import OrderCard from '../OrderCard'
import { Order } from '../types'

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const fetchData = () => {
    setIsLoading(true)
    getOrders()
      .then((response) => setOrders(response.data))
      .catch(() =>
        Alert.alert('Houve um erro ao buscar os pedidos, tente novamente.'),
      )
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (isFocused) {
      fetchData()
    }
  }, [isFocused])

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrdersDetails', {
      order,
    })
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
          orders.map((order) => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnPress(order)}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
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
