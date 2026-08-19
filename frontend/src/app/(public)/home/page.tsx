import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Homepage",
    description: "Home page of the coffee shop"
}

export default function HomePage () {
    return (
        <main className="w-full min-h-screen flex justify-center items-center ">
            <div className="grid grid-cols-2 md:grid-cols-2 sm:grid:1 px-4 py-2 gap-8 justify-between ">
                <div className="flex flex-col text-2xl md:text-8xl gap-4 justify-start">
                    <h1>Coffee <span className="">Shop</span></h1>
                    <p className="text-md md:text-sm">
                        Welcome to Lena&apos;s coffee shop come and see avaialble sweets and drinks!
                    </p>
                </div>

                <div className="flex flex-col border border-white">
                    <Image 
                        src={"/"}
                        alt="Latte coffeee"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
            </div>
        </main>
    )
}