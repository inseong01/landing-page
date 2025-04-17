import MultiPhoneDevicesView from "../../../../../components/app/section/multi-phone-device-view/section-index";
import PromotionBanner from "../../../../../components/app/section/promotion-banner/section-index";
import TabletDeviceView from "../../../../../components/app/section/tablet-device-view/section-index";

export default function AdminService() {
  return (
    <>
      <TabletDeviceView
        isReverse={false}
        titleNode={
          <>
            손쉽게, <br />
            시작할 수 있어요.
          </>
        }
        descNode={<>별도 프로그램과 기기 설치 없이 바로 사용할 수 있어요.</>}
        src="./src/assets/devices/tablet.png"
        alt="tablet image"
      />
      <TabletDeviceView
        isReverse={true}
        titleNode={
          <>
            입맛대로, <br />
            배치할 수 있어요.
          </>
        }
        descNode={<>매장 테이블 위치에 따라 좌석을 관리할 수 있어요.</>}
        caution="*좌석 수정은 모바일 외 기기에서 할 수 있어요."
        src="./src/assets/devices/tablet.png"
        alt="tablet image"
      />
      <MultiPhoneDevicesView
        titleNode={
          <>
            화면이 작아도,
            <br />
            보기 쉽게 했어요.
          </>
        }
        descNode={
          <>
            사용하는 기기 너비에 따라 화면이 조정돼요.
            <br />
            좌석 탭은 가로로 회전해야 확인할 수 있어요.
          </>
        }
        caution="*모바일에서는 좌석 조회만 가능해요."
        src_1="./src/assets/devices/phone.png"
        src_2="./src/assets/devices/phone.png"
        src_3="./src/assets/devices/phone.png"
        alt_1="phone image"
        alt_2="phone image"
        alt_3="phone image"
      />
      <PromotionBanner
        hookMentNode={
          <>
            설치 비용 없이 <br /> 매장 관리를 시작해보세요!
          </>
        }
        href="https://github.com/inseong01/QR-order-admin"
        main_product_src="./src/assets/logo.png"
        main_product_alt="qr order logo"
      />
    </>
  );
}
