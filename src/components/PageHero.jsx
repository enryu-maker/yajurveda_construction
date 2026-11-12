import HeroBg from "../assets/Home/Hero/Hero_bg.webp";

// Shared top band for every inner page: same city photo + navy overlay as the home hero,
// so each page opens in the brand's look. `children` sits under the intro (breadcrumb, buttons).
const PageHero = ({ title, intro, note, before, children }) => (
  <section className="relative text-white px-4 sm:px-8 lg:px-16 pt-36 lg:pt-44 pb-14 lg:pb-20 overflow-hidden">
    <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HeroBg})` }} />
    <div aria-hidden="true" className="absolute inset-0 bg-[#0a1128]/90" />
    <div className="relative max-w-7xl mx-auto">
      {before}
      <h1 className="font-[PoppinsSbold] text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-4xl text-balance">{title}</h1>
      {intro && <p className="mt-5 text-lg sm:text-xl leading-relaxed text-white/85 max-w-3xl font-[PoppinsRegular]">{intro}</p>}
      {note && <p className="mt-5 text-base font-[PoppinsItalic] text-white/70">{note}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
