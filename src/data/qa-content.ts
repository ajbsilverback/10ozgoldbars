import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$20,000" (ask price rounded to $100)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$19,000–$21,000" (ask ± 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$20,000+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$20,000+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the actual weight of a 10 oz gold bar?",
    answer: "A 10 oz gold bar weighs exactly 10 troy ounces, or approximately 311.035 grams (about 0.69 pounds). This makes it a popular mid-size bar for investors seeking more gold per bar than 1 oz while remaining more accessible than kilo bars.",
  },
  {
    question: "Why do 10 oz gold bars have lower premiums than 1 oz bars?",
    answer: "10 oz bars have lower retail premiums (typically 1.5-3% over spot) because manufacturing costs are spread across more gold content. Producing one 10 oz bar is more efficient than producing 10 individual 1 oz bars. The per-ounce production, handling, and distribution costs decrease significantly with larger bar sizes.",
  },
  {
    question: "How much capital do I need to buy a 10 oz gold bar?",
    answer: "At current gold prices, a single 10 oz gold bar costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. This makes 10 oz bars accessible to serious individual investors while still offering meaningful premium savings over 1 oz bars.",
  },
  {
    question: "Are 10 oz gold bars easy to sell?",
    answer: "Yes, 10 oz gold bars are highly liquid. They're popular among individual investors and dealers maintain ready markets for bars from recognized refiners. Most established dealers will buy 10 oz bars from major refiners at competitive prices, typically within 1-2% of spot.",
  },
  {
    question: "How do I store a 10 oz gold bar safely?",
    answer: "10 oz bars are compact enough for home safes, bank safe deposit boxes, or professional vault storage. Given the ~{{CAPITAL_REQUIREMENT}} value, many investors use a quality home safe or bank safe deposit box. For larger holdings, professional vault storage with allocated segregation is also an option.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and 10 oz gold bar prices?",
    answer: "The 10 oz bar price equals the spot price multiplied by 10 troy ounces, plus a premium (typically 1.5-3%). The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This represents better premium efficiency than 1 oz bars but slightly higher than kilo bars.",
  },
  {
    question: "Why do 10 oz bar premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Brand differences also matter, as PAMP Suisse or Valcambi bars may carry slightly higher premiums than lesser-known refiners. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my 10 oz bar investment?",
    answer: "The bid-ask spread on 10 oz bars is typically 1.5-2.5% for major refiner products. With a {{CAPITAL_REQUIREMENT}} bar, this represents a few hundred dollars. Understanding spreads is important because your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do 10 oz bars have lower premiums than 1 oz bars?",
    answer: "Yes, 10 oz bars consistently offer lower per-ounce premiums than 1 oz bars (which run 3-8% over spot). The premium savings are meaningful at scale. Purchasing a 10 oz bar instead of equivalent 1 oz bars can save $400-$800 on a single purchase.",
  },
  {
    question: "When is the best time to buy 10 oz gold bars based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (1.5-3% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 4-5%. For purchases at the 10 oz level, you can often negotiate with dealers for better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your 10 oz gold bar resources cover?",
    answer: "Our educational library covers all aspects of 10 oz bar investing including: understanding premiums, size comparisons (1 oz vs 10 oz vs kilo), storage options, brand comparisons (PAMP, Credit Suisse, Perth, Royal Canadian Mint), gold market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "Are 10 oz gold bars better than smaller bars?",
    answer: "Neither is universally better; each serves different investor needs. 10 oz bars offer a great balance of premium efficiency and practical accessibility. They're ideal for investors who want better value than 1 oz bars but find kilo bars too large or expensive. Many investors combine sizes based on their goals.",
  },
  {
    question: "Which brands of 10 oz gold bars are most recognized?",
    answer: "Top-tier brands include PAMP Suisse, Credit Suisse, Valcambi, Perth Mint, Royal Canadian Mint, and Heraeus. These refiners produce bars meeting .9999 fine gold purity standards with sophisticated security features. LBMA-accredited bars are accepted globally and typically command better resale values.",
  },
  {
    question: "How do 10 oz gold bars compare to gold ETFs?",
    answer: "10 oz bars provide direct physical ownership with no counterparty risk, meaning you hold the actual metal. Gold ETFs offer convenience and easy trading but represent claims on gold held by third parties. For investors seeking tangible assets outside the financial system, 10 oz bars provide direct ownership that ETFs cannot match.",
  },
  {
    question: "What should I look for when buying my first 10 oz gold bar?",
    answer: "For first-time 10 oz bar buyers: choose recognized refiners (PAMP, Credit Suisse, Perth, Royal Canadian Mint), verify the dealer's reputation, compare premiums across multiple sources, ensure full documentation including assay certificate and serial number, and plan your storage solution before purchasing.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a 10 oz gold bar?",
      answer: "Typical premiums for 10 oz gold bars from recognized refiners range from 1.5-3% over spot under normal market conditions. This is lower than 1 oz bars (3-8%) but slightly higher than kilo bars (1-2%). During supply constraints, premiums can temporarily rise to 4-5%.",
    },
    {
      question: "How much can I save by buying 10 oz bars instead of 1 oz bars?",
      answer: "The savings are meaningful. Purchasing gold as 10 individual 1 oz bars (5% average premium) costs more than the same gold content as a 10 oz bar (2% premium), a savings of roughly $400-$800 per 10 oz equivalent. For investors building positions over time, these savings add up.",
    },
    {
      question: "Do I recover the premium when I sell my 10 oz gold bar?",
      answer: "You typically don't recover the full premium on resale, but 10 oz bars from recognized refiners have competitive bid-ask spreads (1.5-2.5%). PAMP Suisse, Credit Suisse, or Perth Mint bars command better buyback prices. The combination of lower purchase premiums and reasonable spreads makes 10 oz bars economically efficient.",
    },
  ],
  "size-comparison": [
    {
      question: "How much money do I save buying a 10 oz bar instead of equivalent smaller bars?",
      answer: "Premium savings are meaningful. If 1 oz bars carry 5% premiums and 10 oz bars carry 2%, you save approximately 3% on the gold value, about $400-$600 on a {{CAPITAL_REQUIREMENT}} purchase. Over multiple purchases building a position, savings can reach thousands of dollars compared to buying only 1 oz bars.",
    },
    {
      question: "When should I choose 10 oz bars over other sizes?",
      answer: "Choose 10 oz bars when you have moderate capital to deploy ({{LIQUIDITY_THRESHOLD}}), want better premiums than 1 oz bars, prefer easy storage at home or in a safe deposit box, and want good liquidity when selling. The 10 oz size offers the best balance of value and flexibility for most individual investors.",
    },
    {
      question: "Can I mix 10 oz bars with other sizes in my portfolio?",
      answer: "Yes, many investors combine sizes strategically. A common approach: use 10 oz bars for core holdings to maximize premium efficiency while maintaining some 1 oz bars as a liquidity reserve for potential partial sales. This captures the benefits of both approaches.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for 10 oz gold bars?",
      answer: "10 oz bars are practical for multiple storage options. A quality home safe works well for most investors, or you can use a bank safe deposit box. For larger holdings or added security, professional vault storage with allocated segregation is available from providers like Brink's or dealer-affiliated programs.",
    },
    {
      question: "Can I store 10 oz gold bars at home?",
      answer: "Yes, 10 oz bars are well-suited for home storage. A quality fireproof safe (ideally bolted down) provides reasonable security for a few bars. The compact size (roughly 60mm × 31mm × 9mm) means several bars fit in a standard home safe. Consider insurance coverage for high-value holdings.",
    },
    {
      question: "What are the typical costs for professional 10 oz bar storage?",
      answer: "Professional vault storage typically costs 0.5-1% of value annually, though rates vary by provider and quantity stored. For a single 10 oz bar, expect $100-$200 per year. Many investors find home or safe deposit box storage more cost-effective for smaller positions.",
    },
  ],
  "brand-differences": [
    {
      question: "Which 10 oz bar brands are most recognized?",
      answer: "Leading brands for 10 oz bars include: PAMP Suisse, Credit Suisse, and Valcambi (Switzerland), Perth Mint (Australia), Royal Canadian Mint (Canada), and Heraeus (Germany). These brands are accepted by dealers worldwide and typically command the best resale prices.",
    },
    {
      question: "Do different 10 oz bar brands have different premiums?",
      answer: "Yes, there are slight premium differences. PAMP Suisse 10 oz bars with their Lady Fortuna design often command 0.5-1% higher premiums than generic bars. Credit Suisse and Perth Mint are also popular premium brands. The key is choosing recognized products for maximum liquidity.",
    },
    {
      question: "What security features do 10 oz bars have?",
      answer: "Modern 10 oz bars from major refiners include: unique serial numbers, assay certificates, precision weight stamps, and refiner hallmarks. Many come in tamper-evident packaging. PAMP's Veriscan technology allows smartphone verification on their products.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a 10 oz gold bar?",
      answer: "10 oz bars from recognized refiners can typically be sold within 1-2 business days through established dealers. The 10 oz size is popular with dealers and individual buyers alike, making it one of the more liquid bar formats. Having full documentation expedites the process.",
    },
    {
      question: "Will I get a worse price selling a 10 oz bar than smaller bars?",
      answer: "Not necessarily. 10 oz bars often have similar or better bid-ask spreads compared to 1 oz bars. Dealer demand for 10 oz bars is strong because they're popular with serious individual investors. Bars from major refiners consistently achieve competitive buyback prices.",
    },
    {
      question: "What if I only need to liquidate part of my gold holdings?",
      answer: "This is one consideration with 10 oz bars: selling means converting ~{{CAPITAL_REQUIREMENT}} at once. If you anticipate needing smaller amounts, maintain some 1 oz bars alongside your 10 oz holdings for flexibility.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates; price reflects the constantly shifting balance.",
    },
    {
      question: "How do Federal Reserve decisions affect 10 oz gold bar values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. 10 oz bar values move with spot prices, so Fed policy affects all gold holdings equally regardless of bar size.",
    },
    {
      question: "Do 10 oz bar premiums change with market conditions?",
      answer: "Yes, though less dramatically than 1 oz bars. During demand surges, 1 oz bar premiums might spike to 10%+, while 10 oz premiums might only expand to 4-5%. The 10 oz format offers more premium stability than smaller bars during volatile periods.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for 10 oz gold bars?",
      answer: "Under normal market conditions, spreads of 1.5-2.5% for 10 oz bars from recognized refiners represent competitive pricing. This is similar to or better than 1 oz bars and reflects the strong market for 10 oz products. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a 10 oz bar?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 2% over spot and expect to receive 1% below spot when selling, you need 3% gold appreciation to break even. On a {{CAPITAL_REQUIREMENT}} 10 oz bar, that's roughly $500-$700 in gold price movement.",
    },
    {
      question: "Do spreads vary by 10 oz bar brand?",
      answer: "Yes, recognized brands from major refiners (PAMP, Credit Suisse, Perth) trade with tighter spreads due to instant recognition and ready dealer markets. Lesser-known or generic bars may face wider spreads. For 10 oz purchases, brand quality matters for resale value.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a 10 oz gold bar is authentic?",
      answer: "Key verification methods: confirm the bar matches stated weight (311.035g ± tolerance), verify serial number with the refiner if possible, check assay certificate matches the bar, examine hallmarks and stamps for precision, use PAMP Veriscan or similar technology if available. For secondary market purchases, consider professional testing.",
    },
    {
      question: "What security features should I look for on 10 oz bars?",
      answer: "Look for: precision-stamped weight and purity marks, unique serial number, refiner logo/hallmark, assay certificate with matching details, and tamper-evident packaging when new. Premium refiners include features like micro-engraving and holographic elements.",
    },
    {
      question: "Should I have 10 oz bars professionally authenticated?",
      answer: "For secondary market purchases or bars without complete documentation, professional authentication provides peace of mind. XRF (X-ray fluorescence) testing can verify purity without damaging the bar. The cost is modest compared to the bar's value.",
    },
  ],
  "institutional-vs-retail": [
    {
      question: "What is LBMA accreditation and why does it matter for gold bars?",
      answer: "The London Bullion Market Association (LBMA) accredits refiners meeting strict quality standards. LBMA-accredited bars are accepted by banks, institutions, and dealers worldwide without additional verification. This creates efficient global markets and ensures your bars maintain maximum resale value.",
    },
    {
      question: "Are retail 10 oz bars different from institutional gold?",
      answer: "10 oz bars from LBMA-accredited refiners meet the same quality standards as institutional gold. There is no 'retail grade' distinction. Retail investors buying bars from recognized refiners own investment-quality gold.",
    },
    {
      question: "Can I buy gold at institutional pricing?",
      answer: "Retail investors pay slightly higher premiums than large institutional buyers due to smaller order sizes and higher per-transaction costs. However, 10 oz bars get you closer to efficient pricing than 1 oz bars. Volume purchases or dealer relationships can further reduce premiums.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in 10 oz gold bars?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. 10 oz bars are appropriate for investors with $20,000+ to allocate to physical gold.",
    },
    {
      question: "Should I buy 10 oz bars all at once or over time?",
      answer: "Both approaches have merit. Purchasing in one transaction captures premium efficiency. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple premiums. The 10 oz size works well for periodic purchases as you build your position.",
    },
    {
      question: "How do 10 oz bars fit with other gold investments like ETFs?",
      answer: "10 oz bars and gold ETFs serve different purposes. ETFs offer liquidity and easy trading but carry counterparty risk. 10 oz bars provide direct ownership and wealth outside the financial system but require storage. Many investors use ETFs for trading and physical gold for long-term holdings.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a 10 oz gold bar?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The entire process from order to delivery usually spans 3-7 business days depending on payment method and shipping.",
    },
    {
      question: "What payment methods are accepted for 10 oz bar purchases?",
      answer: "Wire transfer is common for 10 oz bar transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards may work for purchases at this price point.",
    },
    {
      question: "Why do 10 oz bar prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Volume dealers may offer lower premiums due to operational efficiency. Some dealers charge more but provide enhanced services. Always compare prices from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. State taxes add another layer of complexity. Consult a tax professional for guidance on your specific situation.",
    },
    {
      question: "Do I pay sales tax when buying a 10 oz gold bar?",
      answer: "Sales tax treatment varies significantly by state. Some states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules before purchasing can affect your total cost.",
    },
    {
      question: "Can I hold 10 oz gold bars in an IRA?",
      answer: "Certain IRAs, often called Precious Metals IRAs or Gold IRAs, can hold physical gold including qualifying 10 oz bars. The gold must meet purity requirements and be held by an approved custodian. IRA ownership provides tax-advantaged growth but involves custodian fees and prevents personal possession while in the account.",
    },
  ],
};
