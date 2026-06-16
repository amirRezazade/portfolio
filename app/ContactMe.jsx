import Socials from "@/components/Socials";
import Title from "@/components/Title";

export default function ContactMe(params) {
  return (
    <section id="contact" className="nav-control mt-10 sm:mt-15 md:my-20 xl:my-30">
      <div className="container mx-auto">
        <Title text={"تماس با"} />

        <div className="max-w-2xl mx-auto rounded-3xl p-3 py-3 mt-5 sm:mt-10 md:mt-18 px-3 xs:px-8 sm:px-20 md:px-6">
          <div className="bg-slate-900 rounded-2xl shadow-2xl px-5 py-10 sm:p-10 transform transition-all duration-300 border border-transparent hover:border-purple-500/50 hover:shadow-[#6366f1]/10">
            <p suppressHydrationWarning data-aos="fade-up" data-aos-delay="50" className="text-gray-300 mb-7">
              چیزی برای بحث دارید؟ به من پیام دهید تا صحبت کنیم.
            </p>
            <form action="https://formspree.io/f/xblpdyel" method="POST" className="space-y-6">
              <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="100" className="relative group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input type="text" name="name" minLength="3" placeholder="Your Name" className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50" required />
              </div>
              <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="200" className="relative group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <input type="email" name="email" placeholder="Your Email" className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50" required />
              </div>
              <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="300" className="relative group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <textarea name="message" placeholder="Your Message" className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50" required minLength="5"></textarea>
              </div>
              <button suppressHydrationWarning data-aos="fade-up" data-aos-delay="400" type="submit" className="w-full bg-linear-to-r from-[#6366f1] to-[#a855f7] text-white cursor-pointer py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                ارسال پیام
              </button>
            </form>
            <div suppressHydrationWarning data-aos="fade-up" data-aos-delay="1000" data-aos-duration="900" className="flex justify-evenly xs:justify-center items-center  xs:gap-5 mt-7">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
