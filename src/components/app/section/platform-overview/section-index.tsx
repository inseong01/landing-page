import PhoneDevice from "../../device/phone";
import TabletDevice from "../../device/tablet";

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
    <section className="relative z-9 h-fit w-full cursor-default bg-[#F5F5F5] py-40 text-[#5A80A5]">
      <div className="flex w-full items-center justify-center">
        <div className="h-fit w-250">
          <div className="mb-25 flex flex-col items-center justify-center gap-3">
            <span className="text-xl">{simple_product_info}</span>
            <div className="text-center">
              <div className="flex w-[396px]">
                <img src={main_product_src} alt={main_product_alt} />
              </div>
              <span className="text-xl">{serviceCategory}</span>
            </div>
          </div>
          <div className="relative m-auto w-[655px]">
            <TabletDevice src={tablet_src} alt={tablet_alt} />
            <div className="absolute right-0 -bottom-12">
              <PhoneDevice
                alt={phone_alt}
                src={phone_src}
                hoverEnable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
