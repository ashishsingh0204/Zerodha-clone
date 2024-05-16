import Image from "next/image";
import TopNavBar from "../ui/landing-page/top-nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <TopNavBar></TopNavBar>

      {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
      <div className="flex flex-col m-auto justify-center item-center py-10">
        <div className="flex flex-row justify-center">
          <img
            src="https://zerodha.com/static/images/landing.png"
            className="w-1/2 md:w-2/3"
            alt="Zerodha"
          />
        </div>
        <div className="flex flex-col justify-center text-center my-20 text-grey-z">
          <h2 className="text-4xl  font-medium">Invest in everything</h2>
          <p className="text-xl my-5">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <div className="flex flex-row justify-center">
            <button className="bg-blue-z w-36 h-11 rounded-md text-white">
              Sign up Now
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between p-28">
          <div className="flex w-5/12">
            <Image
              src="https://zerodha.com/static/images/largest-broker.svg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="flex flex-col w-6/12 text-gray-z">
            <h2 className="text-3xl font-medium">
              Largest stock broker in India
            </h2>
            <p className="py-10">
              1.3+ Crore Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="flex flex-row justify-between px-5">
              <ul className="list-disc">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
              <ul className="list-disc">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <p className="py-5">
              <a target="_blank" href="https://zerodha.com/media">
                <img src="https://zerodha.com/static/images/press-logos.png" />
              </a>
            </p>
          </div>
        </div>
        <div className="p-28 flex flex-row justify-between">
          <div className="w-5/12 flex flex-col space-y-5 text-gray-z">
            <h2 className="text-4xl  font-medium">Trust with confidence</h2>
            <div>
              <h3 className="text-xl font-semibold py-3">
                Customer-first always
              </h3>
              <p className="font-light">
                That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
                crores worth of equity investments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold py-3">
                No spam or gimmicks
              </h3>
              <p className="font-light">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold py-3">
                The Zerodha universe
              </h3>
              <p className="font-light">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold py-3">
                Do better with money
              </h3>
              <p className="font-light">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money
              </p>
            </div>
          </div>
          <div className="flex flex-col w-6/12">
            <div>
              <img
                src="https://zerodha.com/static/images/ecosystem.png"
                alt="zerodha product logos"
              />
            </div>
            <div className="flex flex-row justify-between px-28 font-medium">
              <a
                href="https://zerodha.com/products"
                target="_blank"
                className="text-blue-z"
              >
                Explore our products
              </a>
              <a
                href="https://kite-demo.zerodha.com/dashboard"
                target="_blank"
                className="text-blue-z"
              >
                Try Kite demo{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="p-28 flex flex-row justify-between">
          <div className="text-gray-z w-5/12 space-y-5">
            <h2 className="text-4xl font-medium py-5">Unbeatable pricing</h2>
            <p className="font-light">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
            <p>
              <a
                href="https://zerodha.com/products"
                target="_blank"
                className="text-blue-z"
              >
                See pricing{" "}
              </a>
            </p>
          </div>
          <div className="w-6/12 border-gray-z-2 flex flex-row text-gray-z">
            <div className="h-50 w-1/2 text-center flex flex-col justify-between p-5 border border-gray-z">
              <p className="text-5xl font-medium">₹0</p>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="h-50 w-1/2 text-center flex flex-col justify-between p-5 border border-r-gray-z border-y-gray-z">
              <p className="text-5xl font-medium">₹20</p>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between p-28">
          <div className="flex w-5/12">
            <Image
              src="https://zerodha.com/static/images/index-education.svg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="flex flex-col w-6/12 text-gray-z space-y-5">
            <h2 className="text-2xl font-medium py-5">
              Free and open market education
            </h2>
            <p className="font-base">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <p>
              <a
                href="https://zerodha.com/products"
                target="_blank"
                className="text-blue-z font-semibold"
              >
                Varsity
              </a>
            </p>
            <p className="font-base">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <p>
              <a
                href="https://zerodha.com/products"
                target="_blank"
                className="text-blue-z  font-semibold"
              >
                TradingQ&A
              </a>
            </p>
          </div>
          
        </div>
        <div className="flex flex-col justify-center text-center my-20 text-grey-z">
            <h2 className="text-4xl  font-medium">Open a Zerodha account</h2>
            <p className="text-xl my-5 font-light ">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
            <div className="flex flex-row justify-center">
              <button className="bg-blue-z w-36 h-11 rounded-md text-white">
                Sign up Now
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
