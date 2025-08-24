import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout title="Projects | Magen Global Construction" description="Recent construction projects across Canada.">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12">Recent Projects</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-xl overflow-hidden shadow-md bg-white">
                <img
                  src={`https://source.unsplash.com/600x400/?construction,building,${n}`}
                  alt={`Project ${n}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">Project {n}</h2>
                  <p className="text-gray-600">Delivered with quality, on time and on budget.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}