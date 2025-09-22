import dynamic from "next/dynamic";

import Footer from "@/components/footer/footer-index";
import IntroSection from "@/components/intro/section-index";
import BannerSection from "@/components/banner/banner-index";
import OtherProjects from "@/components/other-projects/section-index";
import ProjectOverview from "@/components/section/project-overview/section-index";

const DynamicChatApp = dynamic(() => import("@/feature/chat"));
const DynamicCategoryProjectBox = dynamic(() => import("./category-project"));

export default function QROrderMainPage() {
  return (
    <div className="h-screen w-full font-[Noto_Sans]">
      {/* banner */}
      <BannerSection
        imgPath="/projects/qr-order/logo-white.png"
        imgAlt="QR ORDER 로고"
        topText="설치 없이 사용하는 매장 관리"
        bottomText="새로 출시된 서비스를 확인해보세요."
      />

      {/* intro */}
      <IntroSection />

      {/* overview */}
      <ProjectOverview
        simple_product_info={"방문 고객과 매장 관리자를 위한 웹 애플리케이션"}
        product_icon_src="/projects/qr-order/logo-color.png"
        product_icon_alt="qr order 로고 이미지"
        serviceCategory={"QR 주문 / 매장 관리 서비스"}
        overview_img_src="/projects/qr-order//overview/overview-devices.png"
        overview_img_alt="QR ORDER 관리자, 고객 서비스 연출 이미지"
      />

      {/* CategoryProjectBox */}
      <DynamicCategoryProjectBox />

      {/* other projects */}
      <OtherProjects />

      {/* footer */}
      <Footer />

      {/* Chat App */}
      <DynamicChatApp />
    </div>
  );
}
