import React, { useContext } from 'react'
import { useLocation, useParams ,Link} from 'react-router-dom'
// import ProductContext from '../UserContext/ProductContext'

function ProductDetails() {

    const location = useLocation()
    const {id} = useParams()

    // const {addToCart} = useContext(ProductContext);
    //console.log("addtocart",addToCart)
    const products = location.state?.product


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <img
            src={products.images[0]}
            alt={products.name}
            className="w-full h-96 object-cover rounded-xl"
          />

          {/* Details */}
          <div>
            <p className="text-sm text-blue-600 font-semibold">{products.category}</p>
            <h1 className="text-3xl font-bold mt-2">{products.name}</h1>
            <p className="text-3xl font-bold text-green-600 mt-4">
              ${Number(products.price || 0).toFixed(2)}
            </p>
            <p className="mt-4 text-gray-600">
              {products.inStock ? '✅ In Stock' : '❌ Out of Stock'}
            </p>
            
            {products.description && (
              <p className="mt-4 text-gray-700">{products.description}</p>
            )}

            <button  className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
             <Link to='/addtocart'>Add to Cart</Link> 
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ProductDetails
