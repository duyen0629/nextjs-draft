import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome!</h1>
      <Link href="/cabins">Cabins</Link>
      <Link href="/about">About</Link>
      <Link href="/account">Account</Link>
    </div>
  );
}
