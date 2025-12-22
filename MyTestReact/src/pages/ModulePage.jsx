// src/pages/ModulePage.jsx
import { Link, useParams } from "react-router";
import { modules } from "../data/modules";

export default function ModulePage() {
  const { moduleId } = useParams();
  const module = modules.find(
    (m) => m.path === `/${moduleId}`
  );

  if (!module) return <p>ไม่พบโมดูล</p>;

  return (
    <>
      <h2>{module.title}</h2>

      <div className="container_list">
        {module.lessons.map((lesson, index) => (
          <Link key={index} to={lesson.path} className="list">
            {lesson.name}
          </Link>
        ))}
      </div>
    </>
  );
}
