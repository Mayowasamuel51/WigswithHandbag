import { Vollkorn, Poppins } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"]})
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"]}, )


const ContactPage = () => {
  return (
    <section className="md:py-14">
        <div className="text-center py-10 md:py-14 shadow-md leading-10">
            <h1 className="font-bold text-xl md:text-4xl"><span className={poppins.className}>We are always available for you!</span></h1>
            <p><span className={vollkorn.className}>Need to make an enquiry or get in touch with us? Send us a mail at evatouchbeauty@gmail.com</span></p>
        </div>

        <p className="my-10 font-light"><span className={vollkorn.className}>Alternatively, you can fill our contact form. We make sure that you get a response as soon as possible</span></p>


        <form action="" className="flex flex-col gap-10">
            <div>
                <input type="text" name="" id="" placeholder="name" className="border-2 border-black md:h-16 px-5 text-black w-full" />
            </div>
            <div>
                <input type="text" name="" id="" placeholder="Phone Number" className="border-2 border-black md:h-16 px-5 text-black w-full" />
            </div>
            <div>
                <input type="text" name="" id="" placeholder="Email" className="border-2 border-black md:h-16 px-5 text-black w-full" />
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enquiry" className="border-2 border-black w-full resize-none p-5"></textarea>
            </div>
        </form>
    </section>
  )
}

export default ContactPage