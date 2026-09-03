import CourseCard from "@/app/components/CourseCard";
import {course} from "@/app/data/coursedata"

export default function CoursesPage() { 
  return ( 
    <>
      <div className="p-4">
          {course.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
      </div>
    </>
  ); 
}