"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/app/types/course";
import type { CourseDraft } from "./CourseForm";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";

type CourseExplorerProps = {
  initialCourses: Course[];
};

export default function CourseExplorer({
  initialCourses,
}: CourseExplorerProps) {
  // รายการรายวิชา
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  // ข้อความค้นหา
  const [keyword, setKeyword] = useState("");

  // ID ของรายวิชาที่กำลังแก้ไข
  const [editingId, setEditingId] = useState<string | null>(null);

  // รายการโปรด
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // =========================
  // เพิ่มรายวิชา
  // =========================
  function handleCreate(draft: CourseDraft) {
    const newCourse: Course = {
      id: crypto.randomUUID(),
      code: draft.code.trim(),
      name: draft.name.trim(),
      credit: Number(draft.credit),
      instructor: draft.instructor.trim(),
    };

    setCourses((prevCourses) => [
      ...prevCourses,
      newCourse,
    ]);
  }

  // =========================
  // ลบรายวิชา
  // =========================
  function handleDelete(id: string) {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );

    // ถ้ารายวิชาที่ลบเป็นรายการโปรด ให้เอาออกด้วย
    setFavoriteIds((prevIds) =>
      prevIds.filter((favoriteId) => favoriteId !== id)
    );

    // ถ้ากำลังแก้ไขรายการที่ถูกลบ
    if (editingId === id) {
      setEditingId(null);
    }
  }

  // =========================
  // แก้ไขรายวิชา
  // =========================
  function handleUpdate(
    id: string,
    draft: CourseDraft
  ) {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id
          ? {
              ...course,
              code: draft.code.trim(),
              name: draft.name.trim(),
              credit: Number(draft.credit),
              instructor: draft.instructor.trim(),
            }
          : course
      )
    );

    setEditingId(null);
  }

  // =========================
  // บันทึก เพิ่ม / แก้ไข
  // =========================
  function handleSave(draft: CourseDraft) {
    if (editingId === null) {
      handleCreate(draft);
      return;
    }

    handleUpdate(editingId, draft);
  }

  // =========================
  // รายวิชาที่กำลังแก้ไข
  // =========================
  const editingCourse = courses.find(
    (course) => course.id === editingId
  );

  // =========================
  // ค้นหารายวิชา
  // =========================
  function handleKeywordChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setKeyword(event.target.value);
  }

  const searchText = keyword.trim().toLowerCase();

  const visibleCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchText) ||
      course.code.toLowerCase().includes(searchText)
  );

  // =========================
  // เพิ่ม / ลบ รายการโปรด
  // =========================
  function handleToggleFavorite(id: string) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter(
            (favoriteId) => favoriteId !== id
          )
        : [...prevIds, id]
    );
  }

  // =========================
  // ล้างการค้นหา
  // =========================
  function handleClearSearch() {
    setKeyword("");
  }

  return (
    <main className="courses-page">
      <div className="courses-container">

        {/* ส่วนหัว */}
        <section className="courses-hero">
          <div className="courses-hero-text">
            <div className="courses-badge">
              📚 COURSE HUB
            </div>

            <h1 className="courses-heading">
              รายวิชาทั้งหมด
            </h1>

            <p className="courses-description">
              ค้นหารายวิชาที่ต้องการ
              และเพิ่มรายวิชาที่สนใจไว้ในรายการโปรด
            </p>
          </div>

          {/* จำนวนรายการโปรด */}
          <div className="favorite-summary">
            <div className="favorite-summary-icon">
              ⭐
            </div>

            <div>
              <span className="favorite-summary-number">
                {favoriteIds.length}
              </span>

              <span className="favorite-summary-text">
                รายการโปรด
              </span>
            </div>
          </div>
        </section>

        {/* ฟอร์มเพิ่ม / แก้ไข */}
        <section className="course-form-section">
          <CourseForm
            key={editingId ?? "new"}
            initialCourse={editingCourse}
            onSave={handleSave}
            onCancel={() => setEditingId(null)}
          />
        </section>

        {/* ส่วนค้นหา */}
        <section className="search-section">
          <div className="search-box-wrapper">
            <span className="search-icon">
              🔍
            </span>

            <input
              type="search"
              aria-label="ค้นหารายวิชา"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
              className="course-search"
            />

            {keyword && (
              <button
                type="button"
                className="clear-search-button"
                onClick={handleClearSearch}
                aria-label="ล้างการค้นหา"
              >
                ✕
              </button>
            )}
          </div>

          {/* จำนวนผลการค้นหา */}
          <div className="search-result">
            {keyword.trim() === "" ? (
              <>
                มีทั้งหมด{" "}
                <strong>
                  {courses.length}
                </strong>{" "}
                รายวิชา
              </>
            ) : (
              <>
                พบ{" "}
                <strong>
                  {visibleCourses.length}
                </strong>{" "}
                รายวิชา
              </>
            )}
          </div>
        </section>

        {/* แสดงรายวิชา */}
        {visibleCourses.length === 0 ? (
          <section className="empty-state">
            <div className="empty-icon">
              🔍
            </div>

            <h2>
              ไม่พบรายวิชา
            </h2>

            <p>
              ไม่พบรายวิชาที่ตรงกับ{" "}
              <strong>
                &quot;{keyword}&quot;
              </strong>
            </p>

            <button
              type="button"
              className="empty-button"
              onClick={handleClearSearch}
            >
              แสดงรายวิชาทั้งหมด
            </button>
          </section>
        ) : (
          <section className="course-grid">
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isFavorite={favoriteIds.includes(
                  course.id
                )}
                onToggleFavorite={() =>
                  handleToggleFavorite(course.id)
                }
                onEdit={() =>
                  setEditingId(course.id)
                }
                onDelete={() =>
                  handleDelete(course.id)
                }
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
