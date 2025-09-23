import Link from "next/link";
import projectList from "./projectData";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="text-blue-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
