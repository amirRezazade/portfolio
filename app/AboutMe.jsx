import Title from "@/components/Title";
import Link from "next/link";

export default function AboutMe(params) {
  return (
    <section id="about" className="nav-control min-h-screen centered text-center mt-5 sm:mt-15">
      <div className="container mx-auto max-w-5xl">
        <Title text={"درباره"} />
        <div className="flex flex-col-reverse md:flex-row-reverse md:justify-center md:items-center gap-4 mt-5 sm:mt-10 md:mt-20">
          <div suppressHydrationWarning data-aos="fade-right" data-aos-duration="1600" className="px-8 md:px-4 md:w-1/2 flex flex-col gap-6">
            <div className="p-6 bg-linear-to-br from-slate-900/90 border border-transparent transition-colors duration-300 rounded-xl to-slate-800/90 hover:border-purple-500/50 hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-slate-800">
                  <svg fill="#7f6ce0" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-lg text-end">Front-End Developer</h4>
                  <p className="text-start">طراحی و پیاده‌سازی وب‌سایت‌ها و وب‌اپلیکیشن‌های رسپانسیو و مدرن</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-linear-to-br from-slate-900/90 border border-transparent transition-colors duration-300 rounded-xl to-slate-800/90 hover:border-purple-500/50 hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-slate-800">
                  <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="User / User_01">
                        <path id="Vector" d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="#7f6ce0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-lg text-end">UI/UX Implementation</h4>
                  <p className="text-start">پیاده‌سازی طراحی‌های کاربری و تبدیل ایده‌ها به صفحات وب کاربردی و زیبا</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-linear-to-br from-slate-900/90 border border-transparent transition-colors duration-300 rounded-xl to-slate-800/90 hover:border-purple-500/50 hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-slate-800">
                  <svg fill="#7f6ce0" width="23px" height="23px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#7f6ce0" strokeWidth="0.00032">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>rocket-launch</title>
                      <path d="M31.246 1.914c-0.045-0.633-0.555-1.134-1.189-1.163l-0.003-0c-6.221-0.261-11.757 2.378-16.697 7.999h-9.358c-0.583 0-1.072 0.399-1.211 0.939l-0.002 0.009-2 8c-0.024 0.091-0.037 0.195-0.037 0.303 0 0.69 0.56 1.25 1.25 1.25 0 0 0 0 0 0h4.488c-0.204 0.401-0.41 0.788-0.612 1.203-0.080 0.16-0.126 0.348-0.126 0.547 0 0.345 0.14 0.658 0.366 0.884l4 4c0.226 0.226 0.539 0.365 0.883 0.365 0.206 0 0.4-0.050 0.572-0.138l-0.007 0.003c0.398-0.202 0.791-0.409 1.186-0.614v4.655c0.001 0.69 0.56 1.249 1.25 1.25h0c0.001 0 0.002 0 0.004 0 0.106 0 0.209-0.014 0.308-0.039l-0.008 0.002 8-2c0.548-0.14 0.947-0.63 0.947-1.212 0-0 0-0 0-0v0-9.349c5.114-4.274 8.502-9.596 7.996-16.893zM3.601 16.75l1.375-5.5h6.362c-1.166 1.573-2.329 3.37-3.381 5.239l-0.135 0.261zM20.75 27.18l-5.5 1.375v-4.395c2.163-1.196 3.96-2.331 5.689-3.554l-0.189 0.127zM11.241 23.473l-2.725-2.723c5.793-11.584 12.442-17.329 20.28-17.514 0.061 9.119-6.953 14.768-17.556 20.236zM23 5.75c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM23 9.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0 0.414-0.336 0.75-0.75 0.75h-0zM4.482 23.752l-0.482-0.002c-0 0-0 0-0.001 0-0.523 0-0.97 0.321-1.157 0.777l-0.003 0.008-2 5c-0.057 0.138-0.090 0.297-0.090 0.465 0 0.69 0.56 1.25 1.25 1.25v0c0 0 0.001 0 0.001 0 0.166 0 0.325-0.033 0.47-0.093l-0.008 0.003 5.004-1.996c0.446-0.181 0.76-0.6 0.785-1.095l0-0.003c0.021-0.398 0.048-0.744 0.070-1.041 0.062-0.232 0.098-0.498 0.098-0.772 0-0.665-0.209-1.281-0.565-1.786l0.007 0.010c-0.655-0.713-1.565-0.717-3.379-0.725zM5.83 26.832c-0.008 0.096-0.016 0.197-0.023 0.303l-1.564 0.625 0.603-1.506c0.388 0.004 0.757 0.008 1.024 0.023-0.009 0.17-0.024 0.367-0.039 0.555z"></path>
                    </g>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-lg text-end">Performance Optimization</h4>
                  <p className="text-start">بهینه‌سازی سرعت و کارایی وب‌سایت‌ها برای تجربه‌ای روان‌تر</p>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning data-aos="fade-left" data-aos-duration="1600" className="px-8 md:px-4 text-center md:w-1/2">
            <h1 className="text-xl sm:text-2xl">توسعه دهنده‌ وب - برنامه نویس فرانت اند</h1>
            <p className="my-4 text-sm sm:text-base lg:text-[17px] leading-6 md:leading-8">سلام! من امیر رضازاده هستم، توسعه‌دهنده‌ی فرانت‌اند و علاقه‌مند به دنیای طراحی و برنامه‌نویسی وب. از سال 1402 مسیر یادگیری HTML، CSS، JavaScript و React رو شروع کردم و هر روز با انگیزه بیشتری در حال تمرین و ساخت پروژه‌های مختلف هستم.</p>
            <p className="my-4 text-sm sm:text-base lg:text-[17px] leading-6 md:leading-8">من به تجربه کاربری، طراحی مینیمال و نوشتن کد تمیز علاقه‌مندم. در کنار یادگیری تکنولوژی‌ها، به درک بهتر اصول طراحی و رفتار کاربر هم توجه می‌کنم. هدفم اینه که به عنوان یک توسعه‌دهنده‌ی حرفه‌ای وارد دنیای کار بشم، در تیم‌های خلاق همکاری کنم و پروژه‌هایی بسازم که هم زیبا باشن و هم کاربردی.</p>
            <div className="flex flex-col gap-3 px-5 my-6 text-sm sm:text-base sm:flex-row sm:justify-center">
              <a href="#contact" className="btn-style inline-block">
                <span>تماس با من</span>
              </a>
              <Link href="/AmirRezazade.pdf" download className="btn-style">
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
          </div>
        </div>
        <div suppressHydrationWarning data-aos="fade-up" data-aos-duration="1200" className="mt-7 md:mt-10 xl:mt-20 select-none overflow-x-auto">
          <img className="w-full h-auto object-cover min-w-157 px-3" src="https://ghchart.rshah.org/amirRezazade" alt="my GitHub Contributions" />
        </div>
      </div>
    </section>
  );
}
