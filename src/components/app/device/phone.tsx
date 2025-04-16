export default function PhoneDevice({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex h-[395px] w-[200px]">
      <img
        src={src}
        alt={alt}
        className="rounded-[12px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
