interface PricingTableData {
  title: string;
  price_label?: string;
  price_value?: string;
  features: {
    name: string;
    key: string;
    category?: string;
  }[];
}

interface PricingTableProps {
  data?: PricingTableData;
}

export default function PricingTable({ data }: PricingTableProps) {
  const features = data?.features || [];
  const title = data?.title || "Leistungen und Preise";
  const priceLabel = data?.price_label || "Preis";
  const priceValue = data?.price_value || "Auf Anfrage";

  return (
    <section>
      <div className="main-container">
        <div className="container">
          <div className="container-padding-y container-padding-x">
            <div className="relative overflow-hidden rounded-3xl border border-[#ff9d00]/30 bg-card/80 p-5 shadow-[0_28px_90px_rgba(255,157,0,0.08)] md:p-10">
              <div className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-[#ff9d00]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -right-20 size-72 rounded-full bg-[#ffc400]/10 blur-3xl" />

              <h2 className="relative mb-10 text-center text-h2 font-bold text-text">
                {title}
              </h2>

              <div className="relative overflow-hidden rounded-2xl border border-border/10 bg-background/40">
                <div className="grid grid-cols-[minmax(0,1fr)_140px] bg-[#ff9d00]/12 md:grid-cols-[minmax(0,1fr)_220px]">
                  <div className="px-4 py-4 text-base font-bold text-text md:px-6 md:text-lg">
                    Leistung
                  </div>
                  <div className="border-l border-border/10 px-4 py-4 text-center text-base font-bold text-[#ffb000] md:px-6 md:text-lg">
                    {priceLabel}
                  </div>
                </div>

                {features.map((feature, index) => {
                  const startsCategory =
                    index === 0 || features[index - 1]?.category !== feature.category;

                  return (
                    <div key={feature.key}>
                      {startsCategory && feature.category && (
                        <div className="border-t border-border/10 bg-white/[0.04] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#ffb000] md:px-6">
                          {feature.category}
                        </div>
                      )}
                      <div className="grid grid-cols-[minmax(0,1fr)_140px] border-t border-border/10 md:grid-cols-[minmax(0,1fr)_220px]">
                        <div className="px-4 py-4 text-sm text-text md:px-6 md:text-base">
                          {feature.name}
                        </div>
                        <div className="flex items-center justify-center border-l border-border/10 px-3 py-4 text-center text-sm font-medium text-text md:px-6 md:text-base">
                          {priceValue}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
