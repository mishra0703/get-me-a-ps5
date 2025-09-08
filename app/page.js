import Link from "next/link";
import TutorialVideo from "@/components/TutorialVideo";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <section className="h-screen flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 sm:py-15 text-5xl font-bold max-sm:mt-[10vh] max-sm:text-3xl">
            <span className="bg-gradient-to-r from-[#ececec] via-blue-600 to-[#c6c6c6] text-transparent bg-clip-text">
              Get me a PS5
            </span>
            <span>
              <img
                src="/ps5.png"
                alt="ps5"
                className="w-20 h-20 rounded-lg max-sm:w-15 max-sm:h-15"
              />
            </span>
          </div>
          <p className="text-center max-sm:text-xs max-sm:my-5">
            A crowdfunding platform for creators to fund their projects.
          </p>
          <p className="text-center max-sm:text-xs max-sm:px-5 my-5 ">
            A place where your fans can buy you a PS5. Unleash the power of your
            fans and get your projects funded.
          </p>
          <div className="text-5xl max-sm:px-5 max-sm:text-3xl font-black py-15 bg-gradient-to-r from-[#9c27b0] via-pink-500 to-[#9c27b0] text-transparent bg-clip-text">
            Creators Fans | Nothing in between
          </div>
          <div className="flex gap-5 my-8 max-sm:scale-90">
            <Link href={"/login"}>
              <button className="cssbuttons-io-button text-lg px-4 py-2 group">
                Start Now
                <div className="cssbutton-icon">
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="text-black flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md font-bold tracking-wide border-gray-50 before:absolute before:w-full before:transition-all before:duration-300 before:hover:w-full before:-left-full hover:before:left-[0%] before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-9 before:aspect-square before:hover:scale-150 before:hover:duration-300 relative z-9 px-4 py-2 overflow-hidden border-2 rounded-full group cursor-pointer">
                Read More
                <svg
                  className="w-8 h-8 justify-end bg-emerald-500 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border-2 border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className=" group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </section>

        <div className="h-1.5 w-full bg-white/5 my-10"></div>

        <section className="w-full flex flex-col justify-center items-center gap-25 py-10">
          <div className="text-3xl font-bold max-sm:text-2xl max-sm:px-5 max-sm:text-center">
            Your fans and followers can buy you a PS5
          </div>
          <div className="cards w-full flex justify-around max-sm:flex-col max-sm:items-center max-sm:gap-20">
            <div className="card w-1/3 max-sm:w-full px-5 flex flex-col justify-center items-center gap-3">
              <img src="/first.jpg" className="rounded-full h-35 w-35" alt="" />
              <h1 className="text-2xl max-sm:text-3xl font-bold">Supporter</h1>
              <p className="text-md  text-center">
                We don't call them "customers" or "transactions". They are your{" "}
                <span className="font-[600] text-red-600">Supporters</span>.
              </p>
            </div>
            <div className="card w-1/3 max-sm:w-full px-5 flex flex-col justify-center items-center gap-3">
              <img
                src="/second.jpg"
                className="rounded-full h-35 w-35"
                alt=""
              />
              <h1 className="text-2xl font-bold">Funding for Fun</h1>
              <p className="text-md  text-center">
                Get Me a PS5 makes supporting{" "}
                <span className="font-[600] text-amber-300">Fun and Easy</span>.
              </p>
            </div>
            <div className="card w-1/3 max-sm:w-full px-5 flex flex-col justify-center items-center gap-3">
              <img src="/third.jpg" className="rounded-full h-35 w-35" alt="" />
              <h1 className="text-2xl max-sm:text-3xl font-bold">Easy to help</h1>
              <p className="text-md  text-center">
                In just a couple of taps, your fans can make the{" "}
                <span className="font-[600] text-green-600">transaction</span>{" "}
                and leave a message
              </p>
            </div>
          </div>
        </section>

        <div className="h-1.5 w-full bg-white/5 my-10"></div>

        <section className="flex flex-col items-center justify-center gap-15 py-10">
          <div className="stars w-full flex max-sm:flex-col gap-2 items-center justify-center max-sm:px-3">
            <div className = 'flex gap-2 items-center justify-center'>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="xs:h-16 xs:w-16"
              data-v-8e649083=""
            >
              <g clipPath="url(#clipId-1)">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#2E813A"
                ></path>
              </g>
              <defs>
                <clipPath id="clipId-1">
                  <rect fill="white" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="xs:h-16 xs:w-16"
              data-v-8e649083=""
            >
              <g clipPath="url(#clipId-1)">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#2E813A"
                ></path>
              </g>
              <defs>
                <clipPath id="clipId-1">
                  <rect fill="white" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="xs:h-16 xs:w-16"
              data-v-8e649083=""
            >
              <g clipPath="url(#clipId-1)">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#2E813A"
                ></path>
              </g>
              <defs>
                <clipPath id="clipId-1">
                  <rect fill="white" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="xs:h-16 xs:w-16"
              data-v-8e649083=""
            >
              <g clipPath="url(#clipId-1)">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#2E813A"
                ></path>
              </g>
              <defs>
                <clipPath id="clipId-1">
                  <rect fill="white" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="xs:h-16 xs:w-16"
              data-v-8e649083=""
            >
              <g clipPath="url(#clipId-1)">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#2E813A"
                ></path>
              </g>
              <defs>
                <clipPath id="clipId-1">
                  <rect fill="white" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            </div>
            <span className="text-2xl max-sm:text-base mx-5 font-sans">
              Loved by every Creators around the world
            </span>
          </div>
          <div className="w-full text-8xl max-sm:text-5xl font-black flex flex-col justify-center items-center gap-2">
            <span>Fund Your</span>
            <span>Creative Work</span>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="text-lg tracking-wide">
              Don't let your inside artist die.
            </div>
            <div className="text-lg tracking-wide max-sm:text-center max-sm:px-3 ">
              Do what you actually want , we'll handle the rest. 
            </div>
          </div>
          <div className="text-2xl max-sm:text-center max-sm:px-4 font-bold tracking-wide">
            It's Free and takes less than{" "}
            <span className="text-[#9c27b0]">2 minutes</span>{" "}
          </div>
        </section>

        <div className="h-1.5 w-full bg-white/5 my-10"></div>

        <section className="w-full flex flex-col justify-center items-center gap-10 py-5">
          <div className="text-5xl max-sm:text-2xl max-sm:text-center max-sm:px-2 font-bold">
            Learn why and how to use Get Me A PS5
          </div>
          <div className="w-auto h-[50vh] max-sm:h-auto max-w-[90vw]">
            <TutorialVideo />
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateMetadata() {
  return {
    title: "Get Me A PS5",
    description: "This website is a crowdfunding platform for getting a PS5",
  };
}
