import ProjectList from "./section-list";

import ICON_REALTIME_CHAT from "./../../../assets/other-project/icon-chat-white.svg";

export default function OtherProjects() {
  return (
    <section className="flex h-fit w-full cursor-default items-center justify-center bg-white px-8 py-24 text-center text-white shadow-[0_0px_35px_rgba(0,0,0,0.15)] lg:py-16 lg:text-start xl:px-0 xl:py-24">
      <div className="flex justify-between max-xl:flex-col max-lg:w-full xl:h-fit xl:w-[1000px] xl:text-start">
        {/* 섹션 제목 */}
        <div className="mb-10 w-full">
          <div className="w-auto text-2xl font-bold break-keep text-[#5A80A5] capitalize lg:text-4xl xl:w-70">
            <h2>다른 프로젝트 살펴보기</h2>
          </div>
        </div>

        {/* 프로젝트 목록 */}
        <ProjectListBox />
      </div>
    </section>
  );
}

function ProjectListBox() {
  // 프로젝트 목록 추가
  const listArr = [
    {
      href: "https://github.com/inseong01/supabase-realtime-chat",
      title: "Realtime Chat",
      participant: "1인 개발",
      iconSrc: ICON_REALTIME_CHAT,
      alt: "실시간 채팅 프로젝트 아이콘",
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
