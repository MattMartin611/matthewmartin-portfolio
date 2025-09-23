export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am always happy to discuss potential opportunities. Please feel free to contact me via Email.
      </p>

      <a
        href="mailto:matthew.martin611@yahoo.co.uk"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </main>
  );
}
