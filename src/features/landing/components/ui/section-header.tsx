import { Reveal } from "@/features/landing/components/motion/reveal";
import { textStyles } from "@/features/landing/constants/styles";

type SectionHeaderProps = {
  align?: "left" | "center";
  body?: string;
  eyebrow: string;
  inverse?: boolean;
  title: string;
};

export function SectionHeader({
  align = "left",
  body,
  eyebrow,
  inverse = false,
  title,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "";
  const headlineStyle = inverse ? textStyles.headlineLight : textStyles.headline;
  const bodyStyle = inverse ? textStyles.bodyLight : textStyles.body;

  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment}`} threshold={0.12}>
      <p className={textStyles.eyebrow}>{eyebrow}</p>
      <h2 className={headlineStyle}>{title}</h2>
      {body ? <p className={bodyStyle}>{body}</p> : null}
    </Reveal>
  );
}
