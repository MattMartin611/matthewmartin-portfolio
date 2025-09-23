import Link from "next/link";
import projectList from "./projects/projectData"; // ✅ import the shared data

export default function Home() {
  // Get the 3 most recent projects
  const recentProjects = projectList.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl font-bold mb-4">Civil Engineering Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of academic and personal projects that showcase my
          passion for Civil Engineering. My work focuses on sustainability and
          developing creative solutions to contemporary engineering challenges.
        </p>
        <div className="mt-6">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 hover:scale-105 transition transform"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-40 w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                <Link
                  href={`/projects/${project.slug}`} // ✅ works now
                  className="text-blue-600 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
