/* eslint-disable @next/next/no-img-element */
import ProductLogo from "@/components/product-logo/logo-index";

type ProjectOverviewProps = {
  simple_product_info: string;
  product_icon_src: string;
  product_icon_alt: string;
  serviceCategory: string;
  overview_img_src: string;
  overview_img_alt: string;
};

export default function ProjectOverview({
  simple_product_info,
  product_icon_src,
  product_icon_alt,
  serviceCategory,
  overview_img_src,
  overview_img_alt,
}: ProjectOverviewProps) {
  return (
    <section
      id="overview"
      className="relative z-9 h-fit w-full cursor-default bg-[#F5F5F5] py-40 break-keep text-[#5A80A5] max-[576px]:px-4 max-[576px]:pb-20"
    >
      <div className="flex w-full items-center justify-center">
        <div className="h-fit w-250">
          <div className="mb-25 flex flex-col items-center justify-center gap-3 text-center max-[576px]:mb-15">
            {/* 상단 문구 */}
            <SimpleProductInfo text={simple_product_info} />

            {/* 제품 로고 이미지 */}
            <div className="text-center">
              <ProductLogo src={product_icon_src} alt={product_icon_alt} />
              <ProductCategory text={serviceCategory} />
            </div>
          </div>

          {/* 제품 전체 이미지 */}
          <div className="relative m-auto h-[339px] w-[450px] max-[576px]:h-[271px] max-[576px]:w-[360px] xl:h-auto xl:w-[655px]">
            <ProductOverviewImg src={overview_img_src} alt={overview_img_alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleProductInfo({ text }: { text: string }) {
  return <span className="text-xl max-[576px]:text-lg">{text}</span>;
}

function ProductCategory({ text }: { text: string }) {
  return <span className="text-xl max-[576px]:text-lg">{text}</span>;
}

function ProductOverviewImg({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} />;
}