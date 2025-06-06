import { useEffect, useState } from "react";
import { useAtom } from "jotai";

import { supabase } from "./utils/supabase/supabase";
import { loginStateAtom } from "./utils/atom/atom";

import { CategoryContext, SetCategoryContext } from "./context/context";

import BannerBackground from "./app/banner/background/background-index";
import Footer from "./app/footer/footer-index";
import CategoryTransition from "./app/nav/main/product/category/category-index";
import IntroSection from "./app/section/intro/section-index";
import ProjectOverview from "./components/app/section/project-overview/section-index";
import OtherProjects from "./app/section/other-projects/section-index";
import AdminService from "./app/section/project/qr-order/admin/section-index";
import CustomerService from "./app/section/project/qr-order/customer/section-index";
import ModalDisplay from "./components/app/modal/modal-index";

import qr_order_logo_img from "./assets/project/qr-order/qr-order-logo.png";
import overview_img from "./assets/project/qr-order/overview/overview-devices.png";

export default function App() {
  const [, setLoginState] = useAtom(loginStateAtom);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      switch (_event) {
        case "INITIAL_SESSION": {
          if (session === null) {
            setLoginState(false);
          } else {
            setLoginState(true);
          }
          console.log("INITIAL_SESSION");
          return;
        }
        case "SIGNED_IN": {
          setLoginState(true);
          console.log("SIGNED_IN");
          return;
        }
        case "SIGNED_OUT": {
          setLoginState(false);
          console.log("SIGNED_OUT");
          return;
        }
        case "USER_UPDATED": {
          console.log("USER_UPDATED");
          return;
        }
        case "PASSWORD_RECOVERY": {
          console.log("PASSWORD_RECOVERY");
          return;
        }
        case "TOKEN_REFRESHED": {
          console.log("TOKEN_REFRESHED");
          return;
        }
        case "MFA_CHALLENGE_VERIFIED": {
          console.log("MFA_CHALLENGE_VERIFIED");
          return;
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [setLoginState]);

  return (
    <>
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
      </div>

      <ModalDisplay type={"login"} />
    </>
  );
}

function CategoryProjectBox() {
  const [clickedIdx, setClickedIdx] = useState(0);

  return (
    <CategoryContext.Provider value={clickedIdx}>
      <SetCategoryContext.Provider value={setClickedIdx}>
        <CategoryTransition list={["매장 관리", "주문"]} />
        {clickedIdx === 0 ? <AdminService /> : <CustomerService />}
      </SetCategoryContext.Provider>
    </CategoryContext.Provider>
  );
}
