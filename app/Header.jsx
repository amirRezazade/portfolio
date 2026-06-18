import HeaderAnimation from "@/components/HeaderAnimation";
import Socials from "@/components/Socials";
import TypeAnimation from "@/components/TypeAnimation";
import Link from "next/link";

export default function Header(params) {
  return (
    <header id="home" className="nav-control pt-12 sm:pt-18 pb-28 sm:pb-0 min-h-[80dvh] md:h-dvh  relative">
      <div className="sm:h-full flex flex-col sm:flex-row justify-center items-center gap-y-13 xl:max-w-[80%] mx-auto">
        <div className="bg w-full sm:w-auto lg:max-w-fit flex items-start md:items-center justify-center">
          <div className="w-full pt-10 sm:pt-17  md:pt-0 sm:ps-4 lg:ps-12 lg:pe-5 2xl:pe-0 text-center">
            <h1 suppressHydrationWarning data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nowrap">
              <span> سلام من</span>
              <b className="font-extrabold bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"> امیر </b>
              <span> هستم</span>
            </h1>

            <TypeAnimation />
            <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="900" data-aos-duration="900" className="flex justify-center gap-4 sm:gap-1 md:gap-6 my-5">
              <a href="#project" className="btn-style mt-6 inline-block">
                <span>نمونه کار های من</span>
              </a>
              <Link href="/AmirRezazade.pdf" download className="btn-style mt-6">
                <span className="inline-flex items-center gap-2">
                  دانلود رزومه
                  <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#ffffff"></path>
                      <path
                        d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
            <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="1000" data-aos-duration="900" className="flex justify-center items-center gap-3 xs:gap-5 mt-7">
              <Socials />
            </div>
          </div>
        </div>

        <div className="w-full  lg:grow" suppressHydrationWarning data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
          <HeaderAnimation />
        </div>
      </div>

      <div className="flex justify-center w-full absolute bottom-2  pointer-events-none">
        <span className="flex flex-col items-center gap-2 animate-bounce text-sm">
          scroll
          <svg fill="#8e51ff" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.293,16.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l4.293-4.293a1,1,0,0,1,1.414,1.414l-6,6a1,1,0,0,1-1.414,0Z"></path>
            </g>
          </svg>
        </span>
      </div>
    </header>
  );
}
