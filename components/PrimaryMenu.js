import Link from "next/link";

export default function PrimaryMenu() {
  return (
    <nav className="flex border-2 border-orange-600 gap-5">
      <Link href="/docs">Docs</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
