
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Plane,
  Route,
  Building2,
  MapPin,
  ArrowRight,
  Navigation,
  Globe2,
} from "lucide-react";

const locations = [
  {
    number: "01",
    title: "Noida International Airport",
    text: "A major connectivity landmark serving the rapidly developing region.",
    icon: Plane,
  },
  {
    number: "02",
    title: "Yamuna Expressway",
    text: "Direct access toward Delhi, Noida and Greater Noida through an important regional corridor.",
    icon: Route,
  },
  {
    number: "03",
    title: "Defence Corridor",
    text: "The surrounding region is connected with the upcoming Defence Corridor and wider infrastructure development.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Growth Hubs",
    text: "Access to planned development zones including Film City, Toy City and other emerging hubs.",
    icon: Globe2,
  },
];

function Location() {
  return (
     <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">

      <Navbar />
   <main className="bg-[#f5f1e8] text-[#102d25]">
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <img
          src="/Images/hero3.png"
          alt="Anugrah Homes Location"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071d17]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17]/95 via-[#102d25]/65 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3 text-[#d8b56d]">
              <MapPin size={18} />
              <span className="text-xs uppercase tracking-[0.3em]">
                Jattari · Aligarh · Uttar Pradesh
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Connected to
              <span className="block text-[#d8b56d]">
                what matters.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              A strategically positioned residential destination on
              Palwal Road, Jattari, with access to important regional
              infrastructure and development corridors.
            </p>

            <Link
              to="/book-site-visit"
              className="mt-10 inline-flex items-center gap-3 bg-[#d8b56d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#102d25]"
            >
              Explore the Location
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
              01 / Strategic Location
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Location shapes
              <span className="block text-[#a88343]">
                the experience.
              </span>
            </h2>
          </div>

          <div className="border-l border-[#d8b56d] pl-7">
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              Anugrah Homes is located in Jattari, Aligarh, on Palwal Road.
              Its location is presented around access to major highways,
              airport connectivity and emerging development corridors.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <Navigation className="mt-1 text-[#a88343]" size={22} />

              <div>
                <p className="font-semibold">Project Address</p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Anugrah Homes, Palwal Road,
                  <br />
                  Jattari, Aligarh, Uttar Pradesh – 202137
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONNECTIVITY */}
      <section className="bg-[#102d25] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
              02 / Connectivity
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
              A location with
              <span className="text-[#d8b56d]"> direction.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-white/60">
              Explore the key connectivity and development advantages
              surrounding Anugrah Homes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {locations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#d8b56d]/50 hover:bg-white/[0.06] sm:p-10"
                >
                  <div className="flex justify-between">
                    <span className="text-xs tracking-[0.25em] text-[#d8b56d]">
                      {item.number}
                    </span>

                    <Icon
                      size={30}
                      strokeWidth={1.2}
                      className="text-[#d8b56d]"
                    />
                  </div>

                  <h3 className="mt-12 font-serif text-2xl sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* MAP STYLE SECTION */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
                03 / The Address
              </p>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                Jattari, Aligarh
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              A peaceful residential setting with access to important
              regional destinations and infrastructure.
            </p>
          </div>

          <div className="relative overflow-hidden border border-[#d8b56d]/40 bg-[#17382f]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-[15%] top-[20%] h-px w-[70%] rotate-[18deg] bg-[#d8b56d]" />
              <div className="absolute left-[5%] top-[55%] h-px w-[90%] -rotate-[12deg] bg-[#d8b56d]" />
              <div className="absolute left-[35%] top-[5%] h-[90%] w-px rotate-[22deg] bg-[#d8b56d]" />
            </div>

            <div className="relative flex min-h-[480px] items-center justify-center p-8">
              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b56d] bg-[#102d25]">
                  <MapPin className="text-[#d8b56d]" size={34} />
                </div>

                <p className="mt-7 text-xs uppercase tracking-[0.3em] text-[#d8b56d]">
                  You Are Here
                </p>

                <h3 className="mt-3 font-serif text-4xl text-white">
                  Anugrah Homes
                </h3>

                <p className="mt-3 text-white/60">
                  Jattari · Aligarh · Uttar Pradesh
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e9e1d2] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
            Come See The Difference
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
            The best way to understand
            <span className="block text-[#a88343]">
              the location is to experience it.
            </span>
          </h2>

          <Link
            to="/book-site-visit"
            className="mt-9 inline-flex items-center gap-3 bg-[#102d25] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white"
          >
            Book a Site Visit
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
    <Footer/>
    </div>
  );
}

export default Location;