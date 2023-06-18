import Image from 'next/image'
import { Nav } from './components/nav/page'
import { Maincontent } from './components/content/maincontent/page'
import { Second } from './components/content/secondcontent/page'
import { Third } from './components/content/thirdcontent/page'
import { Footer } from './components/footer/page'

export default function Home() {
  return (
    <>
      <Maincontent />
      <Second />
      <Third />
    </>
  )
}
