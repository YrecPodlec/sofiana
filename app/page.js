import {AboutMe, PhotoSecond, Skills, Welcome} from "@/app/widgets";

export default function Home() {
  return (
    <main>
        <Welcome/>
        <PhotoSecond/>
        <AboutMe/>
        {/*БЛОК ПОРТФОЛИО*/}
        <Skills/>
    </main>
  );
}
