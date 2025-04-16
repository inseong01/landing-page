import MultiPhoneDevicesView from "../../../../../components/app/section/multi-phone-device-view/section-index";
import PhoneDeviceView from "../../../../../components/app/section/phone-device-view/section-index";
import PromotionBanner from "../../../../../components/app/section/promotion-banner/section-index";

export default function CustomerService() {
  return (
    <>
      <PhoneDeviceView
        titleNode={
          <>
            이제, <br />
            메뉴판이 없어도 돼요.
          </>
        }
        descNode={
          <>
            스마트폰 카메라로 QR 코드를 스캔하면 <br />
            메뉴판을 확인할 수 있어요.
          </>
        }
        src="./src/assets/devices/phone.png"
        alt="phone image"
      />
      <PhoneDeviceView
        titleNode={
          <>
            누구나, <br />한 번에 사용할 수 있어요.
          </>
        }
        descNode={
          <>
            전연령 층에서 사용할 수 있도록 인터페이스를 직관적으로 구성했어요.
          </>
        }
        caution="* 14명의 테스터 절반 이상 사용자 인터페이스 직관적으로 평가"
        src="./src/assets/devices/phone.png"
        alt="phone image"
        isReverse={true}
      />
      <MultiPhoneDevicesView
        titleNode={
          <>
            이제,
            <br />
            테이블 벨은 안녕.
          </>
        }
        descNode={
          <>
            매장 방문객에게 필요한 요청을 한 곳으로 모았어요.
            <br />
            메뉴 주문, 테이블 요청, 계산서 확인까지 한 번에 확인할 수 있어요.
          </>
        }
        caution="*모바일에서는 좌석 조회만 가능"
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
            쉬운 메뉴판, <br /> QR 주문을 사용해보세요!
          </>
        }
        href="https://github.com/inseong01/QR-order-customer"
        main_product_src="./src/assets/logo.png"
        main_product_alt="qr order logo"
      />
    </>
  );
}
