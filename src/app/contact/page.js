import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Us - NYC Commercial Clean Team",
  description:
    "Get in touch with NYC Commercial Clean Team. Contact us for professional commercial cleaning services in New York City.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <ContactHero />

      {/* Form + Info Section */}
      <section className="container py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </main>
  );
}
