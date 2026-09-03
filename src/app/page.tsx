export default function HomePage() {
  // --- ตัวแปรสำหรับกิจกรรม 2.1 ---
  const siteName = "TechLearn Academy";
  const description = "แหล่งรวมคอร์สเรียนออนไลน์และข้อมูลรายวิชาด้านเทคโนโลยี";


  const courseCount = 2;
  const isOpen = true;
  const topics = ["Next.js", "TypeScript", "Tailwind CSS"];

  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };

  const courses: Course[] = [
    {
      id: 100,
      code: "10301231",
      title: "Web Technology",
      credits: 3,
      isOpen: true,
    },
    {
      id: 200,
      code: "10301232",
      title: "Database Systems",
      credits: 3,
      isOpen: false,
    },
  ];

  return (
    <main className="p-8 max-w-2xl mx-auto">
      {/* ส่วนกิจกรรม 2.1 */}
      <h1 className="text-3xl font-bold mb-2">{siteName}</h1>
      <p className="text-gray-600 mb-6">{description}</p>

      <section className="bg-slate-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">เว็บไซต์นี้เหมาะกับใคร?</h2>
        <p className="text-gray-700">
          เหมาะสำหรับนักศึกษาและผู้ที่สนใจต้องการอัปเดตทักษะการเขียนโปรแกรมและการพัฒนาเว็บแอปพลิเคชันยุคใหม่
        </p>
      </section>

      <p>จำนวนรายวิชา: {courseCount}</p>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>

      <ul className="list-disc pl-5 my-4">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <article key={course.id} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-bold">
              {index + 1}. {course.title}
            </h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
          </article>
        ))}
      </div>
    </main>
  );
}