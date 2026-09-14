"use client";

import { useState } from "react";
import BandCard from "../components/BandCard";
import { bands } from "../data/banddata";

export default function BandsPage() {
  // ช่องค้นหา
  const [search, setSearch] = useState("");

  // เก็บ id ของวงที่ติดตาม
  const [followedBands, setFollowedBands] = useState<number[]>([]);

  // เก็บเฉพาะเงื่อนไขการเรียง
  const [sortBy, setSortBy] = useState<"az" | "za">("az");

  // ค้นหาและเรียงลำดับ
  const filteredBands = bands
    .filter((band) =>
      band.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      // A-Z
      if (sortBy === "az") {
        return a.name.localeCompare(b.name);
      }

      // Z-A
      return b.name.localeCompare(a.name);
    });

  // ติดตาม / เลิกติดตาม
  const handleFollow = (id: number) => {
    setFollowedBands((prev) =>
      prev.includes(id)
        ? prev.filter((bandId) => bandId !== id)
        : [...prev, id]
    );
  };

  // ล้างเงื่อนไขทั้งหมด
  const handleReset = () => {
    setSearch("");
    setSortBy("az");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* หัวข้อ */}
        <h1 className="text-4xl font-bold text-center mb-3">
          🎵 My Favorite Bands
        </h1>

        <p className="text-center text-gray-600 mb-6">
          วงดนตรีที่ฉันชื่นชอบ
        </p>

        {/* ค้นหา + เรียงลำดับ */}
        <div className="bg-white rounded-xl shadow p-5 mb-6">

          {/* ช่องค้นหา */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              🔍 ค้นหาวงดนตรี
            </label>

            <input
              type="text"
              placeholder="ค้นหาชื่อวงดนตรี..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* เรียงลำดับ + ล้างเงื่อนไข */}
          <div className="flex flex-col md:flex-row gap-3">

            {/* เรียง A-Z / Z-A */}
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "az" | "za")
              }
              className="p-3 border border-gray-300 rounded-lg"
            >
              <option value="az">
                เรียงตามชื่อ A-Z
              </option>

              <option value="za">
                เรียงตามชื่อ Z-A
              </option>
            </select>

            {/* ล้างเงื่อนไข */}
            <button
              onClick={handleReset}
              className="px-5 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              🧹 ล้างเงื่อนไขทั้งหมด
            </button>

          </div>
        </div>

        {/* จำนวนวงที่ติดตาม */}
        <div className="text-center mb-6">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            ติดตามอยู่ {followedBands.length} วง
          </span>
        </div>

        {/* แสดงวงดนตรี */}
        {filteredBands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {filteredBands.map((band) => (
              <BandCard
                key={band.id}
                band={band}
                isFollowed={followedBands.includes(band.id)}
                onFollow={() => handleFollow(band.id)}
              />
            ))}

          </div>
        ) : (
          /* Empty State */
          <div className="text-center bg-white rounded-xl p-10 shadow">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold mb-2">
              ไม่พบวงดนตรี
            </h2>

            <p className="text-gray-500">
              ไม่พบวงดนตรีที่ตรงกับ &quot;{search}&quot;
            </p>

          </div>
        )}

      </div>
    </main>
  );
}