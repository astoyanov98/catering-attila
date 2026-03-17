import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-12 py-5 bg-white border-b border-primary/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src="/logo.jpg"
          alt="Attila Catering"
          width={150}
          height={70}
          priority
        />
      </Link>
      <nav className="flex items-center gap-6 lg:gap-8">
        <Link
          href="/"
          className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#5B3F2E" }}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#5B3F2E" }}
        >
          About
        </Link>
        <Link
          href="#services"
          className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#5B3F2E" }}
        >
          Services
        </Link>
        <Link
          href="#contact"
          className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#5B3F2E" }}
        >
          Contact
        </Link>
        <Link
          href="#contact"
          className="border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
