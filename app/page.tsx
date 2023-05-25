import Hero from './components/Hero'
import InputSearch from './components/Input/Search'
import PanoramaView from './components/PanoramaView'

export default function Home() {
  return (
    <main className="">
      <div className='py-7 px-6 md:px-12'>
        <InputSearch />
      </div>

      <Hero />

      <PanoramaView />
    </main>
  )
}
