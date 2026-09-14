"use client";

import { useState } from "react";
import { Band } from "../types/band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  onFollow: () => void;
};

export default function BandCard({
  band,
  isFollowed,
  onFollow,
}: BandCardProps) {
  // เก็บจำนวน Like
  const [likes, setLikes] = useState(0);

  // เก็บสถานะ Like
  const [isLiked, setIsLiked] = useState(false);

  // กด Like
  const handleLike = () => {
    setIsLiked((prev) => !prev);

    setLikes((prev) =>
      isLiked ? prev - 1 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      {/* รูปวง */}
      <img
        src={band.image}
        alt={band.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        {/* ชื่อวง */}
        <h2 className="text-2xl font-bold mb-2">
          {band.name}
        </h2>

        {/* แนวเพลง */}
        <p className="text-gray-600 mb-2">
          🎸 {band.genre}
        </p>

        {/* คำอธิบาย */}
        <p className="text-gray-600 mb-4">
          {band.description}
        </p>

        {/* สมาชิกวง */}
        <div className="mb-5">

          {/* แสดงจำนวนสมาชิกจากข้อมูลที่มีอยู่แล้ว */}
          <h3 className="font-bold text-lg mb-3">
            👥 สมาชิกวง ({band.members.length} คน)
          </h3>

          <div className="space-y-3">

            {band.members.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3"
              >

                {/* รูปสมาชิก */}
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}

                {/* ข้อมูลสมาชิก */}
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

        {/* ปุ่ม Follow + Like */}
        <div className="flex gap-2">

          {/* Follow */}
          <button
            onClick={onFollow}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold ${
              isFollowed
                ? "bg-gray-300 text-gray-700"
                : "bg-blue-500 text-white"
            }`}
          >
            {isFollowed
              ? "✓ เลิกติดตาม"
              : "+ ติดตาม"}
          </button>

          {/* Like */}
          <button
            onClick={handleLike}
            className={`px-4 py-2 rounded-lg ${
              isLiked
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {isLiked ? "❤️" : "♡"} {likes}
          </button>

        </div>

      </div>
    </div>
  );
}