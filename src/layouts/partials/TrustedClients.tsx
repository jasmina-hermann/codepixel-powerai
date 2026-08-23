import ImageFallback from "@/helpers/ImageFallback";
import type { LogoMarqueeType } from "@/types/index";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: LogoMarqueeType;
}

const LOGO_GAP_PX = 72;
const MARQUEE_SPEED_PX_PER_SECOND = 90;

const TrustedClients = ({ data }: { data: PageData }) => {
  const section = data.frontmatter;
  const swissLabel = (section as any).swiss_label || "Webdesign aus der Schweiz";
  const swissAria = (section as any).swiss_aria || "Swiss Made, Webdesign aus der Schweiz";
  const groupRef = useRef<HTMLDivElement>(null);
  const [groupWidth, setGroupWidth] = useState(0);

  useEffect(() => {
    const updateGroupWidth = () => {
      setGroupWidth(groupRef.current?.scrollWidth ?? 0);
    };

    updateGroupWidth();

    window.addEventListener("resize", updateGroupWidth);

    return () => {
      window.removeEventListener("resize", updateGroupWidth);
    };
  }, [section.items]);

  if (!section.items.length) {
    return null;
  }

  const loopDistance = groupWidth + LOGO_GAP_PX;
  const loopDuration = loopDistance
    ? loopDistance / MARQUEE_SPEED_PX_PER_SECOND
    : 12;

  const renderLogoList = (listKey: string, hidden = false) => (
    <div
      ref={hidden ? undefined : groupRef}
      className="flex shrink-0 gap-18"
      aria-hidden={hidden}
    >
      {section.items.map((logo, index) => (
        <div key={`${listKey}-${index}`} className="shrink-0">
          <ImageFallback
            src={logo?.logo}
            alt={logo?.name || `Partnerlogo ${index + 1}`}
            className="w-45 grayscale opacity-70"
            width="190"
            height="40"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <div className="main-container">
        <div className="container">
          <div className="py-20">
            <h2 className="text-h6 text-center mb-10 text-text-light font-medium">
              {section.title}
            </h2>

            <div className="z-10 flex items-center relative overflow-hidden">
              <motion.div
                className="flex w-max gap-18"
                animate={loopDistance ? { x: [0, -loopDistance] } : undefined}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: loopDuration,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                {renderLogoList("primary")}
                {renderLogoList("duplicate", true)}
              </motion.div>
            </div>

            <div
              className="mx-auto mt-12 flex w-fit items-center gap-4 rounded-2xl px-6 py-4"
              aria-label={swissAria}
              style={{
                border: "1px solid rgba(255, 174, 0, 0.42)",
                background:
                  "linear-gradient(135deg, rgba(16,16,18,0.96), rgba(26,20,10,0.92))",
                boxShadow:
                  "0 0 34px rgba(255, 153, 0, 0.14), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                role="img"
                aria-label="Schweizerkreuz"
                className="shrink-0"
              >
                <rect width="48" height="48" rx="10" fill="#D52B1E" />
                <path
                  d="M19 10h10v9h9v10h-9v9H19v-9h-9V19h9z"
                  fill="#FFFFFF"
                />
              </svg>

              <div className="leading-tight">
                <div
                  className="text-lg font-semibold tracking-[0.16em]"
                  style={{ color: "#FFFFFF" }}
                >
                  SWISS MADE
                </div>
                <div
                  className="mt-1 text-sm font-medium"
                  style={{ color: "#FFAA00" }}
                >
                  {swissLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
