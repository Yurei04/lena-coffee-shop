import Loading from "@/components/global/loading"
import HomePage from "@/app/(public)/home/page";
import About from "@/app/(public)/about/page";
import Contact from "@/app/(public)/contact/page";
import Menu from "@/app/(public)/menu/page";
import Footer from "@/components/global/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Coffee Shop",
  description: "Discover our coffee, menu, and story.",
};


export default function Home() {
  return (
   <main className="w-full min-h-scree overflow-x-hidden">
    <HomePage/>

    <section className="contain-[wcontent] [content-visibility:auto] [contain-intrinsic-size:700px]">
      <About />
    </section>


    <Suspense fallback={<Loading />}>
      <section className="contain-[wcontent] [content-visibility:auto] [contain-intrinsic-size:1400px]">
        <Menu />
      </section>
    </Suspense>

    <section className="contain-[wcontent] [content-visibility:auto] [contain-intrinsic-size:700px]">
      <Contact />
    </section>

    <Footer />
   </main>
  );
}
