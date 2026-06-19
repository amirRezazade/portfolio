import HeaderAnimation from "@/components/HeaderAnimation";
import ResumeDownload from "@/components/ResumeDownload";
import Socials from "@/components/Socials";
import TypeAnimation from "@/components/TypeAnimation";

export default function Header(params) {
  return (
    <header id="home" className="nav-control pt-12 sm:pt-22 pb-28 sm:pb-0 min-h-[80dvh] sm:min-h-[90dvh] md:h-dvh  relative">
      <div className="sm:h-full flex flex-col sm:flex-row justify-center items-center gap-y-13 xl:max-w-[80%] mx-auto">
        <div className="bg w-full sm:w-auto lg:max-w-fit flex items-start md:items-center justify-center">
          <div className="w-full pt-10 sm:pt-17  md:pt-0 sm:ps-4 lg:ps-12 lg:pe-5 2xl:pe-0 text-center">
            <h1 suppressHydrationWarning data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nowrap">
              <span> سلام من</span>
              <b className="font-extrabold bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"> امیر </b>
              <span> هستم</span>
            </h1>

            <TypeAnimation />
            <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="900" data-aos-duration="900" className="flex justify-center gap-4 sm:gap-1 md:gap-6 mb-5  mt-11">
              <a href="#project" className="btn-style  inline-block">
                <span>نمونه کار های من</span>
              </a>
              <ResumeDownload />
            </div>
            <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="1000" data-aos-duration="900" className="flex justify-center items-center gap-3 xs:gap-5 mt-7">
              <Socials />
            </div>
          </div>
        </div>

        <div className="w-full max-h-max lg:grow" suppressHydrationWarning data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
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
