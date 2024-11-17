import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <header className="min-h-screen" style={{
        background: 'linear-gradient(180.71deg, rgba(72, 116, 174, 0.7) 0.61%, #4874AE 99.39%)',
      }} >
        <Navbar />
      </header>
    </div>
  )
}
