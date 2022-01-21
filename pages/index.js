import Footer from "../components/Footer"
import Hero from "../components/Hero"
import ProfileSection from "../components/ProfileSection"
import SectionContact from "../components/SectionContact"
import SectionProject from "../components/SectionProject"
import SectionSkill from "../components/SectionSkill"


export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SectionSkill />
      <SectionProject />
      <SectionContact />
      <Footer />
    </>
  )
}
