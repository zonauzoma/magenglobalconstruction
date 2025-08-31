import Layout from "../components/Layout";

export default function Services() {
  const services = [
    { title: "Residential Construction", desc: "Custom homes, additions, and high-quality builds tailored to your needs." },
    { title: "Commercial Projects", desc: "Offices, retail, and industrial developments completed on time and on budget." },
    { title: "Renovations & Remodeling", desc: "Transforming spaces with cost-effective and stylish upgrades." },
    { title: "Glass Fabrication & Installation", desc: "Custom glass solutions for residential and commercial projects." },
    { title: "Windows and Doors Installation", desc: "Energy-efficient, durable windows and doors in a range of styles." },
    { title: "Cabinetry", desc: "Custom cabinets and storage solutions built to fit your space." },
    { title: "Plumbing Fixtures", desc: "Installation of sinks, faucets, showers, toilets, and other fixtures." },
    { title: "Electrical", desc: "Wiring, lighting, panel upgrades, and professional electrical installation." },
    { title: "Kitchen Remodeling", desc: "Modern layouts, premium finishes, and functional kitchen upgrades." },
    { title: "Bathroom Remodeling", desc: "Stylish, accessible, and durable bathroom renovations." },
    { title: "Post Construction Cleaning", desc: "Thorough cleaning to make your new or renovated space move-in ready." },
    { title: "Others", desc: "Tell us what you need. We tailor services to your project." }
  ];

  return (
    <Layout
      title="Services | Magen Global Construction"
      description="Residential, commercial, renovation, and specialty construction services."
    >
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
