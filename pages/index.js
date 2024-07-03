import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Page(props) {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <h1 className="text-6xl font-extrabold font-lora">
          The Headless WordPress toolkit for Next.js
        </h1>
      </main>
      <br />
      <br />
      <Link href="/faust-we-made-contact" className="underline">
        Post: Faust, We Made Contact
      </Link>
      <br />
      <Link href="/reference-page" className="underline">
        Page: Reference Page
      </Link>
      <br />
      <br />
      <Footer />
    </>
  );
}
