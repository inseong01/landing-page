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
    <div className="flex h-[395px] w-[200px] perspective-normal">
      <img
        src={src}
        alt={alt}
        className={`rounded-[12px] ${hoverEnable ? "hover:translate-z-9 hover:shadow-[0_0_50px_rgba(0,0,0,0.35)]" : "shadow-[0_0_50px_rgba(0,0,0,0.35)]"} duration-300`}
      />
    </div>
  );
}
