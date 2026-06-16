import "./card-hover-styles.css";
export default function SkillCart({ icon, name, aos }) {
  return (
    <div suppressHydrationWarning data-aos={aos} data-aos-duration="1000" className="glow-card w-30 md:w-40 aspect-square group relative cursor-pointer rounded-2xl">
      <div className="card">
        <span className="">{icon}</span>
        <span className="text-sm text-white">{name} </span>

        <div className="skill-card-star">✨</div>
      </div>
    </div>
  );
}
