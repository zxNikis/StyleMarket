import React from 'react';
import { ShoppingCart, Home, Grid, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarProps {
  cartItemsCount: number;
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, isLoggedIn = false }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-semibold text-primary">
              СтильМаркет
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Home className="w-4 h-4" />
                Главная
              </Link>
              <Link to="/catalog" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Grid className="w-4 h-4" />
                Каталог
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                {isLoggedIn ? 'Профиль' : 'Войти'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;