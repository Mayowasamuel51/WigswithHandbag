import Image from "next/image";
import landingImg from "./images/landing-img.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="md:py-0 py-32 flex items-center justify-between gap-16 min-h-screen">
        <div className="">
          <h1 className="font-bold text-3xl md:text-6xl">Welcome To EvaTouch Beauty</h1>
          <p className="text-2xl my-4 w-[450px]">Your one-stop shop for exquisite hair & make-up products</p>
          <div className="text-xl flex items-center gap-4 font-bold">
            <button className="px-5 py-4 bg-black text-white">SHOP NOW</button>
            <button className="px-5 py-4 bg-transparent text-black border-2 border-black">BOOK APPOINTMENT</button>
          </div>
        </div>
        <div className="border-2 border-black bg-[#fddd6b]">
          <Image src={landingImg} width={265} height={213} alt="Landing image" className="md:block hidden bg-transparent" />
          <Image src={landingImg} width={1000} height={1000} alt="Landing image" className="md:hidden block" />
          <div className="p-2">
            <p>Bella - Preorder</p>
            <p>Fron $320.00</p>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-between">
        <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
        <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
        <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
      </section>

      <div className="flex justify-center items-center gap-10">
        <Link href="">
            <button className="px-5 py-3 bg-transparent text-black border-2 border-black">Bridal MakeUp</button>
        </Link>
        <Link href="">
            <button className="px-5 py-3 bg-transparent text-black border-2 border-black">Soft Glam</button>
        </Link>
      </div>



    </>
  )
}
