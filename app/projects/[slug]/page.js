import projectList from "../projectData";
import Link from "next/link";

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projectList.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Project not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-60 object-cover rounded-xl mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {project.content}
      </p>
      <div className="mt-8">
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
