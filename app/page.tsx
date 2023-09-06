'use client'
import LeftSection from "@/components/LeftSection"
import RightSection from "@/components/RightSection"
import StepProvider from "@/providers/StepProvider"

const Home = () => {
  return (
    <main className="bg-magnolia flex items-center justify-center min-h-screen">
      <div className="form__container max-w-3xl h-[550px] w-full md:m-5 mt-8 flex gap-2 md:bg-white rounded-lg p-3">

        <StepProvider>

          <LeftSection />
          <RightSection />

        </StepProvider>

      </div>
    </main>
  )
}

export default Home