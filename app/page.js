import {AboutMe, Contact, PhotoSecond, Portfolio, Skills, Welcome} from "@/app/widgets";

export default function Home() {
  return (
    <main>
        <Welcome/>
        <PhotoSecond/>
        <AboutMe/>
        <Portfolio/>
        <Skills/>
        <Contact/>
    </main>
  );
}
