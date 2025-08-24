import Layout from "../components/Layout";

export default function Services() {
  const services = [
    { title: "Residential Construction", desc: "Custom homes, additions, and high-quality builds." },
    { title: "Commercial Projects", desc: "Offices, retail, and industrial developments." },
    { title: "Renovations & Remodeling", desc: "Transforming spaces with cost-effective upgrades." }
  ];

  return (
    <Layout title="Services | Magen Global Construction" description="Residential, commercial, and renovation services.">
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="shadow-md rounded-lg p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}