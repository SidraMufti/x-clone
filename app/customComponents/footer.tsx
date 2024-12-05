import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "About", href: "/" },
    { name: "Download the App", href: "/" },
    { name: "Terms of Service", href: "/customComponents/termOfService" },
    { name: "Privacy Policy", href: "/customComponents/privacy-policy" },
    { name: "Cookie Policy", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Advertising", href: "/" },
    { name: "Marketing", href: "/" },
    { name: "Socio for Bussiness", href: "/" },
    { name: "Developers", href: "/" },
    { name: "Settings", href: "/" },
  ];
  return (
    <footer className="text-sm text-muted-foreground">
      <ul>
        <li className="flex flex-1 space-x-7">
          {links.map((link) => (
            <Link className="hover:underline" key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </li>
      </ul>
      <p className="container mx-auto text-center mt-4">@ 2024 Socio Corp </p>
    </footer>
  );
}
