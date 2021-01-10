import { useEffect, useState } from 'react'
import StepsHeader from '../../components/StepsHeader/index'
import ProductList from '../../components/ProductsList/index'

import { OrderLocationData, Product } from './types'
import { fetchProducts } from '../../api'

import './styles.css'
import OrderLocation from '../../components/OrderLocation/index'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orderLocation, setOrderLOcation] = useState<OrderLocationData>()

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='orders-container'>
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLOcation(location)}
      />
    </div>
  )
}

export default Orders
