import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact | Magen Global Construction" description="Contact our team for a free quote.">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12">Get in Touch</h1>

          {/* FORM */}
          <form className="grid gap-6 max-w-2xl mx-auto">
            {/* First / Last name */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                className="border p-3 rounded"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="border p-3 rounded"
            />

            {/* Company website */}
            <input
              type="url"
              placeholder="Company Website"
              name="companyWebsite"
              className="border p-3 rounded"
            />

            {/* Seller / Buyer radio groups */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded p-3">
                <p className="font-medium mb-2">Seller</p>
                <label className="inline-flex items-center gap-2 mr-4">
                  <input type="radio" name="seller" value="Yes" /> Yes
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="seller" value="No" defaultChecked /> No
                </label>
              </div>

              <div className="border rounded p-3">
                <p className="font-medium mb-2">Buyer</p>
                <label className="inline-flex items-center gap-2 mr-4">
                  <input type="radio" name="buyer" value="Yes" /> Yes
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="buyer" value="No" defaultChecked /> No
                </label>
              </div>
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              name="message"
              required
              className="border p-3 rounded h-32"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="mt-10 text-center">
            <p>Email: nkem@magenglobalconstruction.com</p>
            <p>Phone: (416) 660-9838</p>
            <p>
              <a
                href="https://calendly.com/nkem-magenglobalconstruction/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Book a Call
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
