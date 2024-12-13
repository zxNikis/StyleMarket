import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Классическая белая футболка',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Джинсовая куртка',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Черные джинсы',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Летнее платье',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Index = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemsCount={cartItems.length} />
      
      {/* Hero Section */}
      <div className="bg-primary/5 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Добро пожаловать в СтильМаркет
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in">
            Мы предлагаем стильную и качественную одежду для любого случая. Откройте для себя нашу коллекцию
            неподвластных времени вещей, которые сочетают в себе комфорт и элегантность.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Популярные товары</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;