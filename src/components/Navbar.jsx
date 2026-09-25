import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
   { name: "Project", href: "/projects" },
    { name: "Why Jattari", href: "/Jattari" },
    { name: "Amenities", href: "/amenities" },
    { name: "Location", href: "/location" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 w-[94%] max-w-7x3">
        <div
          className="
            flex items-center justify-between
            rounded-2xl border border-white/15
            bg-[#102d25]/90 px-5 py-3
            shadow-2xl shadow-black/20
            backdrop-blur-xl
            md:px-7
          "
        >
          {/* ================= LOGO ================= */}
          <a
            href="/"
            className="group flex items-center gap-3"
          >
            {/* Logo Mark */}
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-[#c9a45c]/60
                bg-[#c9a45c]/10
                transition duration-300
                group-hover:border-[#c9a45c]
                group-hover:bg-[#c9a45c]/20
              "
            >
              <span className="font-serif text-xl font-semibold text-[#d8b56d]">
                JP
              </span>
            </div>

            {/* Brand Name */}
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg font-semibold tracking-[0.18em] text-white">
                JATTARI
              </h1>

              <p className="-mt-1 text-[9px] tracking-[0.38em] text-[#d8b56d]">
                PROPERTIES
              </p>
            </div>
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative py-2
                  text-[13px] font-medium
                  tracking-wide text-white/80
                  transition duration-300
                  hover:text-[#d8b56d]
                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[1px]
                  after:w-0
                  after:bg-[#d8b56d]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/contact"
              className="
                rounded-full
                border border-white/20
                px-5 py-2.5
                text-xs font-medium
                tracking-wide text-white
                transition duration-300
                hover:border-[#d8b56d]
                hover:text-[#d8b56d]
              "
            >
              Contact
            </a>

            <a
              href="/BookSitevisit"
              className="
                rounded-full
                bg-[#d8b56d]
                px-5 py-2.5
                text-xs font-semibold
                tracking-wide text-[#102d25]
                shadow-lg shadow-[#d8b56d]/10
                transition duration-300
                hover:-translate-y-0.5
                hover:bg-[#e4c580]
                hover:shadow-xl
              "
            >
              Book a Site Visit
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/15
              text-white transition
              hover:border-[#d8b56d]
              hover:text-[#d8b56d]
              lg:hidden
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            mt-2 overflow-hidden rounded-2xl
            border border-white/10
            bg-[#102d25]/95
            shadow-2xl shadow-black/30
            backdrop-blur-xl
            transition-all duration-300
            lg:hidden
            ${
              isMenuOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }
          `}
        >
          <div className="px-5 py-5">
            {/* Mobile Links */}
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    border-b border-white/10
                    py-4
                    text-sm font-medium
                    tracking-wide text-white/85
                    transition
                    hover:pl-2
                    hover:text-[#d8b56d]
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-full
                  border border-white/20
                  px-4 py-3
                  text-center text-xs font-medium
                  text-white
                  transition
                  hover:border-[#d8b56d]
                  hover:text-[#d8b56d]
                "
              >
                Contact
              </a>

              <a
                href="#site-visit"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-full
                  bg-[#d8b56d]
                  px-4 py-3
                  text-center text-xs font-semibold
                  text-[#102d25]
                  transition
                  hover:bg-[#e4c580]
                "
              >
                Site Visit
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;