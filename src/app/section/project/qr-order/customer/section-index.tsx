import qr_order_logo_img from "@/assets/project/qr-order/qr-order-logo.png";
import customer_feature_1_img from "@/assets/project/qr-order/customer/phone-feature-1.png";
import customer_short_order_process_webp from "@/assets/project/qr-order/customer/short-order-process-resize.webp";
import customer_category_1_img from "@/assets/project/qr-order/customer/phone-category-1.png";
import customer_category_2_img from "@/assets/project/qr-order/customer/phone-category-2.png";
import customer_category_3_img from "@/assets/project/qr-order/customer/phone-category-3.png";

import PromotionBanner from "@/components/app/section/promotion-banner/section-index";
import PhoneDeviceView from "@/components/app/section/phone-device-view/section-index";
import MultiPhoneDevicesView from "@/components/app/section/multi-phone-device-view/section-index";

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
        src={customer_feature_1_img}
        alt="QR ORDER 주문 서비스 초기 접속"
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
        caution="*14명의 테스터 중 절반 이상이 긍정적으로 평가했어요"
        src={customer_short_order_process_webp}
        alt="QR ORDER 주문 서비스 이용 과정"
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
            직원호출, 주문내역, 계산서 확인까지 한 번에 확인할 수 있어요.
          </>
        }
        caution=""
        src_1={customer_category_1_img}
        src_2={customer_category_2_img}
        src_3={customer_category_3_img}
        alt_1="QR ORDER 주문 서비스 직원호출 카테고리"
        alt_2="QR ORDER 주문 서비스 주문내역 카테고리"
        alt_3="QR ORDER 주문 서비스 계산서 카테고리"
      />
      <PromotionBanner
        hookMentNode={
          <>
            쉬운 메뉴판, <br /> QR 주문을 사용해보세요!
          </>
        }
        href="https://github.com/inseong01/QR-order-customer"
        main_product_src={qr_order_logo_img}
        main_product_alt="qr order 로고"
      />
    </>
  );
}
