import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import { GetStaticProps } from "next";
import { AboutProps, BannerProps, ProjectsProps, ServicesProps } from "@/type";
import Projects from "@/components/Projects";
import Link from "next/link";
import '../shareOption';
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  bannerData: BannerProps;
  servicesData: ServicesProps;
  aboutData: AboutProps;
  projectsData: ProjectsProps;
}

export default function Home({
  bannerData,
  servicesData,
  aboutData,
  projectsData,
}: Props) {
  return (
    <>
      <Banner bannerData={bannerData} />
      <Services servicesData={servicesData} />
      <About aboutData={aboutData} />
      <Projects projectsData={projectsData} />
      <Contact />

      <div className="sticky_share_btn">
        <div className="fixed_share">
          <ul className="listing">
            <li className="gitlab">
              <Link href={""}>
                <Image src={"/images/gitlab.png"} alt="" className="img-fluid" width={30} height={30} />
              </Link>
            </li>
            <li className="github">
              <Link href={""}>
                <Image src={"/images/github.png"} alt="" className="img-fluid" width={30} height={30} />
              </Link>
            </li>
            <li className="linkedin">
              <Link href={"https://www.linkedin.com/in/nikola-arsov-1119b1261/"}>
                <Image src={"/images/linkedIn.png"} alt="" className="img-fluid" width={30} height={30} />
              </Link>
            </li>
            <li className="instagram">
              <Link href={""}>
                <Image src={"/images/instagram.png"} alt="" className="img-fluid" width={30} height={30} />
              </Link>
            </li>
            <li className="facebook">
              <Link href={""}>
                <Image src={"/images/facebook.png"} alt="" className="img-fluid" width={30} height={30} />
              </Link>
            </li>
          </ul>
          <span className="share-toggle">
            <Image src={"/images/share.png"} alt="" className="img-fluid" width={30} height={40} />
          </span>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  // const bannerSection = await fetch("http://localhost:5001/banner");
  // const bannerData: BannerProps = await bannerSection.json();

  // const servicesSection = await fetch("http://localhost:5001/services");
  // const servicesData: ServicesProps = await servicesSection.json();

  // const aboutSection = await fetch("http://localhost:5001/about");
  // const aboutData: AboutProps = await aboutSection.json();

  // const projectsSection = await fetch("http://localhost:5001/projects");
  // const projectsData: ProjectsProps = await projectsSection.json();

  const bannerSection = await fetch("https://new-portfolio-json-server.vercel.app/banner");
  const bannerData: BannerProps = await bannerSection.json();

  const servicesSection = await fetch("https://new-portfolio-json-server.vercel.app/services");
  const servicesData: ServicesProps = await servicesSection.json();

  const aboutSection = await fetch("https://new-portfolio-json-server.vercel.app/about");
  const aboutData: AboutProps = await aboutSection.json();

  const projectsSection = await fetch("https://new-portfolio-json-server.vercel.app/projects");
  const projectsData: ProjectsProps = await projectsSection.json();



  return {
    props: {
      bannerData: bannerData,
      servicesData: servicesData,
      aboutData: aboutData,
      projectsData: projectsData,
    }
  };
}