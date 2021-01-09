import { Product } from '../../pages/Orders/types'
import ProductCard from '../ProductCard/ProductCard'

import './styles.css'

type Props = {
  products: Product[]
}

function ProductList({ products }: Props) {
  return (
    <div className='orders-list-container'>
      <div className='orders-list-items'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
