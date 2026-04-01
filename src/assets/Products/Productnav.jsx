import React from 'react'
//import productsData from "../data/db.json";
import {Link, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import Products from './Products';

function Productnav() {
//   return (
//     <div className='w-full text-white'>
//       <nav className='flex gap-3'>
//         <a className='hover:bg-yellow-400' href="#">All Products</a>
//         <a href="#">Furniture</a>
//         <a href="#">Clothes</a>
//         <a href="#">Grocery</a>
//         <a href="#">Electronic</a>
//         <a href="#">Sports</a>
//       </nav>
//     </div>
//   )
// }

const { category } = useParams(); // Get category from URL
console.log("cat",category)
  // Filter products based on category
  // const [categories, setCategories] = useState([]);
    const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/products?limit=${limit}&skip=${offset}`)
      .then(res => res.json())
      .then(data => {
        setProductsData(data);
        console.log("fetchdata",data)
        //setCategories([...new Set(data.map(p => p.category))]);
      });
  }, []);
  console.log("productdata",productsData)
  const filteredProducts = category
    ? productsData.products.filter(p => p.category === category)
    : productsData.products;
     console.log("filteredproduct",filteredProducts)
  return (
    <div className="container mx-auto px-4 py-8">
        <Products/>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {category ? `${category} Products` : 'All Products'} 
        <span className="text-lg font-normal text-gray-500 ml-2">
          ({filteredProducts.length} items)
        </span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-lg">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link  key={product.id}  to={`/product/${product.id}`}  state={{product}}>
            <div
             
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow" 
              
            >
              <img
                src="https://example.com/images/headphones-1.jpg"
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-blue-600 font-semibold mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-green-600">
  ${typeof product.price === 'number' ? product.price.toFixed(2) : Number(product.price)}
</p>
                <p className="text-sm text-gray-500 mt-1">
                  {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productnav
