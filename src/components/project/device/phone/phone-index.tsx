export default function PhoneDevice({
  src,
  alt,
  hoverEnable,
}: {
  src: string;
  alt: string;
  hoverEnable: boolean;
}) {
  return (
    <div
      className={`flex h-[494px] w-[250px] perspective-[200px] lg:h-[592px] lg:w-[300px]`}
    >
      <img
        src={src}
        alt={alt}
        className={`relative rounded-[20px] max-[576px]:rounded-[25px] ${hoverEnable ? "xl:hover:translate-z-9 xl:hover:shadow-[0_0_50px_rgba(0,0,0,0.35)]" : "shadow-[0_0_50px_rgba(0,0,0,0.35)]"} duration-300`}
      />
    </div>
  );
}
