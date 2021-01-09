import { useEffect, useState } from 'react'
import StepsHeader from '../../components/StepsHeader/StepsHeader'
import ProductList from '../../components/ProductsList/ProductList'

import { Product } from './types'
import { fetchProducts } from '../../api'

import './styles.css'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='orders-container'>
      <StepsHeader />
      <ProductList products={products} />
    </div>
  )
}

export default Orders
