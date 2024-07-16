import React from 'react';
import Image from 'next/image';

const dogs = [
  {
    name: 'Dog 1',
    photo: '/imgs/chihuahua/chihuahua1.jpg',
    description: 'Descrição do cachorro 1.',
    age: '2 anos',
    gender: 'Macho',
    location: 'São Paulo, SP',
  },
  {
    name: 'Dog 2',
    photo: '/imgs/chihuahua/chihuahua2.jpg',
    description: 'Descrição do cachorro 2.',
    age: '3 anos',
    gender: 'Fêmea',
    location: 'Rio de Janeiro, RJ',
  },
  {
    name: 'Dog 3',
    photo: '/imgs/chihuahua/chihuahua3.jpg',
    description: 'Descrição do cachorro 3.',
    age: '1 ano',
    gender: 'Macho',
    location: 'Belo Horizonte, MG',
  },
];

const Chihuahua = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-white">Cachorros Chihuahua Disponíveis para Adoção:</h1>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dogs.map((dog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <div className="rounded-lg mb-4">
                <Image src={dog.photo} alt={dog.name} width={500} height={300} className="rounded-lg" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{dog.name}</h2>
              <p className="text-gray-600 mb-2">{dog.description}</p>
              <div className="flex justify-between text-gray-500">
                <p>{dog.age}</p>
                <p>{dog.gender}</p>
              </div>
              <div className="flex justify-between text-gray-500 mt-2">
                <p>{dog.location}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Adotar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Chihuahua;
