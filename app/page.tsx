import Image from "next/image";
import CookieSheet from "./cookies/page";
import HomePageCard from "./customComponents/homepageCard";
import Footer from "./customComponents/footer";

export default function Home() {
  return (
    <>
      <CookieSheet />
      <HomePageCard />
      <Footer />
    </>
  );
}
