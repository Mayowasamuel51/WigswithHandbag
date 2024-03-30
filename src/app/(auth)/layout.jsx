import { Vollkorn } from "next/font/google";
import "../globals.css"

const vollkorn = Vollkorn({ subsets: ["latin"] })
  
export default function AuthLayout({ children }) {
    return (
        <div className="">
            {children}
        </div>
    );
  }