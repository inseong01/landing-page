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
          <div className="mb-25 flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-xl max-[576px]:text-lg">
              {simple_product_info}
            </span>
            <div className="text-center">
              <div className="flex h-[106px] w-[396px] max-[576px]:h-[70px] max-[576px]:w-[260px]">
                <img src={main_product_src} alt={main_product_alt} />
              </div>
              <span className="text-xl max-[576px]:text-lg">
                {serviceCategory}
              </span>
            </div>
          </div>
          <div className="relative m-auto w-[285px] sm:w-[515px] lg:w-[635px] xl:h-auto xl:w-[655px]">
            <div
              className={`flex h-[191px] w-[250px] items-center justify-center sm:h-[215px] sm:w-[280px] md:h-[345px] md:w-[450px] lg:h-[430px] lg:w-[560px]`}
            >
              <img
                src={tablet_src}
                alt={tablet_alt}
                className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)] max-sm:rounded-[16px]"
              />
            </div>
            <div className="absolute right-0 -bottom-12 flex h-[178px] w-[90px] sm:h-[296px] sm:w-[150px] lg:h-[394px] lg:w-[200px]">
              <img
                src={phone_src}
                alt={phone_alt}
                className={`relative rounded-[10px] shadow-[0_0_50px_rgba(0,0,0,0.35)] xl:rounded-[20px]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
