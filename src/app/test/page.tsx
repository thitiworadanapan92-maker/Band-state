"use client";
import CourseForm from "@/app/components/CourseForm";

export default function TestPage() {
  return (
    <main>
      <h1>ทดสอบ Course Form</h1>

      <CourseForm
        onSave={(draft) => {
          console.log("บันทึกข้อมูล:", draft);
        }}
        onCancel={() => {
          console.log("ยกเลิก");
        }}
      />
    </main>
  );
}
