import ProjectList from "./section-list";

export default function OtherProjects() {
  return (
    <section className="flex h-fit w-full cursor-default items-center justify-center bg-white py-24 text-white shadow-[0_0px_35px_rgba(0,0,0,0.15)] max-xl:text-center max-lg:px-8 max-lg:py-16 xl:px-0 xl:py-24 xl:text-center">
      <div className="flex justify-between max-xl:flex-col max-lg:w-full xl:h-fit xl:w-[1000px] xl:text-start">
        <div className="mb-10 w-full">
          <div className="text-4xl font-bold break-keep text-[#5A80A5] capitalize max-[576px]:text-3xl max-xl:w-auto xl:w-70">
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
    <ul className="flex h-full w-full justify-center gap-10">
      {listArr.map((list, idx) => (
        <ProjectList key={idx} {...list} />
      ))}
    </ul>
  );
}
