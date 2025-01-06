import AboutMe from "@/components/AboutMe/AboutMe";
import Experiences from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Leadership from "@/components/Leadership/Leadership";
import RecentProject from "@/components/RecentProjects/RecentProject";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <GetInTouch />
      <AboutMe />
      <Experiences />
      <RecentProject />
      <Leadership />
      <Skills />
      <Footer />
    </>
  );
}
