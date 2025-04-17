export default function ProjectList({
  href,
  title,
  participant,
}: {
  href: string;
  title: string;
  participant: string;
}) {
  return (
    <li
      className={`flex h-90 max-w-60 flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-[#ACB4BA] p-6`}
    >
      <div className="capitalize">
        <span className="mb-2 text-sm">{participant}</span>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <div className="flex w-full justify-end">
        <LinkConnectButton href={href} />
      </div>
    </li>
  );
}

function LinkConnectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white p-2.5"
      target="_blank"
    >
      <img src="./src/assets/icon/move-window.svg" alt="link connect icon" />
    </a>
  );
}
