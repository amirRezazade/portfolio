export default function Title({ text }) {
  return (
    <h3 suppressHydrationWarning data-aos="zoom-in-up" data-aos-duration="800" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
      {text}
      <span className="bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"> من</span>
    </h3>
  );
}
