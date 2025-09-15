import WHITE_LOGO_IMG from "@/assets/project/qr-order/qr-order-logo-white.png";
import DownMotionNav from "./banner-nav";

export default function BannerSection() {
  return (
    <section
      className={`relative h-[130vh] cursor-default bg-radial from-[#5a80a5] from-40% to-[#2c3e50] xl:h-[200vh]`}
    >
      {/* 전경 */}
      <div className="absolute top-0 left-0 z-9 flex h-dvh w-full items-center justify-center px-4 text-center text-white lg:px-10">
        <div className="flex flex-col items-center justify-center text-shadow-md">
          <p className="text-3xl font-bold tracking-widest max-[576px]:text-sm">
            설치 없이 사용하는 매장 관리
          </p>

          <div className="w-[75%]">
            <img src={WHITE_LOGO_IMG} alt="QR ORDER 로고" />
          </div>

          <p className="text-xl tracking-widest max-[576px]:text-sm">
            새로 출시된 서비스를 확인해보세요.
          </p>
        </div>

        <DownMotionNav />
      </div>
    </section>
  );
}
