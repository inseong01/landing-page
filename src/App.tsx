import { useEffect, useRef, useState } from "react";

import { supabase } from "./utils/supabase/supabase";

import BannerBackground from "./app/banner/background/background-index";
import Footer from "./app/footer/footer-index";
import CategoryTransition from "./app/nav/main/product/category/category-index";
import IntroSection from "./app/section/intro/section-index";
import ProjectOverview from "./components/app/section/project-overview/section-index";
import OtherProjects from "./app/section/other-projects/section-index";
import AdminService from "./app/section/project/qr-order/admin/section-index";
import CustomerService from "./app/section/project/qr-order/customer/section-index";
import qr_order_logo_img from "./assets/project/qr-order/qr-order-logo.png";
import overview_img from "./assets/project/qr-order/overview/overview-devices.png";
import {
  CategoryContext,
  SetCategoryContext,
} from "./context/context-project-sub-category";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import ReactModal from "react-modal";

const modalStyleCSS: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  content: {
    width: "100%",
    maxWidth: "500px",
    height: "100%",
    maxHeight: "400px",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    zIndex: 999,
  },
};

ReactModal.setAppElement("#root");

export default function App() {
  const [session, setSession] = useState(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(1, session);
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(2, session);
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  // }

  return (
    <div
      className="h-screen w-full font-[Open_Sans]"
      onClick={() => setClicked((prev) => !prev)}
    >
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

      <ReactModal isOpen={clicked} style={modalStyleCSS}>
        <div className="flex flex-col gap-7">
          {/* 헤더 */}
          <div className="relative w-full text-center">
            <span className="text-2xl">로그인</span>
            <span className="absolute right-0">X</span>
          </div>

          <div className="flex flex-col gap-2">
            {/* 입력창 */}
            <div className="flex flex-col gap-2">
              <div>
                <input
                  type="text"
                  className="w-full rounded-sm border-[1px] border-zinc-300 p-4 text-sm"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full rounded-sm border-[1px] border-zinc-300 p-4 text-sm"
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
            </div>

            {/* 세부 카테고리 */}
            <div className="cursor-pointer text-right text-sm">
              <span>비밀번호 찾기</span>
            </div>
          </div>

          {/* 제출버튼 */}
          <div className="flex flex-col gap-2">
            <button className="flex-1 cursor-pointer rounded-sm border-[1px] border-[#5A80A5] bg-[#5A80A5] p-4 text-sm text-white hover:bg-[#486684]">
              로그인
            </button>
            <button className="flex-1 cursor-pointer rounded-sm border-[1px] border-[#5A80A5] p-4 text-sm text-[#5A80A5]">
              회원가입
            </button>
          </div>
        </div>
      </ReactModal>

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
