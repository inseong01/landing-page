import CategoryList from "./section-category";

export default function Section_4() {
  return (
    <section className="bg-[#5A80A5] pb-20">
      <div className="flex h-fit w-full items-center justify-between overflow-hidden rounded-b-[50px] bg-white px-80 py-20 text-[#5A80A5] shadow-[0_40px_35px_rgba(0,0,0,0.25)]">
        <div className="w-lg">
          <span className="mb-2 block font-bold">매장 관리</span>
          <h2 className="mb-7 block w-lg text-5xl font-bold capitalize">
            관리자 웹
          </h2>
          <div className="mb-10">
            <p>
              웹과 모바일에서 주문 처리 및 좌석 관리를 통합적으로 처리하는
              관리자 전용 서비스입니다.
            </p>
            <br />
            <p>
              좌석 수정 기능을 통해 개인 맞춤 매장 좌석 배치가 가능하며
              관리자에게 높은 자유도와 유연성을 제공하고자 합니다.
            </p>
          </div>
          <nav>
            <ul className="flex w-fit items-center gap-2 overflow-hidden rounded-4xl border-1 p-1 text-sm">
              <CategoryList />
            </ul>
          </nav>
        </div>
        <div className="flex h-120 w-143 items-center justify-end gap-6">
          <div className="flex h-87 w-120">
            <img
              src="./src/assets/devices/tablet.png"
              alt="tablet img"
              className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
