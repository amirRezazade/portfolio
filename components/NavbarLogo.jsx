export default function NavbarLogo() {
  return (
    <span className="navbar-logo-mark" aria-hidden="true">
      <svg className="navbar-logo-svg" viewBox="0 0 64 64" role="img">
        <defs>
          <radialGradient id="navbarLogoPlanet" cx="35%" cy="28%" r="72%">
            <stop offset="0%" stopColor="var(--text)" stopOpacity="0.95" />
            <stop offset="42%" stopColor="var(--accent)" stopOpacity="0.88" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.86" />
          </radialGradient>
          <linearGradient id="navbarLogoOrbit" x1="8" x2="56" y1="32" y2="32">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.08" />
            <stop offset="42%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <ellipse className="navbar-logo-orbit navbar-logo-orbit--one" cx="32" cy="32" rx="27" ry="12" />
        <ellipse className="navbar-logo-orbit navbar-logo-orbit--two" cx="32" cy="32" rx="22" ry="9" />

        <path className="navbar-logo-code" d="M18.5 25.5 12.5 32l6 6.5" />
        <path className="navbar-logo-code" d="M45.5 25.5 51.5 32l-6 6.5" />

        <circle className="navbar-logo-planet-shadow" cx="32" cy="32" r="15" />
        <circle className="navbar-logo-planet" cx="32" cy="32" r="14" />
        <path className="navbar-logo-planet-line" d="M21 34.5c6.5-3 15.5-3.3 22 .4" />

        <text className="navbar-logo-text" x="32" y="36.6" textAnchor="middle">
          AR
        </text>

        <circle className="navbar-logo-satellite" cx="51.6" cy="22.4" r="3" />
      </svg>
    </span>
  );
}
