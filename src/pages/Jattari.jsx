import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jattari() {
  const growthHubs = [
    {
      number: "01",
      title: "Jewar Airport",
      text: "Access to Noida International Airport places the region within an important emerging connectivity corridor.",
    },
    {
      number: "02",
      title: "Yamuna Expressway",
      text: "Excellent road connectivity linking the region with Delhi, Noida and Greater Noida.",
    },
    {
      number: "03",
      title: "Defence Corridor",
      text: "The surrounding region benefits from proximity to the upcoming Defence Corridor and related development.",
    },
    {
      number: "04",
      title: "Film & Toy City",
      text: "Major planned development hubs around the region are creating new opportunities and infrastructure.",
    },
  ];

  const connectivity = [
    "Delhi",
    "Ghaziabad",
    "Greater Noida",
    "Noida",
    "Aligarh",
    "Mathura",
  ];

  const advantages = [
    {
      number: "01",
      title: "Strategic Location",
      text: "Jattari offers access to important regional highways and emerging development corridors.",
    },
    {
      number: "02",
      title: "Growing Infrastructure",
      text: "Major infrastructure projects around Jewar and the Yamuna Expressway are transforming the region.",
    },
    {
      number: "03",
      title: "Future Connectivity",
      text: "The location connects residential living with major airports, highways and employment hubs.",
    },
    {
      number: "04",
      title: "Peaceful Surroundings",
      text: "Enjoy a quieter residential environment while staying connected to important urban destinations.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#071d17]">
        <img
          src="/Images/hero2.png"
          alt="Jattari Aligarh"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071d17]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17] via-[#071d17]/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071d17] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-end px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d8b56d]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d8b56d]">
                01 / Discover Jattari
              </span>
            </div>

            <h1 className="mt-6 font-serif text-6xl leading-[0.88] tracking-[-0.05em] text-white sm:text-7xl lg:text-9xl">
              Where
              <span className="block italic text-[#d8b56d]">
                Growth Begins.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Discover Jattari, Aligarh — a location positioned around
              emerging infrastructure, major connectivity corridors and a
              growing ecosystem near Jewar Airport.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#location"
                className="inline-flex items-center justify-center rounded-full bg-[#d8b56d] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition-all duration-300 hover:bg-white"
              >
                Explore Location
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#d8b56d] hover:text-[#d8b56d]"
              >
                Plan A Site Visit
              </a>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 lg:flex">
          Scroll to discover
          <span className="h-px w-10 bg-white/30" />
        </div>
      </section>

      {/* ================= LOCATION INTRO ================= */}
      <section
        id="location"
        className="relative overflow-hidden bg-[#f5f1e8] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">

            <div className="relative lg:col-span-6">

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/Images/hero3.png"
                  alt="Jattari lifestyle"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[620px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102d25]/60 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <span className="rounded-full border border-white/20 bg-[#102d25]/50 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    Jattari · Aligarh
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-7 right-5 rounded-2xl bg-[#102d25] px-6 py-5 shadow-2xl sm:right-8 sm:px-8 sm:py-6">
                <p className="font-serif text-3xl text-[#d8b56d]">
                  Jattari
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Aligarh · UP
                </p>
              </div>

            </div>

            <div className="lg:col-span-6">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                02 / The Location
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                A Place
                <span className="block italic text-[#a07835]">
                  With Direction.
                </span>
              </h2>

              <p className="mt-8 text-sm leading-7 text-[#5f6d67] sm:text-base sm:leading-8">
                Jattari is located in Aligarh district along the Aligarh–Palwal
                Road. Anugrah Homes positions its residential development here
                around connectivity to major regional infrastructure and
                emerging growth destinations.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#5f6d67] sm:text-base sm:leading-8">
                The location combines a quieter residential environment with
                access to important routes connecting the wider Delhi-NCR and
                western Uttar Pradesh region.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-5">

                <div className="border-t border-[#102d25]/15 pt-5">
                  <p className="font-serif text-3xl">
                    Aligarh
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7a847f]">
                    District
                  </p>
                </div>

                <div className="border-t border-[#102d25]/15 pt-5">
                  <p className="font-serif text-3xl">
                    UP
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7a847f]">
                    Uttar Pradesh
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= LOCATION ADVANTAGE ================= */}
      <section className="bg-[#102d25] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-4">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                03 / Location Advantage
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl">
                Connected To
                <span className="block italic text-[#d8b56d]">
                  What Matters.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                The region is surrounded by major infrastructure and
                development initiatives that are changing the connectivity and
                economic landscape around Jattari.
              </p>

            </div>

            <div className="lg:col-span-8">

              <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2">

                {growthHubs.map((item) => (
                  <div
                    key={item.number}
                    className="group min-h-[300px] bg-[#17382f] p-7 transition duration-500 hover:bg-[#20473c] sm:p-9 lg:p-11"
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

                      <p className="mt-4 text-sm leading-7 text-white/55">
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

      {/* ================= CONNECTIVITY ================= */}
      <section className="relative overflow-hidden bg-[#f5f1e8] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

            <div className="relative order-2 lg:order-1">

              <div className="overflow-hidden rounded-[2rem] bg-[#102d25] p-3 shadow-2xl">

                <div className="relative min-h-[500px] overflow-hidden rounded-[1.5rem] bg-[#0b241d]">

                  <div className="absolute inset-0 opacity-25">

                    <div className="absolute left-[20%] top-[-10%] h-[130%] w-px rotate-[25deg] bg-[#d8b56d]" />

                    <div className="absolute left-[50%] top-[-10%] h-[130%] w-px -rotate-[35deg] bg-[#d8b56d]" />

                    <div className="absolute left-[-10%] top-[55%] h-px w-[130%] rotate-[12deg] bg-[#d8b56d]" />

                    <div className="absolute left-[-10%] top-[35%] h-px w-[130%] -rotate-[18deg] bg-[#d8b56d]" />

                    <div className="absolute left-[10%] top-[75%] h-px w-[120%] rotate-[28deg] bg-[#d8b56d]" />

                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d8b56d]/40">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d8b56d] text-[#102d25] shadow-[0_0_40px_rgba(216,181,109,0.25)]">
                        ●
                      </div>

                    </div>

                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
                      Anugrah Homes
                    </p>

                    <h3 className="mt-2 font-serif text-4xl text-white">
                      Jattari
                    </h3>

                    <p className="mt-2 text-sm text-white/45">
                      Aligarh, Uttar Pradesh
                    </p>

                  </div>

                  <div className="absolute left-6 top-8 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Delhi NCR
                  </div>

                  <div className="absolute right-6 top-20 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Jewar
                  </div>

                  <div className="absolute bottom-20 left-8 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Aligarh
                  </div>

                  <div className="absolute bottom-8 right-8 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Yamuna Expressway
                  </div>

                </div>

              </div>

            </div>

            <div className="order-1 lg:order-2">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                04 / Connectivity
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Close To
                <span className="block italic text-[#a07835]">
                  Every Direction.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#6b746f] sm:text-base sm:leading-8">
                Jattari's location provides access toward several important
                cities and regional destinations.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">

                {connectivity.map((city, index) => (
                  <div
                    key={city}
                    className="group flex items-center gap-4 rounded-2xl border border-[#102d25]/10 bg-white/50 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102d25] text-[8px] font-bold text-[#d8b56d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-serif text-lg">
                      {city}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= WHY JATTARI ================= */}
      <section className="relative overflow-hidden bg-[#071d17] py-20 sm:py-24 lg:py-32">

        <img
          src="/Images/hero1.png"
          alt="Why Jattari"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071d17]/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17] via-[#102d25]/90 to-[#071d17]/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
              05 / Why Jattari
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              A Location
              <span className="block italic text-[#d8b56d]">
                With Potential.
              </span>
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {advantages.map((item) => (
              <div
                key={item.number}
                className="group min-h-[330px] rounded-[2rem] border border-white/10 bg-[#102d25]/70 p-7 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-[#17382f]/80 sm:p-9"
              >

                <span className="text-xs font-bold tracking-[0.25em] text-[#d8b56d]">
                  {item.number}
                </span>

                <h3 className="mt-24 font-serif text-2xl text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-8 bg-[#d8b56d] transition-all duration-500 group-hover:w-16" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PROJECT CONNECTION ================= */}
      <section className="bg-[#f5f1e8] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-7">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                06 / Anugrah Homes
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Your Address
                <span className="block italic text-[#a07835]">
                  Starts Here.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#6b746f] sm:text-base sm:leading-8">
                Anugrah Homes is located in Jattari, Aligarh, offering
                residential plots within a region shaped by major connectivity
                and infrastructure development.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#102d25] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#17382f]"
                >
                  Explore Project
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#102d25]/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition hover:bg-[#102d25] hover:text-white"
                >
                  Book A Site Visit
                </a>

              </div>

            </div>

            <div className="lg:col-span-5">

              <div className="rounded-[2rem] bg-[#102d25] p-8 sm:p-10">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d8b56d]">
                  Project Address
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Anugrah Homes
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  Palwal Road,
                  <br />
                  Jattari, Aligarh,
                  <br />
                  Uttar Pradesh – 202137
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Contact
                  </p>

                  <p className="mt-3 text-sm text-white/70">
                    +91 7678279151
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    +91 9115253545
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#d8b56d]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#102d25]/10" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#102d25]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#102d25]/60">
                Experience Jattari
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#102d25] sm:text-6xl lg:text-7xl">
                See The Location.
                <span className="block italic">
                  Imagine The Future.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#102d25]/65 sm:text-base">
                Visit Anugrah Homes and experience the location, development
                and surroundings in person.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#102d25] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#17382f]"
              >
                Book A Site Visit
              </a>

              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#102d25]/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102d25] transition hover:bg-[#102d25] hover:text-white"
              >
                Explore Project
              </a>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jattari;