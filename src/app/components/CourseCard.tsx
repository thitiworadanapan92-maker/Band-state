import Link from "next/link";
import type { Course } from "@/app/types/course";

type CourseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function CourseCard({
  course,
  isFavorite,
  onToggleFavorite,
  onEdit,
  onDelete,
}: CourseCardProps) {
  return (
    <article className="course-card">
      {/* ส่วนบนของการ์ด */}
      <div className="course-card-top">
        <div className="course-icon">
          📚
        </div>

        <span className="course-status status-open">
          ● รายวิชา
        </span>
      </div>

      {/* ข้อมูลรายวิชา */}
      <div className="course-card-content">
        <p className="course-code">
          {course.code}
        </p>

        <h2 className="course-title">
          {course.name}
        </h2>

        <div className="course-credit">
          <span>🎓</span>
          <span>
            {course.credit} หน่วยกิต
          </span>
        </div>

        <p className="course-instructor">
          👨‍🏫 {course.instructor}
        </p>
      </div>

      {/* ดูรายละเอียด */}
      <div className="course-detail-link">
        <Link href={`/courses/${course.id}`}>
          ดูรายละเอียด →
        </Link>
      </div>

      {/* ปุ่มรายการโปรด */}
      <div className="course-card-footer">
        <button
          type="button"
          className={`favorite-button ${
            isFavorite
              ? "favorite-active"
              : ""
          }`}
          aria-pressed={isFavorite}
          onClick={() =>
            onToggleFavorite(course.id)
          }
        >
          <span className="favorite-star">
            {isFavorite ? "★" : "☆"}
          </span>

          {isFavorite
            ? "อยู่ในรายการโปรด"
            : "เพิ่มเป็นรายการโปรด"}
        </button>

        {/* ปุ่มแก้ไข */}
        <button
          type="button"
          className="edit-button"
          onClick={onEdit}
        >
          ✏️ แก้ไข
        </button>

        {/* ปุ่มลบ */}
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          🗑️ ลบ
        </button>
      </div>
    </article>
  );
}

