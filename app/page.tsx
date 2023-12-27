'use client'
import { useState } from 'react';
import Image from 'next/image'
import coffee from '@/public/images/Cup-of-coffee.jpg'
// import { Metadata } from 'next'
import dynamic from 'next/dynamic';
import _ from 'lodash'
export default function Home() {
  const [isVisible, setVisible] = useState(false)
  return (
    <main className="relative h-screen">
        <h1 className="font-poppins">Hello World</h1>
        <button onClick={() => {
          const users = [
            { name: 'c'},
            { name: 'b'},
            { name: 'a'},
          ];
          const sorted = _.orderBy(users, ['name'])
          console.log(sorted);
        }
      }>Show</button>
    </main>
  )
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: '....'
//   }
// }