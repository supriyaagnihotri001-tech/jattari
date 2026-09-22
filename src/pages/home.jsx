import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [plotSlide, setPlotSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [galleryImage, setGalleryImage] = useState(null);

  const heroSlides = [
    {
      image:
        "/Images/hero1.png",
      eyebrow: "PREMIUM RESIDENTIAL PLOTS",
      title: "Your Dream",
      accent: "Home Awaits",
      description:
        "Modern living, prime location and a future that grows with you. Discover premium residential plots in Jattari, Aligarh near Jewar Airport.",
    },
    {
      image:
        "/Images/hero2.png",
      eyebrow: "JATTARI · ALIGARH",
      title: "A Better",
      accent: "Way To Live",
      description:
        "Thoughtfully planned residential spaces with connectivity, community and modern amenities.",
    },
    {
      image:
        "/Images/hero3.png",
      eyebrow: "NEAR JEWAR AIRPORT",
      title: "Own Your",
      accent: "Future Address",
      description:
        "Explore residential plots positioned close to major connectivity and development corridors.",
    },
  ];

  const plots = [
    {
      size: "100",
      unit: "Sq. Yards",
      price: "₹52.5 Lakh",
      title: "Compact Luxury",
      description:
        "A practical plot size for creating a thoughtfully planned residence.",
      image:
        "/Images/plot1.png",
    },
    {
      size: "200",
      unit: "Sq. Yards",
      price: "₹105 Lakh",
      title: "Spacious Living",
      description:
        "More room for a spacious home, garden and comfortable family living.",
      image:
        "/Images/plot2.png",
    },
    {
      size: "300",
      unit: "Sq. Yards",
      price: "₹157.5 Lakh",
      title: "Luxury Residence",
      description:
        "A larger plot option designed for a substantial luxury residence.",
      image:
        "/Images/plot3.png",
    },
  ];

 const amenities = [
  ["01", "24x7 Security", "Round-the-clock security", "/Images/plot1.png"],
  ["02", "Commercial Center", "Everyday convenience", "/Images/plot2.png"],
  ["03", "Parks", "Landscaped green spaces", "/Images/plot3.png"],
  ["04", "Water Bodies", "Calm community spaces", "/Images/plot1.png"],
  ["05", "Gym", "Fitness and wellness", "/Images/plot2.png"],
  ["06", "Parking", "Convenient parking", "/Images/plot3.png"],
  ["07", "Wi-Fi Zone", "Connected community", "/Images/plot1.png"],
  ["08", "Cafe", "Relax and connect", "/Images/plot2.png"],
  ["09", "Restaurant", "Dining within reach", "/Images/plot3.png"],
  ["10", "Clubhouse", "Community gathering", "/Images/plot2.png"],
  ["11", "Swimming Pool", "Leisure and recreation", "/Images/plot1.png"],
  ["12", "Kids Play Zone", "Family-friendly spaces", "/Images/plot2.png"],
];

  const gallery = [
    {
      title: "The Avenue",
      image:
        "/Images/Avenue.png",
    },
    {
      title: "The Community",
      image:
        "/Images/Landscape.png",
    },
    {
      title: "The Landscape",
      image:
        "/Images/Landscape.png",
    },
    {
      title: "The Approach",
      image:
        "/Images/Aproach.png",
    },
  ];

  const testimonials = [
    {
      name: "Ankur Sharma",
      text:
        "Best place to Invest. Near to Jewar Airport, Defence corridor, film city. Value for money plots. Very Good location and Community.",
    },
    {
      name: "Ashavani Dikshit",
      text:
        "I have purchased a 200 sq. yard plot because this company's documents are complete. I am satisfied with their documents and services.",
    },
    {
      name: "Amita Singh",
      text:
        "I've booked 200 sqyrd plot at Anugrah Homes, very prime location for Investment well connected to Jewar. Lots of support from sales team.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((previous) => (previous + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide(
        (previous) => (previous + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextHero = () => {
    setHeroSlide((previous) => (previous + 1) % heroSlides.length);
  };

  const previousHero = () => {
    setHeroSlide(
      (previous) =>
        (previous - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextPlot = () => {
    setPlotSlide((previous) => (previous + 1) % plots.length);
  };

  const previousPlot = () => {
    setPlotSlide(
      (previous) => (previous - 1 + plots.length) % plots.length
    );
  };

  const nextTestimonial = () => {
    setTestimonialSlide(
      (previous) => (previous + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setTestimonialSlide(
      (previous) =>
        (previous - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e7] text-[#10251e]">

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative min-h-[100svh] overflow-hidden bg-[#061d17] text-white"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              heroSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Anugrah Homes"
              className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
                heroSlide === index ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#031710]/95 via-[#031710]/65 to-[#031710]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031710] via-transparent to-black/20" />

        <Navbar />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-85px)] w-[calc(100%-28px)] max-w-[1400px] items-center pb-40 pt-14 sm:w-[calc(100%-48px)] lg:min-h-[calc(100svh-95px)]">

          <div className="grid w-full gap-12 lg:grid-cols-[1fr_350px] lg:items-center xl:grid-cols-[1fr_370px]">

            <div
              key={heroSlide}
              className="max-w-[720px] animate-[heroContent_.8s_ease]"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#dcb66a]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#dcb66a] sm:text-[10px]">
                  {heroSlides[heroSlide].eyebrow}
                </span>
              </div>

              <h1 className="mt-6 font-serif text-[3.5rem] leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
                {heroSlides[heroSlide].title}

                <span className="block pl-4 italic text-[#dcb66a] sm:pl-10">
                  {heroSlides[heroSlide].accent}
                </span>
              </h1>

              <p className="mt-7 max-w-[570px] text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                {heroSlides[heroSlide].description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setPopupOpen(true)}
                  className="rounded-full bg-[#dcb66a] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.15em] text-[#10251e] transition hover:-translate-y-1 hover:bg-white"
                >
                  Explore Project →
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Add your Anugrah Homes project video here.")
                  }
                  className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[10px] text-white backdrop-blur-md transition hover:border-[#dcb66a]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30">
                    ▶
                  </span>
                  Watch Video
                </button>
              </div>
            </div>

            {/* PROPERTY SEARCH */}

            <div className="w-full max-w-[370px] rounded-2xl bg-[#f7f5ef]/95 p-5 text-[#10251e] shadow-2xl backdrop-blur-xl sm:p-6 lg:justify-self-end">

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#9a7433]">
                PROPERTY SEARCH
              </span>

              <h2 className="mt-2 font-serif text-3xl">
                Find Your Plot
              </h2>

              <p className="mt-1 text-[10px] text-black/45">
                Choose your preferred plot and location.
              </p>

              <div className="mt-5 grid grid-cols-2 rounded-full bg-[#e8e6dd] p-1">
                <button
                  type="button"
                  className="rounded-full bg-[#0a3427] py-2.5 text-[10px] font-bold text-white"
                >
                  Buy
                </button>

                <button
                  type="button"
                  className="rounded-full py-2.5 text-[10px] text-black/50"
                >
                  Rent
                </button>
              </div>

              <label className="mt-4 block">
                <span className="text-[9px] text-black/45">
                  Location
                </span>

                <select className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-3 text-xs outline-none focus:border-[#b58b43]">
                  <option>Jattari, Aligarh</option>
                  <option>Palwal Road</option>
                </select>
              </label>

              <label className="mt-3 block">
                <span className="text-[9px] text-black/45">
                  Plot Size
                </span>

                <select className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-3 text-xs outline-none focus:border-[#b58b43]">
                  <option>100 Sq. Yd.</option>
                  <option>200 Sq. Yd.</option>
                  <option>300 Sq. Yd.</option>
                </select>
              </label>

              <label className="mt-3 block">
                <span className="text-[9px] text-black/45">
                  Budget Range
                </span>

                <select className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-3 text-xs outline-none focus:border-[#b58b43]">
                  <option>₹10 Lakh - ₹50 Lakh</option>
                  <option>₹50 Lakh - ₹1 Crore</option>
                  <option>₹1 Crore+</option>
                </select>
              </label>

              <button
                type="button"
                onClick={() => setPopupOpen(true)}
                className="mt-5 w-full rounded-lg bg-[#0a3427] py-4 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#dcb66a] hover:text-[#10251e]"
              >
                Search Property →
              </button>
            </div>
          </div>
        </div>

        {/* HERO BOTTOM BAR */}

        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#031c15]/90 backdrop-blur-xl">

          <div className="mx-auto flex max-w-[1400px] flex-col sm:flex-row sm:items-center">

            <div className="grid flex-1 grid-cols-2 sm:grid-cols-4">
              {[
                ["⌖", "Jattari", "Aligarh"],
                ["✈", "10 Min", "Jewar Airport"],
                ["◇", "Yamuna Expressway", "Connectivity"],
                ["◉", "24×7", "Security"],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="flex items-center gap-3 border-r border-white/10 px-4 py-4 sm:px-5 lg:py-5"
                >
                  <span className="text-xl text-[#dcb66a]">
                    {icon}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold text-white">
                      {title}
                    </p>

                    <p className="mt-1 text-[8px] text-white/45">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 px-5 py-3">

              <button
                type="button"
                onClick={previousHero}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#dcb66a] hover:text-[#dcb66a]"
              >
                ←
              </button>

              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setHeroSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1 transition-all ${
                    heroSlide === index
                      ? "w-8 bg-[#dcb66a]"
                      : "w-3 bg-white/25"
                  }`}
                />
              ))}

              <button
                type="button"
                onClick={nextHero}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#dcb66a] hover:text-[#dcb66a]"
              >
                →
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-center">

          <div
              className="lg:col-span-5 bg-cover bg-center bg-no-repeat w-full h-[500px]"
              style={{ backgroundImage: "url('/Images/hero1.png')" }}
             >
             <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
              01 / About Anugrah
             </span>

             <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              More Than Plots,

              <span className="block italic text-[#a07835]">
                A Lifestyle.
              </span>
             </h2>
          </div>

          <div className="lg:col-span-7">

            <p className="max-w-3xl text-base leading-8 text-black/55">
              Anugrah Homes is positioned as a premium residential plotted
              development in Jattari, Aligarh, combining peaceful
              surroundings with modern amenities and connectivity.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-black/45">
              The project highlights access to the Yamuna Expressway,
              Jewar Airport, Defence Corridor and other regional
              development hubs.
            </p>

            <button
              type="button"
              onClick={() => setPopupOpen(true)}
              className="mt-8 rounded-full bg-[#0a3427] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:bg-[#dcb66a] hover:text-[#10251e]"
            >
              Discover Anugrah →
            </button>

          </div>
        </div>
      </section>

      {/* ================= DIFFERENCE ================= */}

        <section
          id="projects"
           className="bg-[#0a3427] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-32"
           >
         <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#dcb66a]">
                02 / The Difference
              </span>

              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Designed around

                <span className="block italic text-[#dcb66a]">
                  what matters.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              Location, planning, amenities and customer support come
              together to create a complete property experience.
            </p>

          </div>

         <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
  {[
    [
      "01",
      "Prime Location",
      "Near Yamuna Expressway, Jewar Airport and regional development corridors.",
      "/Images/hero3.png",
    ],
    [
      "02",
      "Legally Verified",
      "The project highlights transparent documentation and documentation support.",
      "/Images/hero2.png",
    ],
    [
      "03",
      "Modern Amenities",
      "Parks, gym, security, water bodies and community facilities.",
      "/Images/hero1.png",
    ],
    [
      "04",
      "Well Planned",
      "Thoughtful layouts with planned infrastructure and residential spaces.",
      "/Images/plot2.png",
    ],
    [
      "05",
      "Customer First",
      "Site visits, documentation assistance and support through the property journey.",
      "/Images/plot1.png",
    ],
    [
      "06",
      "Connected Living",
      "Connectivity toward Delhi, Ghaziabad, Greater Noida and nearby corridors.",
      "/Images/plot3.png",
    ],
  ].map(([number, title, description, image]) => (
    <div
      key={number}
      className="group relative min-h-[330px] overflow-hidden bg-[#102d25]"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071d17]/75 transition duration-500 group-hover:bg-[#071d17]/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071d17] via-[#102d25]/30 to-transparent" />

      {/* Card Content */}
      <div className="relative z-10 flex min-h-[330px] flex-col justify-between p-7 sm:p-8 lg:p-9">
        
        {/* Number */}
        <div className="flex items-start justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d8b56d]">
            {number}
          </span>

          <span className="font-serif text-5xl leading-none text-white/10 transition duration-500 group-hover:text-[#d8b56d]/20">
            {number}
          </span>
        </div>

        {/* Bottom Content */}
        <div>
          <div className="mb-5 h-px w-10 bg-[#d8b56d] transition-all duration-500 group-hover:w-20" />

          <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b56d] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Discover More

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
            </div>
      </section>

      {/* ================= PLOTS ================= */}

      <section
        id="price"
        className="bg-[#f5f1e7] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                03 / Plot Collection
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Find your

                <span className="block italic text-[#a07835]">
                  right space.
                </span>
              </h2>
            </div>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={previousPlot}
                className="grid h-11 w-11 place-items-center rounded-full border border-black/15 transition hover:bg-[#0a3427] hover:text-white"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextPlot}
                className="grid h-11 w-11 place-items-center rounded-full border border-black/15 transition hover:bg-[#0a3427] hover:text-white"
              >
                →
              </button>

            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-2xl bg-[#0a3427] lg:grid-cols-2">

            <div className="relative min-h-[480px] overflow-hidden">

              {plots.map((plot, index) => (
                <img
                  key={plot.size}
                  src={plot.image}
                  alt={`${plot.size} sq yard plot`}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    plotSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white sm:left-10">

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#dcb66a]">
                  {plots[plotSlide].title}
                </span>

                <div className="mt-2 font-serif text-7xl leading-none">
                  {plots[plotSlide].size}
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                  {plots[plotSlide].unit}
                </span>

              </div>
            </div>

            <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#dcb66a]">
                Residential Plot
              </span>

              <h3 className="mt-5 font-serif text-4xl sm:text-5xl">
                {plots[plotSlide].title}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-8 text-white/45">
                {plots[plotSlide].description}
              </p>

              <div className="mt-8 border-y border-white/10 py-6">

                <div className="flex items-center justify-between gap-5">

                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    Listed Price
                  </span>

                  <span className="font-serif text-2xl text-[#dcb66a] sm:text-3xl">
                    {plots[plotSlide].price}
                  </span>

                </div>
              </div>

              <button
                type="button"
                onClick={() => setPopupOpen(true)}
                className="mt-8 w-fit rounded-full bg-[#dcb66a] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.15em] text-[#10251e] transition hover:bg-white"
              >
                Book This Plot →
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}

      <section
        id="amenities"
        className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-12">

           <div className="lg:col-span-4">

  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
    04 / Lifestyle
  </span>

  <h2 className="mt-5 font-serif text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
    Everything

    <span className="block italic text-[#a07835]">
      within reach.
    </span>
  </h2>

  {/* Added text */}
  <p className="mt-8 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
    Experience a thoughtfully planned lifestyle where everything you need
    is within easy reach. From everyday conveniences and green spaces to
    recreation, wellness and community facilities, Anugrah Homes is
    designed to make modern living comfortable and enjoyable.
  </p>

  <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
    Every detail is planned to create a peaceful, connected and convenient
    environment for you and your family.
  </p>

</div>

            <div className="lg:col-span-8">

              <p className="max-w-2xl text-sm leading-8 text-black/50">
                The project lists a range of lifestyle and convenience
                amenities including security, parks, water bodies, gym,
                commercial facilities and more.
              </p>

              <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">

               {amenities.map(([number, title, description, image]) => (
  <div
    key={number}
    className="group relative min-h-[280px] overflow-hidden rounded-3xl"
  >
    {/* Background Image */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#102d25]/65 transition duration-500 group-hover:bg-[#102d25]/50" />

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col justify-between p-6">
      <span className="text-sm font-semibold tracking-[0.2em] text-[#d8b56d]">
        {number}
      </span>

      <div>
        <h3 className="font-serif text-2xl text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/70">
          {description}
        </p>
      </div>
    </div>
  </div>
))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}

      <section
        id="location"
        className="bg-[#e8e2d6] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
              05 / Location
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[0.9] sm:text-6xl lg:text-8xl">
              Close to

              <span className="block italic text-[#a07835]">
                what's next.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-black/55">
              The project is located at Jattari, Aligarh Palwal Road.
              The official site highlights proximity to Jewar Airport,
              Yamuna Expressway, Defence Corridor, Metro Network and
              development hubs.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">

              {[
                ["10 Min", "Jewar Airport"],
                ["Nearby", "Yamuna Expressway"],
                ["Nearby", "Defence Corridor"],
                ["Connected", "Delhi / NCR"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border border-black/10 bg-[#f5f1e7]/70 p-5"
                >
                  <div className="font-serif text-2xl text-[#a07835]">
                    {value}
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-black/45">
                    {label}
                  </p>
                </div>
              ))}

            </div>
          </div>

          <div className="relative min-h-[470px] overflow-hidden rounded-2xl bg-[#0a3427]">

            <img
              src="/Images/plot2.png"
              alt="Anugrah Homes"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-[#061d17]/50" />

            <div className="absolute inset-0 grid place-items-center">

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#dcb66a]/30">

                <div className="absolute h-20 w-20 rounded-full border border-[#dcb66a]/30" />

                <div className="absolute h-10 w-10 rounded-full border border-[#dcb66a]/40" />

                <div className="grid h-5 w-5 place-items-center rounded-full bg-[#dcb66a] text-[#10251e]">
                  •
                </div>

              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-[#061d17]/90 p-7 text-white backdrop-blur-md">

              <span className="text-[8px] uppercase tracking-[0.3em] text-[#dcb66a]">
                Project Location
              </span>

              <h3 className="mt-2 font-serif text-2xl">
                Jattari, Aligarh
              </h3>

              <p className="mt-1 text-xs text-white/45">
                Palwal Road, Uttar Pradesh – 202137
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section
        id="gallery"
        className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a07835]">
                06 / Visual Tour
              </span>

              <h2 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl">
                See it.

                <span className="italic text-[#a07835]">
                  {" "}Feel it.
                </span>
              </h2>

            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-black/40">
              Swipe to explore →
            </span>

          </div>

          <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {gallery.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => setGalleryImage(item.image)}
                className="group relative min-w-[82vw] snap-start overflow-hidden rounded-xl text-left sm:min-w-[440px] lg:min-w-[430px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[480px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">

                  <div>

                    <span className="text-[9px] text-[#dcb66a]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 font-serif text-2xl">
                      {item.title}
                    </h3>

                  </div>

                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                    ↗
                  </span>

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="bg-[#0a3427] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#dcb66a]">
            07 / Testimonials
          </span>

          <div className="mt-7 text-3xl tracking-widest text-[#dcb66a]">
            ★★★★★
          </div>

          <div
            key={testimonialSlide}
            className="mt-8 animate-[heroContent_.7s_ease]"
          >

            <p className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              “{testimonials[testimonialSlide].text}”
            </p>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              {testimonials[testimonialSlide].name}
            </p>

          </div>

          <div className="mt-10 flex justify-center gap-2">

            <button
              type="button"
              onClick={previousTestimonial}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15"
            >
              ←
            </button>

            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setTestimonialSlide(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-1 self-center transition-all ${
                  testimonialSlide === index
                    ? "w-10 bg-[#dcb66a]"
                    : "w-4 bg-white/20"
                }`}
              />
            ))}

            <button
              type="button"
              onClick={nextTestimonial}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15"
            >
              →
            </button>

          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#dcb66a] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
      >

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#10251e]/10" />

        <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#10251e]/50">
              Your next step
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-[7rem]">
              Come experience

              <span className="block italic">
                Anugrah Homes.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:justify-self-end">

            <button
              type="button"
              onClick={() => setPopupOpen(true)}
              className="flex w-full items-center justify-between rounded-full bg-[#10251e] px-7 py-5 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#10251e] lg:min-w-[280px]"
            >
              Schedule Site Visit

              <span>→</span>
            </button>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= ENQUIRY POPUP ================= */}

      {popupOpen && (
        <div
          className="fixed inset-0 z-[200] grid place-items-center bg-black/75 p-4 backdrop-blur-md"
          onClick={() => setPopupOpen(false)}
        >

          <div
            className="relative w-full max-w-[460px] overflow-hidden rounded-2xl bg-[#f5f1e7] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full bg-[#0a3427] text-lg text-white"
              aria-label="Close enquiry form"
            >
              ×
            </button>

            <div className="bg-[#0a3427] p-8 text-white">

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#dcb66a]">
                ANUGRAH HOMES
              </span>

              <h3 className="mt-3 font-serif text-4xl">
                Schedule a Visit.
              </h3>

              <p className="mt-3 text-sm text-white/45">
                Tell us what you're looking for and our team can assist you.
              </p>

            </div>

            <form
              className="space-y-4 p-8"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you! Our team will contact you soon.");
                setPopupOpen(false);
              }}
            >

              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-4 text-sm outline-none focus:border-[#a07835]"
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-4 text-sm outline-none focus:border-[#a07835]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-4 text-sm outline-none focus:border-[#a07835]"
              />

              <select
                defaultValue=""
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-4 text-sm outline-none focus:border-[#a07835]"
              >
                <option value="" disabled>
                  Select Plot Size
                </option>

                <option>100 Sq. Yards</option>
                <option>200 Sq. Yards</option>
                <option>300 Sq. Yards</option>
              </select>

              <textarea
                rows="3"
                placeholder="Message"
                className="w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-4 text-sm outline-none focus:border-[#a07835]"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0a3427] py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#dcb66a] hover:text-[#10251e]"
              >
                Submit Enquiry →
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ================= GALLERY LIGHTBOX ================= */}

      {galleryImage && (
        <div
          className="fixed inset-0 z-[250] grid place-items-center bg-black/90 p-5"
          onClick={() => setGalleryImage(null)}
        >

          <button
            type="button"
            onClick={() => setGalleryImage(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white"
            aria-label="Close gallery"
          >
            ×
          </button>

          <img
            src={galleryImage}
            alt="Anugrah Homes gallery"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

      {/* ================= FLOATING CONTACT ================= */}

      <div className="fixed bottom-5 left-5 z-[100] flex flex-col gap-3">

        <a
          href="https://wa.me/917678279151"
          target="_blank"
          rel="noreferrer"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-[10px] font-bold text-white shadow-xl transition hover:-translate-y-1"
        >
          WA
        </a>

        <a
          href="tel:+917678279151"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#0a3427] text-lg text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#dcb66a] hover:text-[#10251e]"
        >
          ☎
        </a>

      </div>

      {/* ================= MOBILE CTA ================= */}

      <button
        type="button"
        onClick={() => setPopupOpen(true)}
        className="fixed bottom-4 left-1/2 z-[90] -translate-x-1/2 rounded-full bg-[#dcb66a] px-7 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#10251e] shadow-2xl sm:hidden"
      >
        Book Site Visit
      </button>

      {/* ================= ANIMATION ================= */}

      <style>
        {`
          @keyframes heroContent {
            from {
              opacity: 0;
              transform: translateY(22px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}

export default Home;