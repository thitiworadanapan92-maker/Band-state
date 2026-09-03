import {Course} from "@/app/types/course";

type CourseCardProps = { 
  course: Course;
}; 
 
export default function CourseCard({course}:
    CourseCardProps) {
        return(
            <>
                <article key={course.id}
                className="border p-4 mb-4 rounded-lg shadow-md">
                </article>            
            </>
        )
    }
 