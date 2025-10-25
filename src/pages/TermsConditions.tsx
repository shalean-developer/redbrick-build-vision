import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms & Conditions | Team Edlick Construction</title>
        <meta name="description" content="Read Team Edlick Construction's terms and conditions for our construction services, warranties, and policies." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.team-edlick.co.za/terms-conditions" />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">Last updated: October 2025</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Team Edlick Construction's services, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">
                Team Edlick Construction provides construction and related services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>General construction</li>
                <li>Renovations and remodeling</li>
                <li>Painting services</li>
                <li>Plumbing</li>
                <li>Tiling and waterproofing</li>
                <li>Paving and decking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Quotations and Pricing</h2>
              <p className="text-muted-foreground">
                All quotations are valid for 30 days unless otherwise stated. Prices are subject to change based on 
                material costs, project scope changes, or unforeseen circumstances. Any variations to the original 
                quotation will be communicated and agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>A deposit may be required before work commences</li>
                <li>Progress payments may be requested at agreed milestones</li>
                <li>Final payment is due upon completion of the project</li>
                <li>Late payments may incur interest charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Project Timeline</h2>
              <p className="text-muted-foreground">
                We strive to complete all projects within the agreed timeline. However, completion dates may be 
                affected by weather conditions, material availability, or other factors beyond our control. We will 
                communicate any delays promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Warranties</h2>
              <p className="text-muted-foreground">
                We guarantee the quality of our workmanship. Specific warranty periods will be outlined in your 
                project agreement. Warranties do not cover damage resulting from misuse, neglect, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Liability</h2>
              <p className="text-muted-foreground">
                Team Edlick Construction maintains appropriate insurance coverage. Our liability is limited to the 
                value of the services provided. We are not liable for indirect or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to our website. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Bishop: +27 82 758 7466</p>
                <p>Sam: +27 68 594 3091</p>
                <p>The Watershed, D03 Dock Road, Waterfront, South Africa</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
