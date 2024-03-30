import { Vollkorn } from "next/font/google";
const vollkorn = Vollkorn({ subsets: ["latin"] })
import { Providers } from "./providers";

export const metadata = {
  title: "EvaTouch",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={vollkorn.className}>
        <div className="">
          <section>
            <Providers>
              {children}
            </Providers>
          </section>
        </div>
      </body>
    </html>
  );
}

