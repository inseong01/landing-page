import PromotionBanner from "@/components/section/promotion-banner/section-index";
import TabletDeviceView from "@/components/section/tablet-device-view/section-index";

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
        descNode={
          <>
            별도 프로그램 설치 없이 <br /> 회원가입으로 바로 사용할 수 있어요.
          </>
        }
        src="/projects/qr-order/admin/init-tablet.png"
        alt="QR ORDER 관리자 서비스 초기 접속"
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
        src="/projects/qr-order/admin/feature-tab-table.png"
        alt="QR ORDER 관리자 서비스 좌석 탭"
      />

      <TabletDeviceView
        titleNode={
          <>
            주문이 많아도,
            <br />
            걱정 마세요.
          </>
        }
        descNode={
          <>
            한눈에 확인하고,
            <br />
            좌우 스크롤로 빠르게 관리하세요.
          </>
        }
        src="/projects/qr-order/admin/feature-tab-order.png"
        alt="QR ORDER 관리자 서비스 주문 탭"
      />

      <PromotionBanner
        hookMentNode={
          <>
            설치 비용 없이 <br /> 매장 관리를 시작해보세요!
          </>
        }
        href="https://github.com/inseong01/QR-order-admin"
        main_product_src="/projects/qr-order/logo-color.png"
        main_product_alt="qr order 로고"
      />
    </>
  );
}
