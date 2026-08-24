import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const googleReviews = [
  {
    name: "Elmin König",
    initials: "EK",
    date: "vor 1 Stunde",
    text: "TOP",
  },
  {
    name: "Cedric Rodriguez",
    initials: "CR",
    date: "vor 2 Monaten",
    text: "Sehr professionelle und unkomplizierte Zusammenarbeit. Meine Website wurde genau nach meinen Vorstellungen umgesetzt und sieht hervorragend aus. Wünsche und Anpassungen wurden schnell umgesetzt, die Kommunikation war stets freundlich und …",
  },
  {
    name: "Monika Smajovic",
    initials: "MS",
    date: "vor 3 Monaten",
    text: "Bisher die beste Qualität und der beste Logo-Druck🥰 Danke🌺",
  },
  {
    name: "Mahir M",
    initials: "MM",
    date: "vor 5 Monaten",
    text: "Ich empfehle die Firma Codepixel aufgrund ihrer kompetenten Beratung und der entsprechenden massgeschneiderten Umsetzung!",
  },
  {
    name: "E. Z.",
    initials: "EZ",
    date: "vor 3 Monaten",
    text: "Das Unternehmen ist sehr empfehlenswert! Nettes Team und die Qualität hat mich überzeugt!",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://maps.app.goo.gl/H9zevi8WLTnGq6Da6?g_st=ic";

const GoogleReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % googleReviews.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + googleReviews.length) % googleReviews.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % googleReviews.length);
  };

  const activeReview = googleReviews[activeIndex];

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="google-reviews-title"
    >
      <div className="main-container">
        <div className="container">
          <div className="container-padding-y px-1 sm:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span
                className="mb-5 inline-flex rounded-full border px-5 py-2 text-sm font-medium"
                style={{
                  borderColor: "rgba(255, 170, 0, 0.62)",
                  color: "#ffae00",
                  background: "rgba(255, 153, 0, 0.06)",
                }}
              >
                Google Rezensionen
              </span>
              <h2
                id="google-reviews-title"
                className="mb-4 text-3xl font-semibold text-text sm:text-4xl lg:text-5xl"
              >
                Das sagen unsere Kunden
              </h2>
              <p className="mx-auto max-w-2xl text-base text-gray sm:text-lg">
                Echte Rückmeldungen von Kunden, die mit Codepixel
                zusammengearbeitet haben.
              </p>
            </div>

            <div
              className="mx-auto max-w-4xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div
                className="relative min-h-[340px] overflow-hidden rounded-3xl border p-6 sm:min-h-[300px] sm:p-10"
                style={{
                  borderColor: "rgba(255, 170, 0, 0.34)",
                  background:
                    "linear-gradient(145deg, rgba(14,15,17,0.98), rgba(26,19,8,0.92))",
                  boxShadow:
                    "0 24px 80px rgba(0,0,0,0.32), 0 0 44px rgba(255,153,0,0.08)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-16 bottom-0 h-24 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,170,0,0.22), transparent 70%)",
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeIndex}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -32 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative z-10"
                    aria-live="polite"
                  >
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-bold text-black"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff8a00, #ffd000)",
                        }}
                        aria-hidden="true"
                      >
                        {activeReview.initials}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text">
                          {activeReview.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray">
                          {activeReview.date}
                        </p>
                      </div>
                      <div className="ml-auto hidden text-sm font-semibold text-text-light sm:block">
                        Google
                      </div>
                    </div>

                    <div
                      className="mb-5 flex gap-1 text-2xl"
                      aria-label="5 von 5 Sternen"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} style={{ color: "#fbbc04" }}>
                          ★
                        </span>
                      ))}
                    </div>

                    <blockquote className="m-0 border-0 p-0 text-xl leading-relaxed text-text sm:text-2xl">
                      “{activeReview.text}”
                    </blockquote>
                  </motion.article>
                </AnimatePresence>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border text-xl text-text transition hover:border-primary hover:text-primary"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                  aria-label="Vorherige Rezension"
                >
                  ←
                </button>

                <div
                  className="flex items-center gap-2"
                  aria-label={
                    "Rezension " +
                    (activeIndex + 1) +
                    " von " +
                    googleReviews.length
                  }
                >
                  {googleReviews.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="h-2.5 rounded-full transition-all duration-300"
                      style={{
                        width: index === activeIndex ? "28px" : "10px",
                        background:
                          index === activeIndex
                            ? "#ffae00"
                            : "rgba(255,255,255,0.24)",
                      }}
                      aria-label={"Rezension von " + review.name + " anzeigen"}
                      aria-current={index === activeIndex ? "true" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border text-xl text-text transition hover:border-primary hover:text-primary"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                  aria-label="Nächste Rezension"
                >
                  →
                </button>
              </div>

              <div className="mt-7 text-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold transition hover:opacity-80"
                  style={{ color: "#ffae00" }}
                >
                  Alle Rezensionen bei Google ansehen
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
