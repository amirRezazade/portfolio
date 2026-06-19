import Image from "next/image";
import "./headerAnimation.css";

export default function HeaderAnimation() {
  return (
    <div className="relative py-10 xs:py-15">
      <div className="absolute top-1/2 left-1/2 aspect-square icons-parent  -translate-1/2 w-2/3 lg:w-[55%] xl:w-3/5 2xl:w-1/2 rounded-full  ">
        <Image width={48} height={48} className="absolute top-0 left-0 size-10 xs:size-12 md:size-14 " src="/images/header-icons/react.png" alt="react" />
        <Image width={48} height={48} className="absolute bottom-0 left-0 size-10 xs:size-12 md:size-14 " src="/images/header-icons/javascript.png" alt="java script" />
        <Image width={48} height={48} className="absolute top-0 right-0 size-10 xs:size-12 md:size-14 " src="/images/header-icons/git.png" alt="git " />
        <Image width={48} height={48} className="absolute bottom-0 right-0 size-10 xs:size-12 md:size-14 " src="/images/header-icons/html.png" alt=" html" />
      </div>

      <div className="flex justify-center items-center w-full rotate-y-180 px-10 xs:px-15 sm:px-9 md:px-10">
        <Image className="object-containt floating-animation " src={"/images/astronaut.png"} alt="astronaut" width={450} height={350} />
      </div>
    </div>
  );
}
