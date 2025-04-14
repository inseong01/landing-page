export default function Section_1() {
  return (
    <>
      <section className="relative h-[100h] w-full bg-[#F5F5F5] text-[#5A80A5]">
        <div className="absolute -top-[100vh] m-auto flex h-[100vh] w-full items-end justify-center bg-linear-to-t from-white from-12% to-transparent to-100% px-40 py-15">
          <div className="text-4xl font-bold tracking-[5px]">
            프로젝트 둘러보기
          </div>
          <div className="absolute bottom-0 z-1 h-30 w-full shadow-[0_10px_10px_rgba(0,0,0,0.2)]"></div>
        </div>
      </section>
      <section className="h-fit w-full bg-[#F5F5F5] py-40 text-[#5A80A5]">
        <div className="flex w-full items-center justify-center">
          <div className="h-fit w-250">
            <div className="mb-25 flex flex-col items-center justify-center gap-5">
              <SubTitle text="방문 고객과 매장 관리자를 위한 웹 애플리케이션" />
              <div className="h-[97px] w-[396px] bg-amber-50">
                <img src="" alt="" />
              </div>
              <SubTitle text="QR 주문 / 매장 관리 서비스" />
            </div>
            <div className="relative m-auto w-[655px]">
              <TabletDevice />
              <div className="absolute right-0 -bottom-12">
                <MobileDevice />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SubTitle({ text }: { text: string }) {
  return <span className="text-xl">{text}</span>;
}

function TabletDevice() {
  return (
    <div className="flex h-[422px] w-[550px]">
      <img
        src="./src/assets/devices/tablet.png"
        alt="tablet img"
        className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

function MobileDevice() {
  return (
    <div className="flexh-[395px] w-[200px]">
      <img
        src="./src/assets/devices/phone.png"
        alt="phone img"
        className="rounded-[12px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
