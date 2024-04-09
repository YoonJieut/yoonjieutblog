import Image from "next/image";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/Atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";
import YoonJieutContent from "@/app/components/ui/Page/portfolio/yoonjieut/YoonJieutContent";

// todo arrowbtn에 들어갈 기능 추가
export default function YoonJieutPage() {
  return (
    <div className="w-full h-11/12 flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        <ArrowBtns />
        <Div className="flex flex-col gap-2">
          <H1 text="YOONJIEUT" className="koulen font-normal text-8xl" />
          <Div className="StackFlexBox flex space-x-2 ">
            <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
            <StackOuter divClassName="rounded-full">NextJS</StackOuter>
            <StackOuter divClassName="rounded-full">Express</StackOuter>
          </Div>
        </Div>
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        <YoonJieutContent />
      </Section>
    </div>
  );
}
