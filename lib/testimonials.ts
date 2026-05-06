/**
 * Use initials + suburb + scope format for local relevance.
 * Replace with permissioned names/quotes before marketing claims or Review schema.
 */

export type Testimonial = {
  quote: string;
  /** e.g. "Johan M., Claremont – Bathroom tiling" */
  byline: string;
};

export const authorityTestimonials: Testimonial[] = [
  {
    quote:
      "Programme was tight but communication was clearer than previous contractors, we knew what happened each day before tiling closed in.",
    byline: "Johan M., Claremont – Bathroom tiling",
  },
  {
    quote:
      "They coordinated waterproofing and paving reinstatement without us chasing multiple teams, snag list was short.",
    byline: "Thandi N., Sea Point – Balcony waterproofing & circulation",
  },
  {
    quote:
      "Quote assumptions were spelled out; variations only appeared when we changed scope, which is how it should work.",
    byline: "Peter K., Table View – Partial home renovation",
  },
];
