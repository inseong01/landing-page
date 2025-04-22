import { useState } from "react";
import BannerBackground from "./app/banner/background/background-index";
import Footer from "./app/footer/footer-index";
import CategoryTransition from "./app/nav/main/category/transition-index";
import IntroSection from "./app/section/intro/section-index";
import PlatformOverview from "./components/app/section/platform-overview/section-index";
import OtherProjects from "./app/section/other-projects/section-index";
import AdminService from "./app/section/project/qr-order/admin/section-index";
import CustomerService from "./app/section/project/qr-order/customer/section-index";
import admin_init_tablet_img from "./assets/project/qr-order/admin/init-tablet.png";
import customer_app_splash_img from "./assets/project/qr-order/overview/overview-phone.png";
import qr_order_logo_img from "./assets/project/qr-order/qr-order-logo.png";
import {
  CategoryContext,
  SetCategoryContext,
} from "./context/context-project-sub-category";

export default function App() {
  return (
    <div className="h-screen w-full font-[Open_Sans]">
      <meta name="title" content="landing page" />
      <meta name="author" content="Inseong Yu" />
      <meta
        name="keyword"
        content="React, Threejs, JavaScript, Web Development, Frontend"
      />
      <meta
        name="description"
        content="inseong 개발자가 최근에 참여한 프로젝트를 확인해보세요"
      />
      {/* banner */}
      <BannerBackground />
      {/* intro */}
      <IntroSection />
      {/* overview */}
      <PlatformOverview
        simple_product_info={"방문 고객과 매장 관리자를 위한 웹 애플리케이션"}
        main_product_src={qr_order_logo_img}
        main_product_alt="qr order logo"
        serviceCategory={"QR 주문 / 매장 관리 서비스"}
        tablet_src={admin_init_tablet_img}
        tablet_alt="QR ORDER 관리자 서비스 웹 초기 접속 화면"
        phone_src={customer_app_splash_img}
        phone_alt="QR ORDER 주문 서비스 앱 스플래시 이미지"
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
        {clickedIdx === 0 ? <AdminService /> : <CustomerService />}
      </SetCategoryContext.Provider>
    </CategoryContext.Provider>
  );
}
