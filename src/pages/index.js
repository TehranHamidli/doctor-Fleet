import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Filter from "./Filter";


export default function Home() {
  return (
    <>
    
      <main className={inter.className}>

        <Filter />

      </main>

    </>

  )
}
