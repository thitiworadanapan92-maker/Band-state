import { Band } from "../types/band"

export const bands: Band[] = [
  {
    id: 1,
    name: "NEFFEX",
    genre: "Electronic / Rock",
    description:
      "วงดนตรีที่มีเพลงแนว Electronic Rock และมีเพลงที่ให้พลังและแรงบันดาลใจ",
    image: "/images/bands/neffex.jpg",
    members: [
      {
        name: "Bryce Savage",
        role: "Vocal / Producer",
      },
    ],
  },

  {
    id: 2,
    name: "Imagine Dragons",
    genre: "Pop Rock",
    description:
      "วงดนตรีอเมริกันที่มีเพลงแนว Pop Rock และ Alternative Rock",
    image: "/images/bands/imagine dragons.jpg",
    members: [
      {
        name: "Dan Reynolds",
        role: "Vocal",
      },
      {
        name: "Wayne Sermon",
        role: "Guitar",
      },
      {
        name: "Ben McKee",
        role: "Bass",
      },
      {
        name: "Daniel Platzman",
        role: "Drums",
      },
    ],
  },

  {
    id: 3,
    name: "The Score",
    genre: "Alternative Rock",
    description:
      "วงดนตรีที่มีเพลงแนว Alternative Rock และเพลงที่สร้างแรงบันดาลใจ",
    image: "/images/bands/the score.jpg",
    members: [
      {
        name: "Eddie Anthony",
        role: "Vocal / Guitar",
      },
      {
        name: "Edan Dover",
        role: "Keyboard / Producer",
      },
    ],
  },
]