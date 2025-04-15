import PhoneDevice from "../../../components/app/device/phone";

export default function MultiMobileDeviceView() {
  return (
    <section className="flex h-fit w-full items-center justify-center bg-[#F5F5F5] py-24">
      <div className="flex w-[1000px] items-center justify-between gap-25">
        <div className="w-full">
          <div className="mb-12">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5]">
              화면이 작아도,
              <br />
              보기 쉽게 했어요.
            </h2>
            <p>
              사용하는 기기 너비에 따라 화면이 조정돼요.
              <br />
              좌석 탭은 가로로 회전해야 확인할 수 있어요.
            </p>
          </div>
          <p className="text-[#666]">*모바일에서는 좌석 조회만 가능해요. </p>
        </div>
        <div className="relative flex h-fit w-full items-center justify-center">
          <MobileDeviceBox />
        </div>
      </div>
    </section>
  );
}

function MobileDeviceBox() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-end gap-10">
        <PhoneDevice />
        <div className="flex flex-col gap-10">
          <div>
            <PhoneDevice />
          </div>
          <div>
            <PhoneDevice />
          </div>
        </div>
      </div>
    </div>
  );
}
