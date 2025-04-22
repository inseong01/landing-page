export default function PhoneDevice({
  src,
  alt,
  height = "h-[413px]",
  width = "w-[210px]",
  hoverEnable,
}: {
  src: string;
  alt: string;
  height?: string;
  width?: string;
  hoverEnable: boolean;
}) {
  return (
    <div className={`flex ${height} ${width} perspective-[200px]`}>
      <img
        src={src}
        alt={alt}
        className={`relative rounded-[20px] ${hoverEnable ? "hover:translate-z-9 hover:shadow-[0_0_50px_rgba(0,0,0,0.35)]" : "shadow-[0_0_50px_rgba(0,0,0,0.35)]"} duration-300`}
      />
    </div>
  );
}
