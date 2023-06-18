import React from 'react'
import Link from 'next/link';

const Cadastro = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-orange-400 text-white">
        <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo!</h1>
          <Link href="/entrar" className='bg-white text-orange-400 font-bold py-2 px-4 rounded'>Entrar</Link>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Cadastre-se</h2>
        <div className="w-1/2">
          <input
            type="text"
            className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
            placeholder="Nome"
          />
          <input
            type="email"
            className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
            placeholder="E-mail"
          />
          <input
            type="password"
            className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
            placeholder="Senha"
          />
          <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded w-full">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
