import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#102d25]">

        {/* Background Image */}
        <img
          src="/Images/hero1.png"
          alt="Anugrah Homes"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071d17]/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17] via-[#071d17]/70 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24">

          <div className="max-w-4xl">

            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d8b56d]">
              <span className="h-px w-8 bg-[#d8b56d]" />
              About Anugrah Homes
            </span>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
              More Than
              <span className="block italic text-[#d8b56d]">
                A Property.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              A thoughtfully planned destination where premium residential
              spaces, modern living and a connected lifestyle come together.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full bg-[#d8b56d] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition-all duration-300 hover:bg-white"
              >
                Discover Our Story
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#d8b56d] hover:text-[#d8b56d]"
              >
                Our Process
              </a>

            </div>

          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/60 lg:flex">
          Scroll to explore
          <span className="h-px w-10 bg-white/40" />
        </div>

      </section>


      {/* =====================================================
          INTRO / STORY SECTION
      ===================================================== */}
      <section
        id="story"
        className="relative overflow-hidden bg-[#f5f1e8] py-20 sm:py-24 lg:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">

            {/* Left Image */}
            <div className="relative lg:col-span-6">

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="/Images/hero2.png"
                  alt="Anugrah Homes development"
                  className="h-[450px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[550px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102d25]/50 to-transparent" />

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 right-5 rounded-2xl bg-[#102d25] p-5 shadow-2xl sm:right-8 sm:p-7">

                <p className="font-serif text-4xl text-[#d8b56d] sm:text-5xl">
                  1000+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Homes Sold
                </p>

              </div>

            </div>


            {/* Right Content */}
            <div className="lg:col-span-6">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                01 / Who We Are
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Your Reliable
                <span className="block italic text-[#a07835]">
                  Real Estate Partner.
                </span>
              </h2>

              <p className="mt-8 text-sm leading-7 text-[#5f6d67] sm:text-base sm:leading-8">
                Anugrah Homes is built around the idea that finding the right
                property should feel clear, confident and personal.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#5f6d67] sm:text-base sm:leading-8">
                The brand focuses on premium residential plots and luxury
                spaces in Jattari, Aligarh, with an emphasis on trust,
                transparency and a smoother property journey.
              </p>

              {/* Small Feature List */}
              <div className="mt-9 space-y-5">

                <div className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#102d25] text-xs text-[#d8b56d]">
                    ✓
                  </span>

                  <div>
                    <h3 className="font-serif text-xl">
                      Trust & Transparency
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#7a847f]">
                      Clear communication and support throughout the property
                      journey.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#102d25] text-xs text-[#d8b56d]">
                    ✓
                  </span>

                  <div>
                    <h3 className="font-serif text-xl">
                      Modern Approach
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#7a847f]">
                      Technology and modern processes designed around today's
                      property buyers.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}
      <section className="bg-[#102d25] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
              02 / Our Purpose
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Built With
              <span className="block italic text-[#d8b56d]">
                Purpose.
              </span>
            </h2>

          </div>


          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2">

            {/* Mission */}
            <div className="group relative min-h-[400px] overflow-hidden bg-[#0d2821] p-8 sm:p-10 lg:p-14">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#d8b56d]/10 transition duration-700 group-hover:scale-150" />

              <span className="text-xs font-bold tracking-[0.25em] text-[#d8b56d]">
                01
              </span>

              <h3 className="mt-20 font-serif text-4xl text-white sm:text-5xl">
                Our Mission
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                To simplify the real estate journey by connecting people with
                the right properties through trust, transparency and
                technology.
              </p>

              <div className="mt-8 h-px w-16 bg-[#d8b56d] transition-all duration-500 group-hover:w-28" />

            </div>


            {/* Vision */}
            <div className="group relative min-h-[400px] overflow-hidden bg-[#17352c] p-8 sm:p-10 lg:p-14">

              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-[#d8b56d]/10 transition duration-700 group-hover:scale-125" />

              <span className="text-xs font-bold tracking-[0.25em] text-[#d8b56d]">
                02
              </span>

              <h3 className="mt-20 font-serif text-4xl text-white sm:text-5xl">
                Our Vision
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                To redefine how people discover, evaluate and engage with
                properties, helping individuals find their ideal home or
                investment with confidence.
              </p>

              <div className="mt-8 h-px w-16 bg-[#d8b56d] transition-all duration-500 group-hover:w-28" />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MILESTONES
      ===================================================== */}
      <section className="bg-[#f5f1e8] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-4">

            {/* Heading */}
            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                03 / Our Journey
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl">
                Milestones
                <span className="block italic text-[#a07835]">
                  That Matter.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-[#6b746f]">
                From a local beginning to a growing real estate brand, the
                journey has been shaped by relationships, innovation and
                customer experience.
              </p>

            </div>


            {/* Timeline */}
            <div className="lg:col-span-3">

              <div className="relative">

                {/* Timeline Line */}
                <div className="absolute left-[11px] top-2 hidden h-[calc(100%-20px)] w-px bg-[#102d25]/15 sm:block" />

                <div className="space-y-8">

                  {[
                    [
                      "01",
                      "Humble Beginnings",
                      "Started with a clear mission to help people find homes with honesty and care.",
                    ],
                    [
                      "02",
                      "A Trusted Name",
                      "Built long-term relationships with clients and partners through reliable service.",
                    ],
                    [
                      "03",
                      "Embracing Innovation",
                      "Adopted modern technology and tools to improve property discovery and customer experience.",
                    ],
                    [
                      "04",
                      "Over 1,000 Homes Sold",
                      "Reached a significant milestone of more than a thousand successful property transactions.",
                    ],
                    [
                      "05",
                      "Moving Forward Together",
                      "Continuing to grow with a dedicated team, modern tools and a renewed vision.",
                    ],
                  ].map(([number, title, description]) => (

                    <div
                      key={number}
                      className="group relative grid gap-5 sm:grid-cols-[40px_1fr]"
                    >

                      {/* Number */}
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#d8b56d] text-[8px] font-bold text-[#102d25]">
                        {number}
                      </div>

                      {/* Content */}
                      <div className="rounded-2xl border border-[#102d25]/10 bg-white/40 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-xl sm:p-7">

                        <h3 className="font-serif text-2xl text-[#102d25] sm:text-3xl">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6b746f]">
                          {description}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LIFESTYLE IMAGE SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#071d17]">

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[450px] lg:min-h-[650px]">

            <img
              src="/Images/hero3.png"
              alt="Anugrah Homes lifestyle"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#071d17]/45" />

          </div>


          {/* Text */}
          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">

            <div className="max-w-xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                04 / The Experience
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl">
                A Place To
                <span className="block italic text-[#d8b56d]">
                  Belong.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Anugrah Homes presents a modern countryside lifestyle where
                peaceful surroundings meet contemporary amenities and
                connectivity.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7">

                <div>
                  <p className="font-serif text-3xl text-white sm:text-4xl">
                    01
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Peaceful Living
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-white sm:text-4xl">
                    02
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Modern Amenities
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section
        id="process"
        className="bg-[#f5f1e8] py-20 sm:py-24 lg:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
              05 / Our Process
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Your Journey,
              <span className="block italic text-[#a07835]">
                Made Simple.
              </span>
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              [
                "01",
                "Discover Your Dream Home",
                "Explore a curated selection of properties designed around your lifestyle and requirements.",
              ],
              [
                "02",
                "Schedule A Viewing",
                "Book a site visit at your convenience and experience the property in person.",
              ],
              [
                "03",
                "Seal The Deal",
                "Receive guidance through documentation and the final stages of your property journey.",
              ],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="group relative overflow-hidden rounded-[2rem] bg-[#102d25] p-7 sm:p-9"
              >

                <div className="flex items-start justify-between">

                  <span className="text-xs font-bold tracking-[0.25em] text-[#d8b56d]">
                    {number}
                  </span>

                  <span className="font-serif text-6xl leading-none text-white/10 transition group-hover:text-[#d8b56d]/20">
                    {number}
                  </span>

                </div>

                <div className="mt-20">

                  <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#d8b56d] transition-all duration-500 group-hover:w-20" />

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#d8b56d]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#102d25]/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#102d25]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#102d25]/60">
                Start Your Journey
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-[#102d25] sm:text-6xl lg:text-7xl">
                Your Future
                <span className="block italic">
                  Starts Here.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#102d25]/65 sm:text-base">
                Discover a thoughtfully planned residential destination and
                take the next step toward your future address.
              </p>

            </div>


            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#102d25] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#173f33]"
              >
                Contact Us
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-[#102d25]/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition hover:bg-[#102d25] hover:text-white"
              >
                Explore Process
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

    </div>
  );
}

export default About;