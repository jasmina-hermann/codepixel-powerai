import theme from "@/config/theme.json";
import { motion } from "motion/react";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable: boolean;
    badge?: string;
    title?: string;
    subtitle?: string;
    stats_list: {
      step: string;
      title: string;
      content: string;
    }[];
  };
}

const Statistics = ({ data }: { data: PageData }) => {
  const primaryColor =
    theme?.colors?.default?.theme_color?.primary || "#FF9D00";
  const secondaryColor =
    theme?.colors?.default?.theme_color?.secondary || "#FFC400";

  return (
    data.frontmatter.enable && (
      <section>
        <div className="main-container">
          <div className="container">
            <div className="py-16 container-padding-x">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px", amount: 0.15 }}
                variants={staggerContainerVariants}
                className="text-center max-w-3xl mx-auto mb-10"
              >
                {data.frontmatter.badge && (
                  <motion.span
                    variants={staggerItemVariants}
                    className="inline-flex rounded-full border border-primary/50 px-4 py-1.5 mb-4 text-primary"
                  >
                    {data.frontmatter.badge}
                  </motion.span>
                )}
                {data.frontmatter.title && (
                  <motion.h2
                    variants={staggerItemVariants}
                    className="text-h2 font-medium"
                  >
                    {data.frontmatter.title}
                  </motion.h2>
                )}
                {data.frontmatter.subtitle && (
                  <motion.p
                    variants={staggerItemVariants}
                    className="text-gray mt-4"
                  >
                    {data.frontmatter.subtitle}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px", amount: 0.1 }}
                variants={staggerContainerVariants}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {data.frontmatter.stats_list.map((item, index) => (
                  <motion.article
                    key={index}
                    variants={staggerItemVariants}
                    className="group min-h-72 border border-border/6 p-7 rounded-3xl bg-card relative overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-end justify-between mb-7">
                        <span className="text-[54px] leading-none font-light gradient-text-primary">
                          {item.step}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-light/45">
                          Schritt
                        </span>
                      </div>
                      <h3 className="text-h5 font-medium mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray leading-relaxed">
                        {item.content}
                      </p>
                    </div>

                    <div
                      className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-44 w-64 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-35"
                      style={{
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                      }}
                      aria-hidden="true"
                    />
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Statistics;
