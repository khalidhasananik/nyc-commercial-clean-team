import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-[calc(100%-32px)] mx-auto h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg">
      {/* Background placeholder image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate/95 via-dark-slate/90 to-slate/85">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-dark-slate/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="heading-3 mb-4">Contact Us</h1>
        <nav className="flex items-center gap-2 text-sm md:text-base">
          <Link
            href="/"
            className="text-red hover:underline font-medium transition-colors"
          >
            Home
          </Link>
          <span className="text-white/70">►</span>
          <span className="text-white/90">Contact US</span>
        </nav>
      </div>
    </section>
  );
}
