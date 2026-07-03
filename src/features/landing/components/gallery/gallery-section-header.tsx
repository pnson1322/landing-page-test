import { Reveal } from "@/features/landing/components/motion/reveal";
import { textStyles } from "@/features/landing/constants/styles";

export function GallerySectionHeader() {
  return (
    <Reveal className="max-w-2xl" threshold={0.12}>
      <p className={textStyles.eyebrow}>Hình ảnh nhiều góc độ</p>
      <h2 className="mt-3 text-[30px] font-semibold leading-[1.14] tracking-normal text-text-primary sm:text-[34px] lg:text-[36px] lg:leading-[1.16]">
        Lướt để xem thiết kế, vật liệu và dashboard đồng bộ.
      </h2>
    </Reveal>
  );
}
