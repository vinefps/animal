'use client'

import Link from 'next/link';
import { useState } from 'react';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-500 w-full border-b-2">
      <nav className="flex items-center justify-between p-4">
        <div className="space-x-4 hidden md:flex md:items-center">
          <Link href={'/'}><img src="/logo.png" className='w-12'/></Link>
          <Link href="/" className="text-white hover:text-gray-200">Saber sobre</Link>
          <Link href="/animais" className="text-white hover:text-gray-200">Animais</Link>
          <Link href="/blog" className="text-white hover:text-gray-200">Blog</Link>
          <Link href="/entrar" className="text-white hover:text-gray-200">Entrar</Link>
          <Link href="/cadastrar" className="text-white hover:text-gray-200">Cadastrar</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white hover:text-gray-200" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link href="/" className="block p-4 text-white hover:text-gray-200">Saber sobre</Link>
          <Link href="/animais" className="block p-4 text-white hover:text-gray-200">Animais</Link>
          <Link href="/blog" className="block p-4 text-white hover:text-gray-200">Blog</Link>
          <Link href="/entrar" className="block p-4 text-white hover:text-gray-200">Entrar</Link>
          <Link href="/cadastrar" className="block p-4 text-white hover:text-gray-200">Cadastrar</Link>
        </div>
      )}
    </div>
  );
};