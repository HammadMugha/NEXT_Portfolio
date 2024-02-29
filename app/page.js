import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderFour from "@/components/HeaderFour";
import HeaderOne from "@/components/HeaderOne";
import HeaderThree from "@/components/HeaderThree";
import HeaderTwo from "@/components/HeaderTwo";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <HeaderOne />
    <HeaderTwo />
    <HeaderThree />
    <HeaderFour />
    <Footer />
    </>
  );
}
