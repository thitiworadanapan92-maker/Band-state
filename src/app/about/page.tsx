export default function AboutPage() {
  const pageTitle = "เกี่ยวกับเรา";
  const mission = "มุ่งมั่นพัฒนาแหล่งเรียนรู้ด้านเทคโนโลยีและซอฟต์แวร์ที่เข้าถึงง่ายสำหรับทุกคน";

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
      
      <section className="bg-slate-50 border p-6 rounded-lg space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">พันธกิจของเรา</h2>
          <p className="text-gray-600 mt-1">{mission}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">ติดต่อเรา</h2>
          <p className="text-gray-600 mt-1">อีเมล: contact@coursehub.com</p>
        </div>
      </section>
    </main>
  );
}