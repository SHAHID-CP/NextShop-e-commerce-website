import MyCarousel from "@/Component/Shared/MyCarosel";
import ProductHighlights from "@/Component/Shared/ProductHighlights";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <MyCarousel></MyCarousel>
    <ProductHighlights></ProductHighlights>
    </>
  );
}
