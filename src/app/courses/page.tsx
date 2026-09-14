"use client"
import { course } from "@/app/data/coursedata";
import CourseExplorer from "../components/CourseExplorer";

export default function CoursesPage() {
  return (
    <>
      <CourseExplorer initialCourses={course} />
    </>
  );
}
