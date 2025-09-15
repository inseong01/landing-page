import admin_init_tablet_img from "@/assets/project/qr-order/admin/init-tablet.png";
import admin_tab_table_img from "@/assets/project/qr-order/admin/feature-tab-table.png";
import admin_tab_order_img from "@/assets/project/qr-order/admin/feature-tab-order.png";
import qr_order_logo_img from "@/assets/project/qr-order/qr-order-logo.png";

import PromotionBanner from "@/components/app/section/promotion-banner/section-index";
import TabletDeviceView from "@/components/app/section/tablet-device-view/section-index";

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
        src={admin_init_tablet_img}
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
        src={admin_tab_table_img}
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
        src={admin_tab_order_img}
        alt="QR ORDER 관리자 서비스 주문 탭"
      />

      <PromotionBanner
        hookMentNode={
          <>
            설치 비용 없이 <br /> 매장 관리를 시작해보세요!
          </>
        }
        href="https://github.com/inseong01/QR-order-admin"
        main_product_src={qr_order_logo_img}
        main_product_alt="qr order 로고"
      />
    </>
  );
}
