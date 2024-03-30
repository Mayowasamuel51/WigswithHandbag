import "../globals.css"
import { Vollkorn } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";


const vollkorn = Vollkorn({ subsets: ["latin"] })
export default function PageLayout({ children }) {

    return (
        <>
            <div className="md:px-20 px-4">
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )

}