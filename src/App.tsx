import { lazy } from "react";
import { useAtomValue } from "jotai";

import { categoryIdxAtom } from "./utils/store/atoms";

import BannerSection from "./app/banner/banner-index";
import Footer from "./app/footer/footer-index";
import CategoryTransition from "./app/nav/main/product/category/category-index";
import IntroSection from "./app/section/intro/section-index";
import OtherProjects from "./app/section/other-projects/section-index";
import AdminService from "./app/section/project/qr-order/admin/section-index";
import CustomerService from "./app/section/project/qr-order/customer/section-index";

import ProjectOverview from "./components/app/section/project-overview/section-index";

import qr_order_logo_img from "./assets/project/qr-order/qr-order-logo.png";
import overview_img from "./assets/project/qr-order/overview/overview-devices.png";

const LazyChatApp = lazy(() => import("./app/chat/App"));

export default function App() {
  return (
    <div className="h-screen w-full font-[Noto_Sans]">
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
      <BannerSection />

      {/* intro */}
      <IntroSection />

      {/* overview */}
      <ProjectOverview
        simple_product_info={"방문 고객과 매장 관리자를 위한 웹 애플리케이션"}
        product_icon_src={qr_order_logo_img}
        product_icon_alt="qr order logo"
        serviceCategory={"QR 주문 / 매장 관리 서비스"}
        overview_img_src={overview_img}
        overview_img_alt="QR ORDER 관리자, 고객 서비스 연출 이미지"
      />

      {/* CategoryProjectBox */}
      <CategoryProjectBox />

      {/* other projects */}
      <OtherProjects />

      {/* footer */}
      <Footer />

      {/* Chat App */}
      <LazyChatApp />
    </div>
  );
}

function CategoryProjectBox() {
  const clickedIdx = useAtomValue(categoryIdxAtom);

  return (
    <>
      {/* 콘텐츠 카테고리 */}
      <CategoryTransition list={["매장 관리", "주문"]} />

      {/* 콘텐츠 */}
      {clickedIdx === 0 ? <AdminService /> : <CustomerService />}
    </>
  );
}
