import ProductLogo from "../../../project/product-logo/logo-index";

type PlatformOverviewProps = {
  simple_product_info: string;
  main_product_src: string;
  main_product_alt: string;
  serviceCategory: string;
  tablet_src: string;
  tablet_alt: string;
  phone_src: string;
  phone_alt: string;
};

export default function PlatformOverview({
  simple_product_info,
  main_product_src,
  main_product_alt,
  serviceCategory,
  tablet_src,
  tablet_alt,
  phone_src,
  phone_alt,
}: PlatformOverviewProps) {
  return (
    <section
      id="overview"
      className="relative z-9 h-fit w-full cursor-default bg-[#F5F5F5] py-40 break-keep text-[#5A80A5] max-[576px]:px-4"
    >
      <div className="flex w-full items-center justify-center">
        <div className="h-fit w-250">
          <div className="mb-25 flex flex-col items-center justify-center gap-3 text-center max-[576px]:mb-15">
            <SimpleProductInfo text={simple_product_info} />
            <div className="text-center">
              <ProductLogo src={main_product_src} alt={main_product_alt} />
              <ProductCategory text={serviceCategory} />
            </div>
          </div>
          <div className="relative m-auto w-[285px] sm:w-[515px] lg:w-[655px] xl:h-auto xl:w-[655px]">
            <TabletDeviceComp src={tablet_src} alt={tablet_alt} />
            <PhoneDeviceComp src={phone_src} alt={phone_alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TabletDeviceComp({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={`flex h-[191px] w-[250px] items-center justify-center sm:h-[345px] sm:w-[450px] lg:h-[430px] lg:w-[560px]`}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)] max-sm:rounded-[16px]"
      />
    </div>
  );
}

function PhoneDeviceComp({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute right-0 -bottom-12 flex h-[178px] w-[90px] sm:h-[296px] sm:w-[150px] lg:h-[394px] lg:w-[200px]">
      <img
        src={src}
        alt={alt}
        className={`relative rounded-[10px] shadow-[0_0_50px_rgba(0,0,0,0.35)] xl:rounded-[20px]`}
      />
    </div>
  );
}

function SimpleProductInfo({ text }: { text: string }) {
  return <span className="text-xl max-[576px]:text-lg">{text}</span>;
}

function ProductCategory({ text }: { text: string }) {
  return <span className="text-xl max-[576px]:text-lg">{text}</span>;
}
