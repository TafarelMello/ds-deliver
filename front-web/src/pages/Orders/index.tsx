import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import StepsHeader from '../../components/StepsHeader'
import ProductList from '../../components/ProductsList'
import OrderLocation from '../../components/OrderLocation'
import OrderSummary from '../../components/OrderSummary'
import Footer from '../../components/Footer'

import { OrderLocationData, Product } from '../../types'
import { fetchProducts, saveOrder } from '../../api'
import { checkIsSelected } from '../../helpers/helper'

import './styles.css'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLOcation] = useState<OrderLocationData>()

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => toast.warning('Erro ao listar Produtos.'))
  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product)

    if (isAlreadySelected) {
      const selected = selectedProducts.filter((item) => item.id !== product.id)
      setSelectedProducts(selected)
    } else {
      setSelectedProducts((previous) => [...previous, product])
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }))
    const payload = {
      ...orderLocation!,
      products: productsIds,
    }

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`)
        setSelectedProducts([])
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido')
      })
  }

  return (
    <>
      <div className='orders-container'>
        <StepsHeader />
        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLOcation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  )
}

export default Orders
