
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CalendarDays,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Car,
  UserRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us About You",
    text: "Share your basic details and preferred visit date.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "We Confirm",
    text: "Our team connects with you to coordinate your visit.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Visit The Site",
    text: "Explore the location, layout and surroundings in person.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Experience Anugrah",
    text: "Take your time, ask questions and understand the project.",
    icon: Car,
  },
];

function BookSiteVisit() {
  return (
       <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">

      <Navbar />

   <main className="bg-[#f5f1e8] text-[#102d25]">
      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src="/Images/hero2.png"
          alt="Book a Site Visit"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071d17]/100" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17]/95 via-[#102d25]/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 text-[#d8b56d]">
              <CalendarDays size={18} />
              <span className="text-xs uppercase tracking-[0.3em]">
                Personal Visit
              </span>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              See it.
              <span className="block text-[#d8b56d]">
                Feel it.
              </span>
              <span className="block">
                Experience it.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Book a site visit to explore Anugrah Homes in person and
              understand the project, location and lifestyle for yourself.
            </p>

          </div>
        </div>
      </section>

      {/* FORM + BENEFITS */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* FORM */}
          <div className="border border-[#d8b56d]/40 bg-[#eee7d8] p-7 sm:p-10 lg:p-12">

            <p className="text-xs uppercase tracking-[0.3em] text-[#a88343]">
              Reserve Your Visit
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Book your site visit.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Fill in your details and our team can coordinate the next
              steps with you.
            </p>

            <form className="mt-9 space-y-5">

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                  />
                </div>

              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    className="w-full border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                    Preferred Time
                  </label>

                  <select
                    className="w-full border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                  >
                    <option>Select time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                  Interested Plot Size
                </label>

                <select
                  className="w-full border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                >
                  <option>Select plot size</option>
                  <option>100 Sq. Yards</option>
                  <option>200 Sq. Yards</option>
                  <option>300 Sq. Yards</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#102d25] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#17382f]"
              >
                Request Site Visit
                <ArrowRight size={18} />
              </button>

            </form>
          </div>

          {/* SIDE */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
                Why Visit?
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Some things are
                <span className="block text-[#a88343]">
                  better experienced.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-gray-600">
                A site visit gives you the opportunity to understand the
                location, surroundings and project environment beyond a
                brochure or screen.
              </p>
            </div>

            <div className="mt-10 space-y-4">

              {[
                "Explore the project location",
                "Understand connectivity",
                "See the development in person",
                "Discuss your requirements",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#102d25]/10 pb-4"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#a88343]"
                  />

                  <span className="text-sm text-gray-600">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 bg-[#102d25] p-7 text-white sm:p-9">

              <MapPin className="text-[#d8b56d]" size={25} />

              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#d8b56d]">
                Visit Us
              </p>

              <p className="mt-3 font-serif text-2xl">
                Anugrah Homes
              </p>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Palwal Road, Jattari,
                <br />
                Aligarh, Uttar Pradesh – 202137
              </p>

              <a
                href="tel:+917678279151"
                className="mt-6 inline-flex items-center gap-3 text-sm text-[#d8b56d]"
              >
                <Phone size={17} />
                +91 7678279151
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#102d25] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
              02 / Simple Process
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
              From enquiry
              <span className="text-[#d8b56d]"> to experience.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="bg-[#102d25] p-7 sm:p-8"
                >
                  <div className="flex justify-between">
                    <span className="text-xs tracking-[0.25em] text-[#d8b56d]">
                      {step.number}
                    </span>

                    <Icon
                      size={25}
                      strokeWidth={1.2}
                      className="text-[#d8b56d]"
                    />
                  </div>

                  <h3 className="mt-12 font-serif text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {step.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-28">

        <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
          Ready When You Are
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Your next chapter could
          <span className="text-[#a88343]"> start here.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          Visit Anugrah Homes and discover the project in person.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-3 bg-[#102d25] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white"
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
    <Footer/>
    </div>
  );
}

export default BookSiteVisit;