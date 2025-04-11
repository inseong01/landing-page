export default function Section_2() {
  return (
    <section className="flex h-svh w-full items-center justify-between bg-[#5A80A5] px-80 py-24 text-white">
      <div className="w-lg tracking-widest">
        <div className="mb-12">
          <span className="mb-1 block">주문과 매장 관리 솔루션</span>
          <h2 className="block text-5xl font-bold">QR-ORDER</h2>
        </div>
        <div className="flex items-center gap-3">
          <p>2024.11.~2025.03.</p>
          <div className="h-[14px] w-[1px] bg-white"></div>
          <p>1인 개발</p>
        </div>
      </div>
      <div className="relative flex h-fit w-full items-center justify-center text-black">
        <div className="flex h-110 w-143">
          <img
            src="./src/assets/devices/tablet.png"
            alt="tablet img"
            className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="absolute right-15 -bottom-12 flex h-85 w-44">
          <img
            src="./src/assets/devices/phone.png"
            alt="phone img"
            className="rounded-[12px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
