import Image from "next/image"
import { Band } from "../types/band"

type Props = {
  band: Band
}

export default function BandCard({ band }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      
      <Image //ช้สำหรับแสดงรูปภาพ
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
          {band.members.map((member) => ( //แสดงสมาชิก
            <div
              key={member.name}
              className="bg-gray-100 rounded-lg p-3"
            >
              <p className="font-semibold">
                {member.name}
              </p>

              <p className="text-sm text-gray-500">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}