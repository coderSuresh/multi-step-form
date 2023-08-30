import LeftSection from "@/components/LeftSection"
import RightSection from "@/components/RightSection"

const Home = () => {
  return (
    <main className="bg-magnolia flex items-center justify-center min-h-screen">
      <div className="form__container max-w-2xl w-full m-5 flex gap-2 bg-white rounded-lg p-3">

        <LeftSection />
        <RightSection />

      </div>
    </main>
  )
}

export default Home