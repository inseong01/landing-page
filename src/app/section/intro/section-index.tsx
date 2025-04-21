export default function IntroSection() {
  return (
    <section className="relative h-[100h] w-full bg-[#F5F5F5] text-[#5A80A5]">
      <div className="absolute -top-[100vh] m-auto flex h-[100vh] w-full items-end justify-center bg-linear-to-t from-white from-12% to-transparent to-100% px-40 py-15">
        <div className="text-4xl font-bold tracking-[5px]">
          프로젝트 살펴보기
        </div>
        <div className="absolute bottom-0 z-99 h-30 w-full shadow-[0_10px_10px_rgba(0,0,0,0.2)]"></div>
      </div>
    </section>
  );
}
