import Image from "next/image";
import CookieSheet from "./cookies/page";
import HomePageCard from "./customComponents/homepageCard";

export default function Home() {
  return (
    <>
      <HomePageCard />

      <CookieSheet />
    </>
  );
}
