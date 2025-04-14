export default function Section_2() {
  return (
    <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
      <div className="flex w-[1000px] items-center justify-between">
        <div className="w-full">
          <div className="mb-12">
            <h2 className="mb-5 block text-4xl font-bold text-[#5A80A5]">
              손쉽게,
              <br />
              시작할 수 있어요.
            </h2>
            <p className="w-60">
              별도 프로그램과 기기 설치 없이 바로 사용할 수 있어요.
            </p>
          </div>
        </div>
        <div className="relative flex h-fit w-full items-center justify-center">
          <TabletDevice />
        </div>
      </div>
    </section>
  );
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
