export default function Section_3() {
  return (
    <section className="bg-[#5A80A5]">
      <div className="flex h-fit w-full items-center justify-between overflow-hidden rounded-t-[50px] bg-white px-80 py-20 text-[#5A80A5] shadow-[0_-30px_35px_rgba(0,0,0,0.25)]">
        <div className="w-lg">
          <span className="mb-2 block font-bold">매장 주문</span>
          <h2 className="mb-7 block w-lg text-5xl font-bold capitalize">
            고객 웹 애플리케이션
          </h2>
          <div className="description">
            <p>
              스마트폰으로 QR 코드를 스캔해 메뉴 주문, 테이블 요청 등 다양한
              서비스를 간편하게 이용할 수 있는 고객 전용 서비스입니다.
            </p>
            <br />
            <p>
              본 서비스는 "QR 오더 앱"으로 확장 확장 되었으며 고객 경험을
              극대화하고 주문 프로세스를 최소화하고자 합니다.
            </p>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="flex items-center justify-end gap-1">
            <div className="flex h-100 w-60 justify-center">
              <img
                src="./src/assets/devices/phone.png"
                alt="phone 1"
                className="rounded-[12px] duration-500 hover:shadow-[0_0px_35px_rgba(0,0,0,0.35)]"
              />
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <div className="flex h-100 w-60 justify-center">
                  <img
                    src="./src/assets/devices/phone.png"
                    alt="phone 2"
                    className="rounded-[12px] duration-500 hover:shadow-[0_0px_35px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>
              <div>
                <div className="flex h-100 w-60 justify-center">
                  <img
                    src="./src/assets/devices/phone.png"
                    alt="phone 3"
                    className="rounded-[12px] duration-500 hover:shadow-[0_0px_35px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
