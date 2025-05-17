import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('../components/Hero'), { ssr: false })

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-black">
      <Hero />
    </main>
  )
}
