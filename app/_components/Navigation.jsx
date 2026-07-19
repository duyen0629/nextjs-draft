import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          The Wild Oasis
        </Link>
        <ul className="flex gap-6 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>
            <Link href="/cabins" className="hover:text-foreground">
              Cabins
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
          </li>
          <li>
            <Link href="/account" className="hover:text-foreground">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
