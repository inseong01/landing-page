import { ReactNode } from "react";

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
  return (
    <section className="flex h-svh w-full items-center justify-center bg-[#F5F5F5] py-24">
      <div className="flex flex-col gap-8">
        <p className="text-center text-3xl font-bold text-[#5A80A5]">
          {hookMentNode}
        </p>
        <div className="flex w-[396px]">
          <img src={main_product_src} alt={main_product_alt} />
        </div>
        <div className="text-center">
          <a className="text-xl text-[#5A80A5] hover:underline" href={href}>
            깃허브 저장소 훑어보기
          </a>
        </div>
      </div>
    </section>
  );
}
