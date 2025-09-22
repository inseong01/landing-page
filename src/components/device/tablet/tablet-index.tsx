/* eslint-disable @next/next/no-img-element */

export default function TabletDevice({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className={`flex h-[345px] w-[450px] items-center justify-center max-[576px]:h-[230px] max-[576px]:w-[300px] lg:h-[415px] lg:w-[542px]`}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)] max-sm:rounded-[16px]"
      />
    </div>
  );
}
