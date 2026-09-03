import BandCard from "../components/BandCard"
import { bands } from "../data/banddata"

export default function BandsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          🎵 My Favorite Bands
        </h1>

        <p className="text-center text-gray-600 mb-10">
          วงดนตรีที่ฉันชื่นชอบ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bands.map((band) => ( //แสดงวงดนตรีทั้งหมด
            <BandCard
              key={band.id}
              band={band}
            />
          ))}
        </div>

      </div>

    </main>
  )
}