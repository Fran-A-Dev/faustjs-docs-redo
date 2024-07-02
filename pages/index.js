import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Page(props) {
  return (
    <>
      <SEO />
      <Header />
      <div>This is the homepage</div>
      <br />
      <Link href="/faust-we-made-contact">Post: Faust, We Made Contact</Link>
      <br />
      <Link href="/reference-page">Page: Reference Page</Link>
      <Footer />
    </>
  );
}
