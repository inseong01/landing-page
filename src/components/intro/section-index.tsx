export default function IntroSection() {
  return (
    <section className="relative w-full bg-[#F5F5F5] text-[#5A80A5]">
      <div className="absolute -top-[100vh] m-auto flex h-[100vh] w-full items-end justify-center bg-linear-to-t from-white from-12% to-transparent to-100% px-8 py-10 lg:px-40 lg:py-15">
        <div className="text-xl font-bold tracking-[3px] md:text-3xl lg:tracking-[5px] xl:text-4xl">
          프로젝트 살펴보기
        </div>

        <div className="absolute bottom-0 z-99 h-30 w-full shadow-[0_10px_10px_rgba(0,0,0,0.2)]"></div>
      </div>
    </section>
  );
}
