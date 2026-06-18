"use client";
import TypeIt from "typeit-react";

export default function TypeAnimation(params) {
  return (
    <p suppressHydrationWarning data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className="mt-7 md:mt-11 leading-8 sm:text-lg md:text-xl lg:text-2xl">
      {
        <TypeIt
          options={{
            speed: 50,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance.type("دانشجوی رشته مهندسی کامپیوتر").pause(2000).delete().type("توسعه‌ دهنده‌ی فرانت‌ اند").pause(2000).delete().type('<span class=" font-bold text-nowrap bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">عاشق کدهای تمیز و کاربردی</span>').pause(2500);
            return instance;
          }}
        />
      }
    </p>
  );
}
