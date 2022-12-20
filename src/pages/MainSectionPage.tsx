import MainCarousel from "../components/main/MainCarousel"
import MainSection from "../components/main/MainSection"

const MainSectionPage = () => {
  return (
    <>
      <section className="h-max pt-16 flex flex-col">
        <MainCarousel />
        <MainSection />
      </section>
    </>
  )
}

export default MainSectionPage
