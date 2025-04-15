export default function OtherProjects() {
  return (
    <section className="flex h-fit w-full items-center justify-center bg-white py-24 text-white shadow-[0_0px_35px_rgba(0,0,0,0.15)]">
      <div className="flex h-fit w-[1000px] items-start justify-between">
        <div className="mb-10 w-full">
          <div className="w-70 text-4xl font-bold break-keep text-[#5A80A5] capitalize">
            <h2>다른 프로젝트 살펴보기</h2>
          </div>
        </div>
        <ProjectListBox />
      </div>
    </section>
  );
}

function ProjectListBox() {
  return (
    <ul className="flex h-full w-full gap-10">
      <ProjectList />
    </ul>
  );
}

function ProjectList() {
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
