export type Member = { //การสร้าง Type ของสมาชิกวง
  name: string
  role: string
  image?: string // เพิ่มฟิลด์รูปภาพสมาชิก (ใส่ ? ไว้เพื่อให้เป็น optional หากบางคนยังไม่มีรูป)
}

export type Band = {
  id: number
  name: string
  genre: string
  description: string
  image: string
  members: Member[]
}