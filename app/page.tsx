const Home = () => {
  return (
    <main className="bg-magnolia flex items-center justify-center min-h-screen">
      <div className="form__container max-w-2xl w-full m-5 flex gap-2 bg-white rounded-lg p-3">

        {/* left section */}
        <div className="form__left text-xs min-w-[240px] p-10 bg-desktop-sidebar bg-cover bg-no-repeat rounded-lg">

          <div className="flex gap-4 mb-6">
            <div className="flex items-center justify-center border bg-light-blue h-8 w-8 rounded-full">
              <p className="text-xl font-bold text-marine-blue">1</p>
            </div>

            <div>
              <p className="uppercase text-xs text-cool-gray">Step 1</p>
              <h2 className="font-medium text-sm text-white uppercase mt-1">Your info</h2>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center justify-center border h-8 w-8 rounded-full">
              <p className="text-xl font-bold text-white">2</p>
            </div>

            <div>
              <p className="uppercase text-cool-gray">Step 2</p>
              <h2 className="font-medium text-white uppercase mt-1">Select plan</h2>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center justify-center border h-8 w-8 rounded-full">
              <p className="text-xl font-bold text-white">3</p>
            </div>

            <div>
              <p className="uppercase text-cool-gray">Step 3</p>
              <h2 className="font-medium text-white uppercase mt-1">Add-ons</h2>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center justify-center border h-8 w-8 rounded-full">
              <p className="text-xl font-bold text-white">4</p>
            </div>

            <div>
              <p className="uppercase text-cool-gray">Step 4</p>
              <h2 className="font-medium text-white uppercase mt-1">Summary</h2>
            </div>
          </div>

        </div>

        {/* right section */}
        <div className="form__right p-10 text-marine-blue text-sm">

          {/* heading */}
          <div className="heading">
            <h2 className="text-2xl font-bold">Personal info</h2>
            <p className="text-cool-gray mt-1">Please provide your name, email address and phone number.</p>
          </div>

          {/* form */}
          <form action='#' className="mt-10 flex flex-col">

            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" placeholder="eg: Stephen King" className="border rounded mb-4 p-2 w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">Email Address</label>
              <input type="email" id="email" placeholder="eg: stephenking@lorem.com" className="border rounded mb-4 p-2 w-full" />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1">Phone Number</label>
              <input type="tel" id="phone" placeholder="eg: +1 234 567 890" className="border rounded mb-4 p-2 w-full" />
            </div>

            <button type="submit" className="bg-marine-blue w-fit self-end text-white rounded-lg px-4 py-2 mt-10 font-semibold">Next Step</button>

          </form>

        </div>

      </div>
    </main>
  )
}

export default Home