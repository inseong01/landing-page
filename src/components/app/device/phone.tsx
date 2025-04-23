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
      className={`flex ${height} ${width} duration-300 perspective-[200px] lg:h-auto lg:w-[380px]`}
    >
      <img
        src={src}
        alt={alt}
        className={`relative rounded-[20px] max-[576px]:rounded-[10px] ${hoverEnable ? "hover:translate-z-9 hover:shadow-[0_0_50px_rgba(0,0,0,0.35)]" : "shadow-[0_0_50px_rgba(0,0,0,0.35)]"} `}
      />
    </div>
  );
}
