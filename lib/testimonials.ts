/**
 * Verified testimonials only.
 *
 * Keep this list empty until Team Edlick has permissioned customer quotes
 * with a source record that can be checked. Do not add placeholder names,
 * locations, or paraphrased reviews as marketing evidence.
 */

export type Testimonial = {
  quote: string;
  byline: string;
};

export const authorityTestimonials: Testimonial[] = [];
