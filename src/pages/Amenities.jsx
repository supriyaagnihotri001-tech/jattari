import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  ShieldCheck,
  Trees,
  Waves,
  Dumbbell,
  ShoppingBag,
  HeartPulse,
  Cpu,
  Building2,
  Baby,
  Footprints,
  ArrowRight,
} from "lucide-react";

const amenities = [
  {
    number: "01",
    title: "24x7 Security",
    description:
      "Round-the-clock security designed to provide peace of mind for you and your family.",
    icon: ShieldCheck,
    image: "/Images/hero1.png",
  },
  {
    number: "02",
    title: "Landscaped Parks",
    description:
      "Beautiful green spaces created for peaceful mornings, relaxation and recreation.",
    icon: Trees,
    image: "/Images/hero2.png",
  },
  {
    number: "03",
    title: "Water Bodies",
    description:
      "Serene water features that add a calm and refreshing character to the community.",
    icon: Waves,
    image: "/Images/hero3.png",
  },
  {
    number: "04",
    title: "Modern Gym",
    description:
      "A dedicated fitness environment for an active and healthy lifestyle.",
    icon: Dumbbell,
    image: "/Images/hero1.png",
  },
  {
    number: "05",
    title: "Commercial Center",
    description:
      "Convenient commercial spaces designed to keep everyday essentials within reach.",
    icon: ShoppingBag,
    image: "/Images/hero2.png",
  },
  {
    number: "06",
    title: "Medical Care",
    description:
      "Medical support and emergency assistance designed around community convenience.",
    icon: HeartPulse,
    image: "/Images/hero3.png",
  },
  {
    number: "07",
    title: "Technology Assistance",
    description:
      "Smart living support and technology-focused assistance for a connected lifestyle.",
    icon: Cpu,
    image: "/Images/hero1.png",
  },
  {
    number: "08",
    title: "Clubhouse",
    description:
      "A community space for gatherings, indoor activities and social interaction.",
    icon: Building2,
    image: "/Images/hero2.png",
  },
  {
    number: "09",
    title: "Swimming Pool",
    description:
      "A leisure-focused space for relaxation and recreation.",
    icon: Waves,
    image: "/Images/hero3.png",
  },
  {
    number: "10",
    title: "Kids Play Zone",
    description:
      "A safe and engaging environment designed especially for children.",
    icon: Baby,
    image: "/Images/hero1.png",
  },
  {
    number: "11",
    title: "Walking & Jogging Track",
    description:
      "Dedicated spaces for morning walks, evening jogs and everyday movement.",
    icon: Footprints,
    image: "/Images/hero2.png",
  },
];

function Amenities() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">

      <Navbar />

      <main>

        {/* HERO */}
        <section className="relative min-h-[78vh] overflow-hidden">
          <img
            src="/Images/hero2.png"
            alt="Anugrah Homes Amenities"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#071d17]/" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d17]/95 via-[#102d25]/70 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
            <div className="max-w-3xl">

              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d8b56d]">
                Anugrah Homes
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                Luxury is
                <span className="block text-[#d8b56d]">
                  in the details.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Discover thoughtfully planned amenities designed to bring
                comfort, wellness, recreation and community closer to home.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/Booksitevisit"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#d8b56d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#102d25] transition hover:bg-[#efd99f]"
                >
                  Book a Site Visit
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center  rounded-2xl justify-center border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Talk to Us
                </Link>

              </div>

            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
                01 / Lifestyle
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Everything you need,
                <span className="block text-[#8c6a34]">
                  closer to you.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Anugrah Homes brings together spaces for wellness, recreation,
              convenience and community. Every amenity is planned to support
              a comfortable and connected lifestyle.
            </p>

          </div>
        </section>

        {/* AMENITIES GRID */}
        <section className="bg-[#102d25] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                  02 / Amenities
                </p>

                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Designed around
                  <span className="text-[#d8b56d]">
                    {" "}your lifestyle.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/60">
                From peaceful green spaces to fitness, recreation and
                everyday convenience, experience a community created for
                modern living.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/80 sm:grid-cols-2 lg:grid-cols-3">

              {amenities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative min-h-[380px] overflow-hidden bg-[#102d25]/10 p-7 transition duration-500 hover:bg-[#102d25]/40 sm:p-9"
                  >

                    {/* CARD IMAGE */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover  transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                    />

                    {/* LIGHT OVERLAY */}
                    <div className="absolute inset-0 bg-[#102d25]/20 transition duration-500 group-hover:bg-[#102d25]/20" />

                    {/* CARD CONTENT */}
                    <div className="relative z-10">

                      <div className="flex items-start justify-between">

                        <span className="text-xs tracking-[0.2em] text-[#d8b56d]">
                          {item.number}
                        </span>

                        <Icon
                          size={28}
                          strokeWidth={1.2}
                          className="text-[#d8b56d] transition duration-500 group-hover:scale-110"
                        />

                      </div>

                      <h3 className="mt-14 font-serif text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/75">
                        {item.description}
                      </p>

                      <div className="mt-7 h-px w-10 bg-[#d8b56d] transition-all duration-500 group-hover:w-full" />

                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* VISUAL SECTION */}
        <section className="relative overflow-hidden">
          <img
            src="/Images/hero3.png"
            alt="Anugrah Homes lifestyle"
            className="h-[600px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#071d17]/" />

          <div className="absolute inset-0 flex items-center px-6 sm:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-xl">

                <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                  03 / The Experience
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-6xl">
                  More than a plot.
                  <span className="block text-[#d8b56d]">
                    A way of living.
                  </span>
                </h2>

                <p className="mt-7 text-base leading-8 text-white/70">
                  Experience a thoughtfully planned environment where
                  everyday comfort meets open spaces, recreation and
                  community.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl border border-[#d8b56d]/40 bg-[#eee7d8] px-7 py-14 text-center sm:px-12 lg:py-20">

            <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
              Experience It Yourself
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
              See the lifestyle
              <span className="text-[#a88343]">
                {" "}in person.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Schedule a site visit and explore Anugrah Homes, its location
              and the planned lifestyle spaces.
            </p>

            <Link
              to="/BookSiteVisit"
              className="mt-8 inline-flex items-center rounded-2xl gap-3 bg-[#102d25] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#17382f]"
            >
              Schedule Site Visit
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Amenities;