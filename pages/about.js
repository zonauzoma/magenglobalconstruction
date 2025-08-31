import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About | Magen Global Construction" description="About our company and values.">
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Our Niche </h1>
          <p className="text-lg text-gray-700">
             MAGËN Global Construction team is highly experienced with industry knowledge across several construction sectors. 
             Our people are invested in getting to know you and understand your business goals before we discuss numbers. 
             We proactively and transparently manage every detail of the deal from inception to completion with a win-win goal for each side.
            
          </p>
        </div>
      </section>
    </Layout>
  );
}