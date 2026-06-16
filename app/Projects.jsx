import Title from "@/components/Title";

export default function Projects(params) {
  return (
    <section id="project" className="nav-control mt-10 sm:mt-15 md:my-20">
      <div className="container max-w-7xl mx-auto">
        <Title text={"پروژه های"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-5 sm:mt-10 md:mt-18 px-8 sm:px-20 md:px-6">
          <div suppressHydrationWarning data-aos="fade-left" data-aos-duration="1000" className="">
            <div className="group relative mx-auto max-w-100 sm:max-w-117.5 w-full">
              <div className="relative overflow-hidden bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl group-hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                  <div className="relative rounded-lg aspect-5/4 overflow-hidden">
                    <img src="images/digi-media.jpg" alt="digi-media" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-semibold bg-linear-to-r from-blue-200 from-50% to-violet-300 bg-clip-text text-transparent">digi-media</h3>
                    <p className="text-gray-100 text-sm leading-relaxed line-clamp-2">سایت معرفی فیلم و سریال ایرانی و خارجی</p>
                    <div className="flex items-center justify-end flex-wrap gap-2 pt-2 text-[10px]">
                      <span className="px-2.5 py-0.5 border rounded-full text-slate-300">API</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-cyan-400">Tailwind</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-amber-300">JS</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-blue-400">React</span>
                      <span className="px-2.5 py-0.5 border rounded-full  border-white">Next</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105" href="https://github.com/amirRezazade/digi-media" target="-blank">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </svg>
                        <span className="text-sm font-medium">Details</span>
                      </a>
                      <a href="https://amirrezazade.github.io/digi-media/" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 justify-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning data-aos="fade-up" data-aos-duration="1000" className="">
            <div className="group relative mx-auto max-w-100 sm:max-w-117.5 w-full">
              <div className="relative overflow-hidden bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl group-hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                  <div className="relative rounded-lg aspect-5/4 overflow-hidden">
                    <img src="images/digi-plus.jpg" alt="digi-plus" className="w-full  object-cover " />
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-semibold bg-linear-to-r from-blue-200 from-50% to-violet-300 bg-clip-text text-transparent">Digi-plus</h3>
                    <p className="text-gray-100 text-sm leading-relaxed line-clamp-2">وبسایت فروشگاهی</p>
                    <div className="flex items-center justify-end gap-2 pt-2 text-[10px]">
                      <span className="px-2.5 py-0.5 border rounded-full text-slate-300">API</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-cyan-400">Tailwind</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-amber-300">JS</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-blue-400">React</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105" href="https://github.com/amirRezazade/Digi-plus" target="-blank">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </svg>
                        <span className="text-sm font-medium">Details</span>
                      </a>
                      <a href="https://digi-plus.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 justify-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning data-aos="fade-right" data-aos-duration="1000" className="">
            <div className="group relative mx-auto max-w-100 sm:max-w-117.5 w-full">
              <div className="relative overflow-hidden bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl group-hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                  <div className="relative rounded-lg aspect-5/4 overflow-hidden">
                    <img src="images/dashboard.jpg" alt="Ecme" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-semibold bg-linear-to-r from-blue-200 from-50% to-violet-300 bg-clip-text text-transparent">Ecme</h3>
                    <p className="text-gray-100 text-sm leading-relaxed line-clamp-2">پنل ادمین وبسایت فروشگاهی</p>
                    <div className="flex items-center justify-end gap-2 pt-2 text-[10px]">
                      <span className="px-2.5 py-0.5 border rounded-full text-slate-300">API</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-cyan-400">Tailwind</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-amber-300">JS</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105" href="https://github.com/amirRezazade/Dashboard" target="-blank">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </svg>
                        <span className="text-sm font-medium">Details</span>
                      </a>
                      <a href="https://amirrezazade.github.io/Dashboard/" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 justify-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div suppressHydrationWarning data-aos="fade-left" data-aos-duration="1000" className="">
            <div className="group relative mx-auto max-w-100 sm:max-w-117.5 w-full">
              <div className="relative overflow-hidden bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl group-hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                  <div className="relative rounded-lg aspect-5/4 overflow-hidden">
                    <img src="images/play-host.jpg" alt="playhost" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-semibold bg-linear-to-r from-blue-200 from-50% to-violet-300 bg-clip-text text-transparent">play-host</h3>
                    <p className="text-gray-100 text-sm leading-relaxed line-clamp-2">وبسایت زیبا و مدرن برای معرفی بازی در پلتفرم های مختلف</p>
                    <div className="flex items-center justify-end gap-2 pt-2 text-[10px]">
                      <span className="px-2.5 py-0.5 border rounded-full text-slate-300">API</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-cyan-400">Tailwind</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-amber-300">JS</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105" href="https://github.com/amirRezazade/game-site" target="-blank">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </svg>
                        <span className="text-sm font-medium">Details</span>
                      </a>
                      <a href="https://amirrezazade.github.io/game-site/" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 justify-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning data-aos="fade-up" data-aos-duration="1000" className="">
            <div className="group relative mx-auto max-w-100 sm:max-w-117.5 w-full">
              <div className="relative overflow-hidden bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl group-hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                  <div className="relative rounded-lg aspect-5/4 overflow-hidden">
                    <img src="images/eduport.jpg" alt="eduport" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-semibold bg-linear-to-r from-blue-200 from-50% to-violet-300 bg-clip-text text-transparent">eduport</h3>
                    <p className="text-gray-100 text-sm leading-relaxed line-clamp-2">وبسایت آموزشی زیبا ( html , css , js )</p>
                    <div className="flex items-center justify-end gap-2 pt-2 text-[10px]">
                      <span className="px-2.5 py-0.5 border rounded-full text-orange-500">HTML</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-sky-600">CSS</span>
                      <span className="px-2.5 py-0.5 border rounded-full text-amber-300">JS</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105" href="https://github.com/amirRezazade/eduport" target="-balnk">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </svg>
                        <span className="text-sm font-medium">Details</span>
                      </a>
                      <a href="https://amirrezazade.github.io/eduport/" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 justify-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
