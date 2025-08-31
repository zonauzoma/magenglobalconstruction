import Layout from "../components/Layout";

export default function Process() {
  const stages = [
    {
      title: "Stage 1 - Preliminary Call",
      desc: "Are we a right fit? We schedule an introductory call to understand your needs and goals."
    },
    {
      title: "Stage 2 - Business Review",
      desc: "Preferably with the Seller, we review the business background, operations, and expectations."
    },
    {
      title: "Stage 3 - Business Analysis",
      desc: "Our in-house deal team performs a detailed analysis to assess risks and opportunities."
    },
    {
      title: "Stage 4 - Deal Finalized",
      desc: "Contracts are signed and the transaction is completed successfully."
    }
  ];

  return (
    <Layout
      title="Our Process | Magen Global Construction"
      description="Learn about our acquisition process and how we work with partners and sellers."
    >
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Our Process</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            We build and value relationships which we prioritize over any deal.
            For every deal, we work with non-disclosure agreements and collaborate
            closely with the seller to ensure this process is seamless with as little
            middlemen as possible. Our in-house deal team (Accountants, Lawyers) are
            on standby to see this deal through.
          </p>

          {/* Pipeline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {stages.map((stage, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6">
                {/* Card */}
                <div className="bg-white rounded-lg shadow-md p-6 w-64 text-center relative">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow">
                    {i + 1}
                  </div>
                  <h2 className="text-lg font-semibold mt-6 mb-3 text-blue-700">
                    {stage.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{stage.desc}</p>
                </div>

                {/* Arrows: horizontal on desktop, vertical on mobile */}
                {i < stages.length - 1 && (
                  <>
                    <span
                      className="hidden md:inline text-blue-600 text-2xl select-none"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <span
                      className="md:hidden inline text-blue-600 text-2xl select-none"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}