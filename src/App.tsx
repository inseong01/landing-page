import { createContext, Dispatch, SetStateAction, useState } from "react";
import BannerBackground from "./app/banner/background/background-index";
import Footer from "./app/footer/footer-index";
import CategoryTransition from "./app/nav/main/category/transition-index";
import IntroSection from "./app/section/intro/section-index";
import PlatformOverview from "./components/app/section/platform-overview/section-index";
import OtherProjects from "./app/section/other-projects/section-index";
import AdminService from "./app/section/project/qr-order/admin/section-index";
import CustomerService from "./app/section/project/qr-order/customer/section-index";

export const CategoryContext = createContext(0);
export const SetCategoryContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => {});

export default function App() {
  return (
    <div className="h-screen w-full font-[Open_Sans]">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />
      {/* banner */}
      <BannerBackground />
      {/* intro */}
      <IntroSection />
      {/* overview */}
      <PlatformOverview
        simple_product_info={"방문 고객과 매장 관리자를 위한 웹 애플리케이션"}
        main_product_src="./src/assets/logo.png"
        main_product_alt="qr order logo"
        serviceCategory={"QR 주문 / 매장 관리 서비스"}
        tablet_src="./src/assets/devices/tablet.png"
        tablet_alt="tablet img"
        phone_src="./src/assets/devices/phone.png"
        phone_alt="phone img"
      />
      {/* CategoryProjectBox */}
      <CategoryProjectBox />
      {/* other projects */}
      <OtherProjects />
      {/* footer */}
      <Footer />
    </div>
  );
}

function CategoryProjectBox() {
  const [clickedIdx, setClickedIdx] = useState(0);

  return (
    <CategoryContext.Provider value={clickedIdx}>
      <SetCategoryContext.Provider value={setClickedIdx}>
        {/* nav */}
        <CategoryTransition list={["매장 관리", "주문"]} />
        {/* category project box */}
        {clickedIdx === 0 ? <AdminService /> : <CustomerService />}{" "}
      </SetCategoryContext.Provider>
    </CategoryContext.Provider>
  );
}
