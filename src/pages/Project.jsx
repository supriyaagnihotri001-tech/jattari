import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  const plotTypes = [
    {
      number: "01",
      title: "100 Sq. Yards",
      subtitle: "Compact Luxury",
      text: "A thoughtfully planned plot option for creating a comfortable and elegant home.",
    },
    {
      number: "02",
      title: "200 Sq. Yards",
      subtitle: "Spacious Living",
      text: "Designed for families looking for generous space and the freedom to create a larger residence.",
    },
    {
      number: "03",
      title: "300 Sq. Yards",
      subtitle: "Premium Residence",
      text: "A larger plot option for those looking to create an expansive and refined residential space.",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Precise Planning",
      text: "Thoughtful planning and execution with attention to every detail.",
    },
    {
      number: "02",
      title: "Timely Possession",
      text: "A development approach focused on committed and transparent timelines.",
    },
    {
      number: "03",
      title: "Modern Architecture",
      text: "Contemporary planning designed around comfort, functionality and lifestyle.",
    },
    {
      number: "04",
      title: "Strategic Location",
      text: "A well-connected location near major growth and infrastructure corridors.",
    },
  ];

  const locationPoints = [
    "Jewar Airport",
    "Yamuna Expressway",
    "Defence Corridor",
    "Film City",
    "Toy City",
    "Delhi NCR Connectivity",
  ];

  const amenities = [
    "24x7 Security",
    "Commercial Center",
    "Parks",
    "Water Bodies",
    "Gym",
    "Parking",
    "Wi-Fi Zone",
    "Cafe",
    "Restaurant",
    "Clubhouse",
    "Swimming Pool",
    "Kids Play Zone",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#071d17]">
        <img
          src="/Images/hero1.png"
          alt="Anugrah Homes Project"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071d17]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17] via-[#071d17]/75 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071d17] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d8b56d]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d8b56d]">
                01 / Our Projects
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
              Spaces Designed
              <span className="block italic text-[#d8b56d]">
                For Your Future.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Discover Anugrah Homes — a thoughtfully planned residential
              destination in Jattari, Aligarh, created around modern living,
              connectivity, comfort and long-term value.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-project"
                className="inline-flex items-center justify-center rounded-full bg-[#d8b56d] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition-all duration-300 hover:bg-white"
              >
                Explore Project
              </a>

              <a
                href="#plot-options"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#d8b56d] hover:text-[#d8b56d]"
              >
                View Plot Options
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 lg:flex">
          Scroll to explore
          <span className="h-px w-10 bg-white/30" />
        </div>
      </section>

      {/* =========================================================
          INTRO / FEATURED PROJECT
      ========================================================= */}
      <section
        id="featured-project"
        className="relative overflow-hidden bg-[#f5f1e8] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            {/* IMAGE */}
            <div className="relative lg:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/Images/hero2.png"
                  alt="Anugrah Homes residential development"
                  className="h-[480px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102d25]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                      Featured Development
                    </p>

                    <p className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                      Anugrah Homes
                    </p>
                  </div>

                  <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/30 text-white sm:flex">
                    ↗
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 right-5 rounded-2xl bg-[#102d25] px-6 py-5 shadow-2xl sm:right-8 sm:px-8 sm:py-6">
                <p className="font-serif text-3xl text-[#d8b56d]">
                  Jattari
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                  Aligarh, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* TEXT */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                02 / Featured Development
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                A Better Way
                <span className="block italic text-[#a07835]">
                  To Belong.
                </span>
              </h2>

              <p className="mt-8 text-sm leading-7 text-[#5f6d67] sm:text-base sm:leading-8">
                Anugrah Homes brings together thoughtfully planned residential
                plots, modern amenities and a connected lifestyle in Jattari,
                Aligarh.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#5f6d67] sm:text-base sm:leading-8">
                The development is planned around the needs of modern
                homeowners — offering space, convenience and a lifestyle
                surrounded by important growth corridors.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-5">
                <div className="border-t border-[#102d25]/15 pt-5">
                  <p className="font-serif text-3xl text-[#102d25]">
                    Premium
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7a847f]">
                    Residential Plots
                  </p>
                </div>

                <div className="border-t border-[#102d25]/15 pt-5">
                  <p className="font-serif text-3xl text-[#102d25]">
                    Connected
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7a847f]">
                    Location
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#102d25] transition hover:text-[#a07835]"
              >
                Schedule A Site Visit
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DEVELOPMENT FEATURES
      ========================================================= */}
      <section className="bg-[#17382f] py-20 sm:py-24 lg:py-32">
           {/* Background Image */}
           <img
               src="/Images/hero3.png"
                alt="Anugrah Homes Development"
                className="absolute inset-0 h-full w-full object-cover"
           />
         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                03 / Development
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl">
                Planned With
                <span className="block italic text-[#d8b56d]">
                  Purpose.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Every aspect of the development is approached with a focus on
                planning, functionality, architecture and location.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2">
                {features.map((item) => (
                  <div
                    key={item.number}
                    className="group min-h-[280px] bg-[#0d2821] p-7 transition duration-500 hover:bg-[#17352c] sm:p-9 lg:p-11"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-bold tracking-[0.25em] text-[#d8b56d]">
                        {item.number}
                      </span>

                      <span className="font-serif text-5xl text-white/5 transition group-hover:text-[#d8b56d]/15">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-16">
                      <h3 className="font-serif text-2xl text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/50">
                        {item.text}
                      </p>

                      <div className="mt-7 h-px w-10 bg-[#d8b56d] transition-all duration-500 group-hover:w-20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
         </div>
       </section>

      {/* =========================================================
          PLOT OPTIONS
      ========================================================= */}
      <section
        id="plot-options"
        className="bg-[#f5f1e8] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                04 / Plot Collection
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Find Your
                <span className="block italic text-[#a07835]">
                  Perfect Space.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6b746f] sm:text-base">
              Explore plot options designed for different home sizes,
              lifestyles and residential aspirations.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {plotTypes.map((plot) => (
              <div
                key={plot.number}
                className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#102d25] p-7 transition duration-500 hover:-translate-y-2 sm:p-9"
              >
                {/* Decorative circle */}
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-[#d8b56d]/10 transition duration-700 group-hover:scale-125" />

                <div className="relative flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#d8b56d]">
                    {plot.number}
                  </span>

                  <span className="font-serif text-6xl leading-none text-white/10">
                    {plot.number}
                  </span>
                </div>

                <div className="relative mt-28">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                    {plot.subtitle}
                  </p>

                  <h3 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">
                    {plot.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/50">
                    {plot.text}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Residential Plot
                    </span>

                    <span className="text-xl text-[#d8b56d] transition group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#7a847f]">
            Plot options shown here are based on the current official Anugrah
            Homes pricing page. Availability and pricing can change.
          </p>
        </div>
      </section>

      {/* =========================================================
          VISUAL / IMAGE SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071d17]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[500px] lg:min-h-[700px]">
            <img
              src="/Images/hero3.png"
              alt="Anugrah Homes lifestyle"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#071d17]/45" />

            <div className="absolute bottom-8 left-6 sm:left-10">
              <span className="rounded-full border border-white/20 bg-black/20 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Visual Tour
              </span>
            </div>
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                05 / The Lifestyle
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                More Space.
                <span className="block italic text-[#d8b56d]">
                  More Possibilities.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                From peaceful green spaces to everyday conveniences and
                recreational facilities, the project is planned around a
                comfortable and connected lifestyle.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
                <div>
                  <p className="font-serif text-3xl text-white sm:text-4xl">
                    01
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Community
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-white sm:text-4xl">
                    02
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Comfort
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-white sm:text-4xl">
                    03
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Connectivity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AMENITIES
      ========================================================= */}
      <section className="bg-[#f5f1e8] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                06 / Amenities
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                Everything
                <span className="block italic text-[#a07835]">
                  Within Reach.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#6b746f] sm:text-base sm:leading-8">
                A thoughtfully planned environment where everyday convenience,
                recreation and community spaces come together.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#102d25] transition hover:text-[#a07835]"
              >
                Schedule A Visit
                <span className="text-lg">→</span>
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {amenities.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-5 rounded-2xl border border-[#102d25]/10 bg-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#102d25] text-[9px] font-bold text-[#d8b56d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-serif text-xl text-[#102d25]">
                      {item}
                    </span>

                    <span className="ml-auto text-[#a07835] transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="bg-[#102d25] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                07 / Location
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Connected To
                <span className="block italic text-[#d8b56d]">
                  What Matters.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Anugrah Homes is positioned in Jattari, Aligarh, with access to
                important highways, infrastructure corridors and emerging
                development hubs.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5">
                {locationPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 border-t border-white/10 pt-4"
                  >
                    <span className="text-[9px] font-bold text-[#d8b56d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-white/70">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#17352c] p-3">
                <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#0b241d]">
                  {/* Decorative map */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-1/4 top-0 h-full w-px rotate-[20deg] bg-[#d8b56d]" />
                    <div className="absolute left-1/2 top-0 h-full w-px -rotate-[35deg] bg-[#d8b56d]" />
                    <div className="absolute left-0 top-1/2 h-px w-full rotate-[12deg] bg-[#d8b56d]" />
                    <div className="absolute left-0 top-1/3 h-px w-full -rotate-[20deg] bg-[#d8b56d]" />
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b56d]/40">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8b56d] text-[#102d25]">
                        ●
                      </div>
                    </div>

                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                      Project Location
                    </p>

                    <h3 className="mt-3 font-serif text-4xl text-white">
                      Jattari
                    </h3>

                    <p className="mt-2 text-sm text-white/50">
                      Aligarh, Uttar Pradesh
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Strategic Location
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Near Yamuna Expressway and major regional growth
                      corridors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MASTERPLAN / LAYOUT
      ========================================================= */}
      <section className="bg-[#f5f1e8] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
              08 / Project Details
            </span>

            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              See The Project
              <span className="block italic text-[#a07835]">
                In Detail.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#6b746f] sm:text-base">
              Explore the layout and location details before planning your
              site visit.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Layout */}
            <div className="group overflow-hidden rounded-[2rem] bg-[#102d25]">
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src="/Images/hero2.png"
                  alt="Anugrah Homes layout"
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#102d25]/55" />

                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                    01
                  </span>

                  <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                    Layout Plan
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                    Explore the planned arrangement and overall development
                    structure.
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex w-fit rounded-full border border-white/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#d8b56d] hover:text-[#d8b56d]"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Key plan */}
            <div className="group overflow-hidden rounded-[2rem] bg-[#17352c]">
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src="/Images/hero3.png"
                  alt="Anugrah Homes key plan"
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#102d25]/60" />

                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                    02
                  </span>

                  <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                    Location Plan
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                    Understand the project's connectivity with major regional
                    destinations.
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex w-fit rounded-full border border-white/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#d8b56d] hover:text-[#d8b56d]"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#d8b56d]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#102d25]/10" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#102d25]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#102d25]/60">
                Schedule A Visit
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#102d25] sm:text-6xl lg:text-7xl">
                Come See It.
                <span className="block italic">
                  Feel The Difference.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#102d25]/65 sm:text-base">
                Experience Anugrah Homes in person and explore the development,
                location and lifestyle for yourself.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#102d25] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#173f33]"
              >
                Book A Site Visit
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#102d25]/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition hover:bg-[#102d25] hover:text-white"
              >
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;