// src/pages/Home.jsx
import { modules } from "../data/modules";
import ModuleCard from "../components/ModuleCard";

export default function Home() {
  return (
    <>
      <h1>My Test React</h1>

      <div className="module-container">
        {modules.map((m) => (
          <ModuleCard
            key={m.id}
            title={m.title}
            path={m.path}
          />
        ))}
      </div>
    </>
  );
}
