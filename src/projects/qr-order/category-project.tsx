"use client";

import { useAtomValue } from "jotai";

import CategoryTransition from "@/components/toggle/category/category-index";
import { categoryIdxAtom } from "@/components/toggle/category/store/atom";

import AdminService from "./admin/section-index";
import CustomerService from "./customer/section-index";

export default function CategoryProjectBox() {
  const clickedIdx = useAtomValue(categoryIdxAtom);

  return (
    <>
      {/* 콘텐츠 카테고리 */}
      <CategoryTransition list={["매장 관리", "주문"]} />

      {/* 콘텐츠 */}
      {clickedIdx === 0 ? <AdminService /> : <CustomerService />}
    </>
  );
}
