import Image from "next/image";
import "./bg.css";
export default function Background(params) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-1  ">
      <Image fill className="object-cover" src="/images/background.webp" alt="world" />
      <div className="bg-linear-to-l from-black/70 to-transparent absolute w-full h-full top-0 right-0">
        <div className="star"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-4"></div>
        <div className="meteor meteor-5"></div>
        <div className="meteor meteor-6"></div>
        <div className="meteor meteor-7"></div>
        <div className="meteor meteor-8"></div>
        <div className="meteor meteor-9"></div>
        <div className="meteor meteor-10"></div>
        <div className="meteor meteor-11"></div>
        <div className="meteor meteor-12"></div>
        <div className="meteor meteor-13"></div>
        <div className="meteor meteor-14"></div>
        <div className="meteor meteor-15"></div>
      </div>
    </div>
  );
}
