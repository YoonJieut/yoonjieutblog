"use client";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import ViewMoreBtn from "@/app/components/ui/Molecules/Buttons/ViewMoreBtn";
import GithubBtn from "../../components/ui/Molecules/Buttons/GithubBtn";
import { useState } from "react";
import PostsListContainer from "./@postListContainer/page";
import MenuNav from "@/app/components/ui/Organism/Footer/MenuNav";
import IntroduceLayout from "@/app/components/ui/Temp/IntroduceLayout";

export default function MainPage() {
  const [isHovered, setIsHovered] = useState(false);
  // 스위치
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <IntroduceLayout />
      <div className="introduceText flex flex-col space-y-20 py-40">
        <h1 className="text-3xl font-bold">
          안녕하세요, 저는 이런 사람입니다.
        </h1>
        {/* 예시 텍스트 추가 */}
        {Array(15)
          .fill("")
          .map((_, index) => (
            <p key={index} className="text-lg">
              내용 {index + 1}
            </p>
          ))}
      </div>
      <section className="twoCardLayout flex space-x-2 justify-between w-full">
        <div
          className="w-1/3 h-fit relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ImgCard
            imgUrl="/images/textCursor.png"
            imgTitle="나를 표현할 수 있는 무언가"
            imgSub="이건 저의 무언가입니다."
            imgWidth={400}
            imgHeight={400}
          />
          <div
            className={`btnArea flex space-x-10 justify-end absolute bottom-20 right-0 duration-150 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ViewMoreBtn
              onClick={() => {
                console.log("hello world입니다ㅏㅏㅏ");
              }}
            />
            <GithubBtn />
          </div>
        </div>
        <ImgCard
          imgUrl="/images/textCursor.png"
          imgTitle="Lorem 2"
          imgSub="이건 저의 무언가입니다."
          imgWidth={650}
          imgHeight={500}
          className="w-2/3"
        />
      </section>
      <section className="textArea w-full h-28 flex items-center justify-center">
        <p className="opacity-50">
          {/* 로딩창 처럼 랜덤하게 면접관 또는 나를 찾는 사람에게 말을 건내보자 */}
          여기에 내가 하고 싶은 말을 마음껏 하면 어떨까?
        </p>
      </section>
      <section className="oneCardLayout w-full flex flex-col space-y-10 justify-center ">
        <ImgCard
          className="w-full"
          imgUrl="/images/textCursor.png"
          imgTitle="나를 표현할 수 있는 무언가"
          imgSub="이건 저의 무언가입니다."
          imgWidth={400}
          imgHeight={500}
        />
        <div className="btnArea flex space-x-20 justify-end">
          <ViewMoreBtn
            onClick={() => {
              console.log("hello world입니다ㅏㅏㅏ");
            }}
          />
          <GithubBtn />
        </div>
      </section>
      <PostsListContainer />
      <MenuNav />
    </>
  );
}
