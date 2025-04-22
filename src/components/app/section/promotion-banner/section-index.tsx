import { ReactNode } from "react";
import CommonSectionFrame from "../frame/section-frame";

type PromotionBannerProps = {
  hookMentNode: ReactNode;
  href: string;
  main_product_src: string;
  main_product_alt: string;
};

export default function PromotionBanner({
  hookMentNode,
  href,
  main_product_src,
  main_product_alt,
}: PromotionBannerProps) {
  /**
   * PlatformOverview 컴포넌트 위치로 이동
   */
  function onClickScrollToPlatformOverview() {
    const section = document.getElementById("overview");
    window.scroll({ top: section?.offsetTop, behavior: "smooth" });
  }

  return (
    <CommonSectionFrame>
      <div className="flex flex-col gap-8">
        <p className="text-center text-3xl font-bold text-[#5A80A5]">
          {hookMentNode}
        </p>
        <div className="flex h-[106px] w-[396px]">
          <img src={main_product_src} alt={main_product_alt} />
        </div>
        <div className="text-center">
          <a
            className="text-xl text-[#5A80A5] hover:underline"
            href={href}
            target="_blank"
          >
            깃허브 저장소 훑어보기
          </a>
        </div>
        <nav className="mt-20 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={onClickScrollToPlatformOverview}
            className="flex cursor-pointer flex-col items-center justify-center"
          >
            <div className="flex h-10 w-10 items-center justify-center p-2 motion-safe:animate-bounce">
              <div className="flex h-full w-full rotate-45 items-center justify-center border-t-2 border-l-2 border-[#5A80A5]"></div>
            </div>
            <div className="text-sm text-[#5A80A5]">프로젝트 다시보기</div>
          </button>
        </nav>
      </div>
    </CommonSectionFrame>
  );
}
