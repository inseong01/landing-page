import MoveWindowSvgIcon from "./section-window-icon";

export default function ProjectList({
  href,
  title,
  participant,
  iconSrc,
  alt,
}: {
  href: string;
  title: string;
  participant: string;
  iconSrc: string;
  alt: string;
}) {
  return (
    <li
      className={`flex h-auto max-w-60 flex-1 flex-col justify-between gap-6 overflow-hidden rounded-2xl bg-[#ACB4BA] p-5 max-sm:max-w-none max-sm:flex-row max-sm:items-center max-sm:p-3 lg:h-90 lg:max-w-60`}
    >
      {/* 프로젝트 제목 */}
      <div className="text-start capitalize max-sm:w-full">
        <span className="inline-block h-5 text-sm max-sm:hidden">
          {participant}
        </span>
        <h3 className="text-3xl font-bold max-sm:text-lg">{title}</h3>
      </div>

      {/* 프로젝트 아이콘 */}
      <div className="flex h-full w-full items-center justify-center max-sm:hidden">
        <div className="h-auto w-2/3 opacity-50">
          <img className="w-full" src={iconSrc} alt={alt} />
        </div>
      </div>

      {/* 새창 열기 */}
      <div className="flex w-full justify-end max-sm:w-auto">
        <LinkConnectButton href={href} />
      </div>
    </li>
  );
}

function LinkConnectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white p-2.5 max-sm:h-7 max-sm:w-7 max-sm:p-1.5"
      target="_blank"
    >
      <MoveWindowSvgIcon />
    </a>
  );
}
