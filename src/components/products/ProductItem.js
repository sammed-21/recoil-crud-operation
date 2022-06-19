import React from 'react'
import { useRecoilState } from 'recoil'
import {productState} from '../../recoil/productRecoil'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  const {product}=props;
  const [ products,setProducts]=useRecoilState(productState)
  const deleteProduct =(id) => {
    const new_product = products.filter(product =>product.id != id)
    setProducts(new_product)
  }
  return (
    <div className="column is-4">
    <div className="box box__custom">
    <Link
          to={`/editProduct/${product.id}`}
          className="button button-edit is-warning"
        >
          edit
        </Link>
       <button onClick={()=>deleteProduct(product.id)} className="button button-delete is-danger">delete</button>
        <h1 className="title is-1">{product.picture}</h1>
        <h1 className="subtitle is-5">{product.name} </h1>
        <h1 className="tag">{product.price}/kg </h1>
    </div>
    </div>
  )
}

export default ProductItem