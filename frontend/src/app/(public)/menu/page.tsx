import Image from "next/image";


export const metadata = {
  title: "Menu page",
  description: "Learn more about our coffees!",
};

export default function Menu() {
  return ( 
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden p-4">
      <div className="flex justify-start text-start font-black text-2xl lg:text-8xl">
        <h1>Menu and Eat!</h1>
      </div>

      <div className="grid grid-1 md:grid-2 gap-8 justify-between ">
        <div>
          <Image 
            src={"/"}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="">
          <p>


          </p>
        </div>
      </div>
    </main>
  )
}