import type { PricingType } from "@/types/index";
import { motion } from "motion/react";
import {
  cardVariants,
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    subtitle?: string;
    badge: string;
    pricing_plans: Array<PricingType>;
  };
}

const PlanIcon = () => (
  <div className="relative mb-3 flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-[#ff9d00]/25 bg-gradient-to-br from-[#2b1b08] to-[#ff9d00]/30">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.875 4.5C17.5712 4.5 18.2389 4.77656 18.7312 5.26884C19.2234 5.76113 19.5 6.4288 19.5 7.12499C19.5 7.82119 19.2234 8.48887 18.7312 8.98116C18.2389 9.47344 17.5712 9.75 16.875 9.75H14.25V7.125C14.25 6.42881 14.5266 5.76113 15.0188 5.26884C15.5111 4.77656 16.1788 4.5 16.875 4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 9.75H7.125C6.42881 9.75 5.76113 9.47344 5.26884 8.98116C4.77656 8.48887 4.5 7.82119 4.5 7.125C4.5 6.4288 4.77656 5.76112 5.26884 5.26884C5.76112 4.77656 6.4288 4.5 7.12499 4.5C7.82119 4.5 8.48887 4.77656 8.98116 5.26884C9.47344 5.76113 9.75 6.42881 9.75 7.125V9.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.25 14.25H16.875C17.5712 14.25 18.2389 14.5266 18.7312 15.0188C19.2234 15.5111 19.5 16.1788 19.5 16.875C19.5 17.5712 19.2234 18.2389 18.7312 18.7312C18.2389 19.2234 17.5712 19.5 16.875 19.5C16.1788 19.5 15.5111 19.2234 15.0188 18.7312C14.5266 18.2389 14.25 17.5712 14.25 16.875V14.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.125 19.5C6.4288 19.5 5.76112 19.2234 5.26884 18.7312C4.77656 18.2389 4.5 17.5712 4.5 16.875C4.5 16.1788 4.77656 15.5111 5.26884 15.0188C5.76113 14.5266 6.42881 14.25 7.125 14.25H9.75V16.875C9.75 17.5712 9.47344 18.2389 8.98116 18.7312C8.48887 19.2234 7.82119 19.5 7.125 19.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.25 9.75H9.75V14.25H14.25V9.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const Pricing = ({
  data,
  isHome = true,
}: {
  data: PageData;
  isHome?: boolean;
}) => {
  const { title, subtitle, enable, badge, pricing_plans } = data.frontmatter;

  if (!enable) return null;

  const cards = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      variants={staggerContainerVariants}
      className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {pricing_plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={staggerItemVariants}
          className="h-full"
        >
          <motion.div
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.05 }}
            whileHover="hover"
            variants={cardVariants}
            className="flex h-full flex-col rounded-3xl border border-border/6 bg-card/70 p-2.5"
          >
            <div className="min-h-[270px] rounded-3xl border border-border/6 bg-card p-7.5">
              <PlanIcon />
              <h3 className="mb-2.5 text-h5 font-medium">{plan.name}</h3>
              <p className="mb-4 text-gray">{plan.content}</p>
              <div className="flex items-baseline">
                <h3 className="text-h2 font-normal text-text">
                  <span className="mr-2 text-text-light">
                    {plan.price?.monthly?.prefix}
                  </span>
                  {plan.price?.monthly?.number}
                  <span className="ml-1 text-base text-text-light">
                    {plan.price?.monthly?.suffix}
                  </span>
                </h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7.5">
              <ul className="flex flex-1 list-inside list-disc flex-col gap-y-3">
                {plan.features?.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={feature.include ? "text-text" : "text-text-light"}
                  >
                    {feature.value}
                  </li>
                ))}
              </ul>
              {plan.button?.enable && (
                <a
                  href={plan.button.link}
                  className="btn btn-primary mt-7.5 w-full border border-[#ffc400]/30 py-3.5 text-center font-medium text-text"
                >
                  {plan.button.label}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );

  if (!isHome) {
    return (
      <section className="text-left">
        <div className="flex flex-col gap-y-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.05 }}
            variants={fadeInUpVariants}
            className="mx-auto inline-flex w-max rounded-full bg-gradient-button px-7 py-3 font-medium text-text shadow-[0_10px_35px_rgba(255,157,0,0.24)]"
          >
            Pro Projekt
          </motion.div>
          {cards}
        </div>
      </section>
    );
  }

  return (
    <section className="text-left">
      <div className="main-container">
        <div className="container">
          <div className="container-padding-y container-padding-x">
            <div className="mb-14 text-center">
              {badge && (
                <div className="mb-2 inline-block rounded-full bg-gradient-primary p-px">
                  <div className="rounded-full bg-gradient-black-grid px-4 py-1.5">
                    <span className="gradient-text-primary">{badge}</span>
                  </div>
                </div>
              )}
              <h2 className="mx-auto text-h2 font-medium lg:w-3/5">{title}</h2>
              {subtitle && (
                <p className="mx-auto mt-5 max-w-3xl text-gray">{subtitle}</p>
              )}
            </div>
            {cards}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
