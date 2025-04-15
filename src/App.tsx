import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import BannerBackground from "./app/banner/background/background-index";
import BannerHeader from "./app/banner/header/header-index";
import Footer from "./app/footer/footer-index";
import CategoryTransition from "./app/nav/main/category-transition";
import IntroSection from "./app/section/section-1/section-index";
import PlatformOverview from "./app/section/section-2/section-index";
import TabletDeviceView from "./app/section/section-3/section-index";
import MultiMobileDeviceView from "./app/section/section-4/section-index";
import PromotionBanner from "./app/section/section-5/section-index";
import OtherProjects from "./app/section/section-6/section-index";

export const CategoryContext = createContext(0);
export const SetCategoryContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => {});

export default function App() {
  const [clickedIdx, setClickedIdx] = useState(0);

  return (
    <div className="h-screen w-full bg-[#F5F5F5] font-[Open_Sans]">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />
      {/* banner */}
      <BannerHeader />
      <BannerBackground />
      {/* intro */}
      <IntroSection />
      {/* overview */}
      <PlatformOverview />
      <CategoryContext.Provider value={clickedIdx}>
        <SetCategoryContext.Provider value={setClickedIdx}>
          {/* nav */}
          <CategoryTransition />
          {/* category project box */}
          <CategoryProjectBox />
        </SetCategoryContext.Provider>
      </CategoryContext.Provider>
      {/* other projects */}
      <OtherProjects />
      {/* footer */}
      <Footer />
    </div>
  );
}

function CategoryProjectBox() {
  const clickedIdx = useContext(CategoryContext);

  return <>{clickedIdx === 0 ? <AdminService /> : <CustomerService />}</>;
}

function AdminService() {
  return (
    <>
      <TabletDeviceView
        isReverse={false}
        title={
          <>
            손쉽게, <br />
            시작할 수 있어요.
          </>
        }
        desc={"별도 프로그램과 기기 설치 없이 바로 사용할 수 있어요."}
      />
      <TabletDeviceView
        isReverse={true}
        title={
          <>
            입맛대로, <br />
            배치할 수 있어요.
          </>
        }
        desc={"매장 테이블 위치에 따라 좌석을 관리할 수 있어요."}
        caution={"*좌석 수정은 모바일 외 기기에서 할 수 있어요."}
      />
      <MultiMobileDeviceView />
      <PromotionBanner />
    </>
  );
}

function CustomerService() {
  return <section className="h-dvh w-full bg-[#F5F5F5]"></section>;
}
