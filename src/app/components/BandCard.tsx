import Image from "next/image"
import { Band } from "../types/band"

type Props = {
  band: Band
}

export default function BandCard({ band }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      
      <Image
        src={band.image}
        alt={band.name}
        width={500}
        height={300}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {band.name}
        </h2>

        <p className="text-purple-600 font-semibold mb-3">
          {band.genre}
        </p>

        <p className="text-gray-600 mb-5">
          {band.description}
        </p>

        <h3 className="text-lg font-bold mb-3">
          สมาชิกวง
        </h3>

        <div className="space-y-2">
          {band.members.map((member) => (
            <div
              key={member.name}
              className="bg-gray-100 rounded-lg p-3 flex items-center gap-3"
            >
              {/* แสดงรูปสมาชิก ถ้ามีรูปจะดึงมาแสดง ถ้าไม่มีจะแสดงกล่องสีเทาแทน */}
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold flex-shrink-0">
                  {member.name.charAt(0)}
                </div>
              )}

              <div>
                <p className="font-semibold">
                  {member.name}
                </p>

                <p className="text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}