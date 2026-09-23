import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden  text-white ">

      {/* =====================================================
          BACKGROUND DESIGN
      ===================================================== */}

      {/* Architectural background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0c1c17]/90" />

      {/* Gold glow - left */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7b56d]/10 blur-[100px]" />

      {/* Gold glow - right */}
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#d7b56d]/10 blur-[100px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full border border-[#d7b56d]/10" />

      <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[320px] w-[320px] rounded-full border border-[#d7b56d]/10" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full border border-[#d7b56d]/10" />


      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <section className="relative px-5 pb-14 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] border border-[#d7b56d]/30 bg-[#f2eee2] px-6 py-10 text-[#17251d] shadow-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            {/* CTA decorative gold circle */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#b79550]/20" />

            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#b79550]/20" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-px w-10 bg-[#a17b35]" />

                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8d6a2d]">
                    Your Journey Begins
                  </p>

                </div>

                <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  Find a Place
                  <span className="block italic text-[#8d6a2d]">
                    Worth Calling Home.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#17251d]/60 sm:text-base">
                  Explore Anugrah Homes and discover a thoughtfully planned
                  space where your future can take shape.
                </p>

              </div>


              {/* CTA Button */}
              <a
                href="#contact"
                className="
                  group relative inline-flex shrink-0 items-center gap-4
                  overflow-hidden rounded-full
                  bg-[#10251b]
                  px-7 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-white
                  transition duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:px-8
                "
              >

                <span className="relative z-10">
                  Book a Site Visit
                </span>

                <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="absolute inset-0 -translate-x-full bg-[#d7b56d] transition-transform duration-500 group-hover:translate-x-0" />

              </a>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <section className="relative border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">


            {/* =================================================
                BRAND
            ================================================= */}

            <div className="lg:col-span-4">

              {/* Logo */}
              <a
                href="#home"
                className="inline-flex items-center gap-4"
              >

                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    border border-[#d7b56d]/70
                    bg-[#d7b56d]/10
                    shadow-[0_0_30px_rgba(215,181,109,0.08)]
                  "
                >
                  <span className="font-serif text-2xl font-semibold text-[#d7b56d]">
                    JP
                  </span>
                </div>

                <div>

                  <h3 className="font-serif text-xl tracking-[0.18em] text-white">
                    JATTARI
                  </h3>

                  <p className="mt-1 text-[9px] tracking-[0.5em] text-[#d7b56d]">
                    PROPERTIES
                  </p>

                </div>

              </a>


              <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
                Thoughtfully planned residential spaces designed for
                peaceful living, modern comfort and a future you can
                build on.
              </p>


              {/* Gold line */}
              <div className="mt-7 flex items-center gap-3">

                <span className="h-px w-14 bg-[#d7b56d]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d7b56d]">
                  Build Your Future
                </span>

              </div>


              {/* Social Icons */}
              <div className="mt-8 flex gap-3">

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/55
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-[#d7b56d]
                    hover:bg-[#d7b56d]
                    hover:text-[#10251b]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </a>


                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/55
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-[#d7b56d]
                    hover:bg-[#d7b56d]
                    hover:text-[#10251b]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1z" />
                  </svg>
                </a>


                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/55
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-[#d7b56d]
                    hover:bg-[#d7b56d]
                    hover:text-[#10251b]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z" />
                  </svg>
                </a>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/917678279151"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/55
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-[#d7b56d]
                    hover:bg-[#d7b56d]
                    hover:text-[#10251b]
                  "
                >
                  <span className="text-sm font-bold">
                    WA
                  </span>
                </a>

              </div>

            </div>


            {/* =================================================
                EXPLORE
            ================================================= */}

            <div className="lg:col-span-2">

              <h4 className="mb-7 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7b56d]">
                Explore
              </h4>

              <ul className="space-y-4">

                {[
                  ["Home", "#home"],
                  ["About", "#project"],
                  ["The Project", "#project"],
                  ["Why Jattari", "#location"],
                  ["Amenities", "#amenities"],
                  ["Location", "#location"],
                ].map(([name, href]) => (
                  <li key={name}>

                    <a
                      href={href}
                      className="
                        group inline-flex items-center
                        text-sm text-white/50
                        transition duration-300
                        hover:text-white
                      "
                    >

                      <span className="mr-2 w-0 overflow-hidden text-[#d7b56d] transition-all duration-300 group-hover:w-4">
                        →
                      </span>

                      {name}

                    </a>

                  </li>
                ))}

              </ul>

            </div>


            {/* =================================================
                DISCOVER
            ================================================= */}

            <div className="lg:col-span-2">

              <h4 className="mb-7 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7b56d]">
                Discover
              </h4>

              <ul className="space-y-4">

                {[
                  ["Plot Sizes", "#plot-sizes"],
                  ["Master Plan", "#project"],
                  ["Gallery", "#project"],
                  ["Testimonials", "#project"],
                  ["FAQ", "#contact"],
                  ["Site Visit", "#contact"],
                ].map(([name, href]) => (
                  <li key={name}>

                    <a
                      href={href}
                      className="
                        group inline-flex items-center
                        text-sm text-white/50
                        transition duration-300
                        hover:text-white
                      "
                    >

                      <span className="mr-2 w-0 overflow-hidden text-[#d7b56d] transition-all duration-300 group-hover:w-4">
                        →
                      </span>

                      {name}

                    </a>

                  </li>
                ))}

              </ul>

            </div>


            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="lg:col-span-4">

              <h4 className="mb-7 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7b56d]">
                Contact
              </h4>


              <div className="space-y-6">

                {/* Address */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7b56d]/20 bg-[#d7b56d]/5 text-[#d7b56d]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                      />

                      <circle
                        cx="12"
                        cy="9"
                        r="2.2"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Anugrah Homes, Palwal Road
                      <br />
                      Jattari, Aligarh, UP – 202137
                    </p>

                  </div>

                </div>


                {/* Email */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7b56d]/20 bg-[#d7b56d]/5 text-[#d7b56d]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect
                        width="20"
                        height="16"
                        x="2"
                        y="4"
                        rx="2"
                      />

                      <path d="m3 6 9 6 9-6" />
                    </svg>

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>

                    <a
                      href="mailto:info@anugrahhomes.com"
                      className="mt-1 block text-sm text-white/60 transition hover:text-[#d7b56d]"
                    >
                      info@anugrahhomes.com
                    </a>

                  </div>

                </div>


                {/* Phone */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7b56d]/20 bg-[#d7b56d]/5 text-[#d7b56d]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Call Us
                    </p>

                    <div className="mt-1 flex flex-col gap-1">

                      <a
                        href="tel:+917678279151"
                        className="text-sm text-white/60 transition hover:text-[#d7b56d]"
                      >
                        +91 7678279151
                      </a>

                      <a
                        href="tel:+919115253545"
                        className="text-sm text-white/60 transition hover:text-[#d7b56d]"
                      >
                        +91 9115253545
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div className="mt-16 border-t border-white/10 pt-10">

            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">

              <div>

                <p className="font-serif text-xl text-white">
                  Stay connected.
                </p>

                <p className="mt-1 text-xs leading-6 text-white/35">
                  Receive project updates and property insights.
                </p>

              </div>


              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-lg"
              >

                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    min-w-0 flex-1
                    rounded-l-full
                    border border-white/10
                    bg-white/[0.04]
                    px-5 py-3.5
                    text-sm text-white
                    outline-none
                    placeholder:text-white/25
                    transition
                    focus:border-[#d7b56d]/60
                  "
                />

                <button
                  type="submit"
                  className="
                    rounded-r-full
                    bg-[#d7b56d]
                    px-6 py-3.5
                    text-xs font-bold uppercase tracking-wider
                    text-[#10251b]
                    transition duration-300
                    hover:bg-[#e5c98d]
                  "
                >
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="relative border-t border-white/10 bg-[#07140f]/80">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

          <p className="text-white/30">
            © {new Date().getFullYear()} Anugrah Homes.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">

            <a
              href="#privacy"
              className="text-white/30 transition hover:text-[#d7b56d]"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-white/30 transition hover:text-[#d7b56d]"
            >
              Terms & Conditions
            </a>

            <a
              href="#disclaimer"
              className="text-white/30 transition hover:text-[#d7b56d]"
            >
              Disclaimer
            </a>

          </div>

          <p className="text-white/20">
            Anugrah Homes · Jattari
          </p>

        </div>

      </div>


      {/* =====================================================
          FLOATING ACTION BUTTONS
      ===================================================== */}

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

        {/* WhatsApp */}
        <a
          href="https://wa.me/917678279151"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="
            group flex h-12 w-12 items-center justify-center
            rounded-full
            border border-[#d7b56d]/30
            bg-[#10251b]
            text-[#d7b56d]
            shadow-2xl
            transition duration-300
            hover:-translate-y-1
            hover:bg-[#d7b56d]
            hover:text-[#10251b]
          "
        >
          <span className="text-xs font-bold">
            WA
          </span>
        </a>


        {/* Call */}
        <a
          href="tel:+917678279151"
          aria-label="Call"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            bg-[#d7b56d]
            text-[#10251b]
            shadow-2xl
            transition duration-300
            hover:-translate-y-1
            hover:bg-[#e5c98d]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"
            />
          </svg>
        </a>

      </div>

    </footer>
  );
}

export default Footer;