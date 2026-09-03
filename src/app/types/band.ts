export type Member = { //การสร้าง Type ของสมาชิกวง
  name: string
  role: string
}

export type Band = {
  id: number
  name: string
  genre: string
  description: string
  image: string
  members: Member[]
}