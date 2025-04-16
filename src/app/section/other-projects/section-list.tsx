export default function ProjectList() {
  // obj - 목 데이터
  const obj = { href: "#" };
  const { href } = obj;
  return (
    <li
      className={`flex h-90 max-w-60 flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-[#ACB4BA] p-6`}
    >
      <div className="capitalize">
        <span className="text-sm">1인 개발</span>
        <h3 className="text-3xl font-bold">project 1</h3>
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
    >
      <img src="./src/assets/icon/move-window.svg" alt="link connect icon" />
    </a>
  );
}
