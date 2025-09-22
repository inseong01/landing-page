/* eslint-disable @next/next/no-img-element */

export default function PhoneDevice({
  src,
  alt,
  lg_width = "lg:w-[300px]",
  lg_height = "lg:h-[592px]",
  hoverEnable = false,
}: {
  src: string;
  alt: string;
  lg_width?: string;
  lg_height?: string;
  hoverEnable?: boolean;
}) {
  return (
    <div
      className={`flex h-[494px] w-[250px] perspective-[200px] ${lg_width} ${lg_height}`}
    >
      <img
        src={src}
        alt={alt}
        className={`relative rounded-[20px] max-[576px]:rounded-[25px] ${hoverEnable ? "xl:hover:translate-z-9 xl:hover:shadow-[0_0_50px_rgba(0,0,0,0.35)]" : "shadow-[0_0_50px_rgba(0,0,0,0.35)]"} duration-300`}
      />
    </div>
  );
}
