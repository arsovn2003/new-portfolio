import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import About from "@/components/About";
import { GetStaticProps } from "next";
import { AboutProps, BannerProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  bannerData: BannerProps;
  aboutData: AboutProps;
}

export default function Home({
  bannerData,
  aboutData
}: Props) {
  return (
    <>
      <Banner bannerData={bannerData} />
      <About aboutData={aboutData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const bannerSection = await fetch("https://new-portfolio-json-server.vercel.app/banner");
  const bannerData: BannerProps = await bannerSection.json();

  const aboutSection = await fetch("https://new-portfolio-json-server.vercel.app/about");
  const aboutData: BannerProps = await aboutSection.json();

  return {
    props: {
      bannerData: bannerData,
      aboutData: aboutData,
    }
  };
}