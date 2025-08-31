import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact | Magen Global Construction" description="Contact our team for a free quote.">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12">Get in Touch</h1>
          <form className="grid gap-6 max-w-2xl mx-auto">
            <input type="text" placeholder="Your Name" className="border p-3 rounded" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded" />
            <input type="text" placeholder="Phone Number" className="border p-3 rounded" />
            <textarea placeholder="Your Message" className="border p-3 rounded h-32" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold">
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center">
            <p>Email: nkem@magenglobalconstruction.com</p>
            <p>Phone: (416) 660-9838</p>
            <p>
  <a href="https://calendly.com/nkem-magenglobalconstruction/30min" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
    Book a Call
  </a>
</p>

          </div>
        </div>
      </section>
    </Layout>
  );
}