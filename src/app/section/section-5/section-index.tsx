export default function PromotionBanner() {
  return (
    <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
      <div className="flex flex-col gap-8">
        <p className="text-center text-3xl font-bold">
          설치 비용 없이 <br /> 매장 관리를 시작해보세요!
        </p>
        <div className="flex w-[396px]">
          <img src="./src/assets/logo.png" alt="qr order 로고" />
        </div>
        <div className="text-center">
          <a className="text-xl text-[#5A80A5] hover:underline" href="#">
            깃허브 저장소 훑어보기
          </a>
        </div>
      </div>
    </section>
  );
}
