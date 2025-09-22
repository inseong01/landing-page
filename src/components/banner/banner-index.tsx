import DownMotionNav from "./banner-nav";

type BannerSectionProps = {
  imgPath: string;
  imgAlt: string;
  topText: string;
  bottomText: string;
};

export default function BannerSection({
  imgPath,
  imgAlt,
  topText,
  bottomText,
}: BannerSectionProps) {
  return (
    <section
      className={`relative h-[130vh] cursor-default bg-radial from-[#5a80a5] from-40% to-[#2c3e50] xl:h-[200vh]`}
    >
      <div className="absolute top-0 left-0 z-9 flex h-dvh w-full items-center justify-center px-4 text-center text-white lg:px-10">
        <div className="flex flex-col items-center justify-center text-shadow-md">
          {/* 상단 문구 */}
          <p className="text-3xl font-bold tracking-widest max-[576px]:text-sm">
            {topText}
          </p>

          {/* 제품 로고 이미지 : 밝은 테마 */}
          <div className="w-[75%]">
            <img src={imgPath} alt={imgAlt} />
          </div>

          {/* 하단 문구 */}
          <p className="text-xl tracking-widest max-[576px]:text-sm">
            {bottomText}
          </p>
        </div>

        {/* 스크롤 애니메이션 */}
        <DownMotionNav />
      </div>
    </section>
  );
}
