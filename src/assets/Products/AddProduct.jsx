
import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    currency: 'USD',
    stock: '',
    rating: '',
    reviews: '',
    description: '',
    specifications: {},
    images: [],
    inStock: 'true',
    discount: '0'
  });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryFields, setCategoryFields] = useState([]);
  const [imageUrls, setImageUrls] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    setCategories([
      { name: 'Electronics', fields: ['brand', 'color', 'connectivity', 'batteryLife'] },
      { name: 'Clothing', fields: ['brand', 'material', 'sizes', 'colors'] },
      { name: 'Footwear', fields: ['brand', 'material', 'sizes', 'colors'] },
      { name: 'Home & Kitchen', fields: ['brand', 'material', 'capacity', 'power'] },
      { name: 'Sports & Fitness', fields: ['brand', 'material', 'weight', 'sizes'] }
    ]);
  }, []);

 
  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find(cat => cat.name === selectedCategory);
      if (category) {
        setCategoryFields(category.fields);
        setFormData(prev => ({ ...prev, category: selectedCategory }));
      }
    } else {
      setCategoryFields([]);
      setFormData(prev => ({ ...prev, category: '', specifications: {} }));
    }
  }, [selectedCategory, categories]);

  const handleBasicInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      id: Date.now().toString(),
      images: imageUrls.split(',').map(url => url.trim()).filter(url => url),
      price: parseFloat(formData.price).toFixed(2),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating) || '4.5',
      reviews: parseInt(formData.reviews) || '0',
      discount: parseInt(formData.discount) || '0'
    };

    try {
      await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      
      alert('✅ Product added successfully!');
      navigate('/');
    } catch (error) {
      alert('❌ Error: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 border border-white/50">
         <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              ➕ Add Product
            </h1>
            <p className="text-xl text-gray-600">Fill details & match your JSON structure</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Product Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleBasicInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
                  placeholder="Wireless Headphones"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Price * (USD)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleBasicInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
                  placeholder="79.99"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* Category & Dynamic Fields */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Category *</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg bg-white"
                required
              >
                <option value="">Choose Category</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            {categoryFields.length > 0 && (
              <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border-2 border-indigo-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mr-3 flex items-center justify-center text-white font-bold">⚙️</span>
                  {selectedCategory} Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryFields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">{field.replace('_', ' ')} *</label>
                      <input
                        type="text"
                        name={field}
                        onChange={handleSpecInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        placeholder={`Enter ${field}`}
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleBasicInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="150"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Discount %</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleBasicInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="10"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleBasicInputChange}
                rows="3"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-vertical"
                placeholder="Premium wireless headphones with active noise cancellation..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Image URLs (comma separated)</label>
              <input
                type="text"
                value={imageUrls}
                onChange={(e) => setImageUrls(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-8 rounded-3xl text-xl font-bold shadow-2xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <span className="text-2xl mr-3">🚀</span>
              Save Product to db.json
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

