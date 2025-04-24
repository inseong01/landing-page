export default function PhoneDevice({
  src,
  alt,
  width = "max-w-[250px]",
  height = "max-h-[494px]",
  hoverEnable,
}: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  hoverEnable: boolean;
}) {
  return (
    <div
      className={`flex ${height} ${width} perspective-[200px] lg:h-[592px] lg:w-[300px]`}
    >
      <img
        src={src}
        alt={alt}
        className={`relative rounded-[20px] max-[576px]:rounded-[25px] ${hoverEnable ? "xl:hover:translate-z-9 xl:hover:shadow-[0_0_50px_rgba(0,0,0,0.35)]" : "shadow-[0_0_50px_rgba(0,0,0,0.35)]"} duration-300`}
      />
    </div>
  );
}
