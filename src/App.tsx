import BannerBackground from "./app/banner/background/background-index";
import BannerHeader from "./app/banner/header/header-index";
import Footer from "./app/footer/footer-index";
import Section_1 from "./app/section/section-1/section-index";
import Section_2 from "./app/section/section-2/section-index";

export default function App() {
  const clickedIdx: 0 | 1 = 0;
  return (
    <div className="h-screen w-full bg-[#F5F5F5] font-[Open_Sans]">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />

      <BannerHeader />
      <BannerBackground />

      {/* sec 1 */}
      <Section_1 />
      {/* nav */}
      <nav>
        <ul className="flex h-20 w-full items-center justify-center bg-[#F5F5F5]">
          <li
            className={`flex h-full w-[50%] items-center justify-center border-r-2 text-xl ${clickedIdx === 0 ? "border-t-2" : "border-b-2"}`}
          >
            list 1
          </li>
          <li
            className={`flex h-full w-[50%] items-center justify-center text-xl ${clickedIdx !== 0 ? "border-t-2" : "border-b-2"}`}
          >
            list 2
          </li>
        </ul>
      </nav>
      {/* sec 2 - 1 */}
      <Section_2 />
      {/* sec 2 - 2 */}
      <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
        <div className="flex w-[1000px] flex-row-reverse items-center justify-between gap-25">
          <div className="w-full">
            <div className="mb-12">
              <h2 className="mb-5 block text-4xl font-bold text-[#5A80A5]">
                입맛대로,
                <br />
                좌석 배치가 가능해요.
              </h2>
              <p>매장 테이블 배치에 따라 좌석을 관리할 수 있어요.</p>
            </div>
            <p>*좌석 수정은 모바일 외 기기에서 할 수 있어요. </p>
          </div>
          <div className="relative flex h-fit w-full items-center justify-center">
            <TabletDevice />
          </div>
        </div>
      </section>
      {/* sec 3 */}
      <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
        <div className="flex w-[1000px] items-center justify-between gap-25">
          <div className="w-full">
            <div className="mb-12">
              <h2 className="mb-5 block text-4xl font-bold text-[#5A80A5]">
                화면이 작아도,
                <br />
                보기 쉽게 했어요.
              </h2>
              <p>
                사용하는 기기의 너비에 따라 화면이 조정돼요.
                <br />
                좌석 탭은 가로로 회전해야 확인할 수 있어요.
              </p>
            </div>
            <p>*모바일에서는 좌석 조회만 가능해요. </p>
          </div>
          <div className="relative flex h-fit w-full items-center justify-center">
            <MobileDeviceBox />
          </div>
        </div>
      </section>
      {/* sec 4 */}
      <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
        <div className="flex flex-col gap-8">
          <p className="text-center text-3xl font-bold">
            설치 비용 없이 <br /> 매장 관리를 시작해보세요!
          </p>
          <div className="h-[97px] w-[396px] bg-amber-100">
            <img src="" alt="" />
          </div>
        </div>
      </section>
      {/* sec 5 */}
      <section className="flex h-fit w-full items-center justify-center bg-white py-24 text-white shadow-[0_0px_35px_rgba(0,0,0,0.15)]">
        <div className="flex h-fit w-[1000px] items-start justify-between">
          <div className="mb-10 w-full">
            <div className="w-70 text-4xl font-bold break-keep text-[#5A80A5] capitalize">
              <h2>다른 프로젝트 살펴보기</h2>
            </div>
          </div>
          <ul className="flex h-full w-full gap-10">
            <li className="flex h-90 max-w-60 flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-[#ACB4BA] p-6">
              <div className="capitalize">
                <span className="text-sm">1인 개발</span>
                <h3 className="text-3xl font-bold">project 1</h3>
              </div>
              <div className="flex w-full justify-end">
                <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white p-3">
                  <img
                    src="./src/assets/icon/filp-card.svg"
                    alt="filp card icon"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
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
function MobileDevice() {
  return (
    <div className="flex h-85 w-44">
      <img
        src="./src/assets/devices/phone.png"
        alt="phone img"
        className="rounded-[12px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
function MobileDeviceBox() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-end gap-10">
        <MobileDevice />
        <div className="flex flex-col gap-10">
          <div>
            <MobileDevice />
          </div>
          <div>
            <MobileDevice />
          </div>
        </div>
      </div>
    </div>
  );
}
