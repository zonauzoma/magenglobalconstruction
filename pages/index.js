import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Magen Global Construction | Home"
      description="Trusted construction partner for residential, commercial, and renovation projects in Canada."
    >
      <section className="h-[80vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center relative">
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h1>
          <p className="text-lg mb-6">Acquisition of Construction Businesses.</p>
          <div className="mt-6">
            <a
              href="https://calendly.com/nkem-magenglobalconstruction/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}