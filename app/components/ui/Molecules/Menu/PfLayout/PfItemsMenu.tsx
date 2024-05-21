import { ReactNode } from "react";
import Section from "@/app/components/ui/Atom/Basic/Section";
import H1 from "@/app/components/ui/Atom/Basic/H1";

/**
 * 포트폴리오 아이템 레이아웃 컴포넌트
 * @param {string} title - 제목
 * @param {ReactNode} children - 자식 컴포넌트
 * @returns {ReactNode} - 레이아웃 컴포넌트
 */
const PfItemsMenu = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-4">
      <H1 className="koulen font-normal text-[80px] h-[60px]" text={title} />
      <Section className="contentPart w-1/2 flex gap-3 overflow-x-hidden">
        {children}
      </Section>
    </div>
  );
};

export default PfItemsMenu;
