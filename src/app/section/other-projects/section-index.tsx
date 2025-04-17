import ProjectList from "./section-list";

export default function OtherProjects() {
  return (
    <section className="flex h-fit w-full cursor-default items-center justify-center bg-white py-24 text-white shadow-[0_0px_35px_rgba(0,0,0,0.15)]">
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
  // 프로젝트 목록 추가
  const listArr = [
    {
      href: "https://github.com/inseong01/chatBot",
      title: "Chat bot",
      participant: "1인 개발",
    },
  ];

  return (
    <ul className="flex h-full w-full gap-10">
      {listArr.map((list, idx) => (
        <ProjectList key={idx} {...list} />
      ))}
    </ul>
  );
}
