
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock3,
  Send,
} from "lucide-react";

function Contact() {
  return (
     <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#102d25]">

      <Navbar />

   <main className="bg-[#f5f1e8] text-[#102d25]">
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/Images/hero1.png"
          alt="Contact Anugrah Homes"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071d17]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d17]/95 via-[#102d25]/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <p className="text-sm uppercase tracking-[0.35em] text-[#d8b56d]">
              Anugrah Homes
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Let's start
              <span className="block text-[#d8b56d]">
                a conversation.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Have a question about the project, location, plots or a site
              visit? Get in touch with our team.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* INFO */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a88343]">
              01 / Get In Touch
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              We would love to
              <span className="block text-[#a88343]">
                hear from you.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
              Connect with Anugrah Homes for project information,
              personalised assistance and site visit enquiries.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#102d25] text-[#d8b56d]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Anugrah Homes, Palwal Road,
                    <br />
                    Jattari, Aligarh, UP – 202137
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#102d25] text-[#d8b56d]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold">Email Us</p>
                  <a
                    href="mailto:info@anugrahhomes.com"
                    className="mt-2 block text-sm text-gray-500 hover:text-[#a88343]"
                  >
                    info@anugrahhomes.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#102d25] text-[#d8b56d]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold">Call Us</p>

                  <a
                    href="tel:+917678279151"
                    className="mt-2 block text-sm text-gray-500 hover:text-[#a88343]"
                  >
                    +91 7678279151
                  </a>

                  <a
                    href="tel:+919115253545"
                    className="mt-1 block text-sm text-gray-500 hover:text-[#a88343]"
                  >
                    +91 9115253545
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#102d25] text-[#d8b56d]">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="font-semibold">Site Visit</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Schedule a convenient visit with our team.
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/book-site-visit"
              className="mt-10 inline-flex items-center gap-3 bg-[#d8b56d] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#102d25]"
            >
              Book Site Visit
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* FORM */}
          <div className="border border-[#d8b56d]/40 bg-[#eee7d8] p-7 sm:p-10 lg:p-12">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#a88343]">
                Send Us A Message
              </p>

              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                Tell us what you need.
              </h3>
            </div>

            <form className="space-y-5">

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#102d25]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 bg-white/70 px-4 py-4 text-sm outline-none transition focus:border-[#a88343]"
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
                    className="w-full border border-gray-300 bg-white/70 px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 bg-white/70 px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider">
                  Your Message
                </label>

                <textarea
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full resize-none border border-gray-300 bg-white/70 px-4 py-4 text-sm outline-none focus:border-[#a88343]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#102d25] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#17382f]"
              >
                Send Message
                <Send size={17} />
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* WHATSAPP / CALL */}
      <section className="bg-[#102d25] px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
              Need A Quick Answer?
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Connect directly with us.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <a
              href="tel:+917678279151"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-sm font-semibold uppercase tracking-wider transition hover:bg-white/10"
            >
              <Phone size={18} />
              Call Us
            </a>

            <a
              href="https://wa.me/917678279151"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#d8b56d] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#102d25]"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
    <Footer/>
    </div>
  );
}

export default Contact;