import PhoneDevice from "../../../components/app/device/phone";
import TabletDevice from "../../../components/app/device/tablet";

export default function PlatformOverview() {
  return (
    <section className="h-fit w-full bg-[#F5F5F5] py-40 text-[#5A80A5]">
      <div className="flex w-full items-center justify-center">
        <div className="h-fit w-250">
          <div className="mb-25 flex flex-col items-center justify-center gap-3">
            <span className="text-xl">
              방문 고객과 매장 관리자를 위한 웹 애플리케이션
            </span>
            <div className="text-center">
              <div className="flex w-[396px]">
                <img src="./src/assets/logo.png" alt="qr order 로고" />
              </div>
              <span className="text-xl">QR 주문 / 매장 관리 서비스</span>
            </div>
          </div>
          <div className="relative m-auto w-[655px]">
            <TabletDevice />
            <div className="absolute right-0 -bottom-12">
              <PhoneDevice />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
