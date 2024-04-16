"use client";

import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import urlParamMaker from "@/app/utils/urlParamMaker";
import { useEffect, useState } from "react";

// 해당 컴포넌트는 pf 페이지의 왼쪽 섹션에 해당하며 병렬 로딩을 구현했다.

// // todo1 : 현재의 url을 참고하여 현재 메뉴를 표시한다.
// 1. 현재 url에서 "/"을 기준으로 맨 뒤의 문자열을 가져온다.
// 2. 가져온 문자열을 컴포넌트에 업데이트 한다.
// todo2 : 이전, 다음 버튼을 클릭하면 이전, 다음 메뉴로 이동한다.
// 1. 가져온 문자열을 기준으로 현재 메뉴의 index를 반환해본다.
// 2. portfolioMetaData에 맞춰서 이전, 다음 메뉴로 리디렉션한다.
// 3. 맨 뒤로 가면 처음으로 돌아오는 로직을 추가한다. (0에서 뒤로 가면 마지막으로 간다 그리고 마지막에서 앞으로 가면 처음으로 간다.)

const MenuComp = () => {
  const [url, setUrl] = useState("");
  const [currentMenu, setCurrentMenu] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // 현재 url을 가져온다.
  useEffect(() => {
    console.log("MenuComp useEffect");
    setUrl(window.location.href);
  }, []);

  useEffect(() => {
    console.log("MenuComp useEffect2");
    const param = urlParamMaker(url);
    setCurrentMenu(param as string); // 타입에러 : 타입을 string으로 강제로 변환했다.

    // 현재 param을 기준으로 현재 메뉴의 index를 반환한다.
    const nowIndex = portfolioMetaData.findIndex(
      (data) => data.name.toLowerCase() === param
    );
    // 찾은 url이 없을 때, 오류 처리
    if (nowIndex === -1) {
      setCurrentIndex(0);
      return;
    }
    console.log(nowIndex);
    setCurrentIndex(nowIndex);
  }, [url]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioMetaData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioMetaData.length - 1 ? 0 : prevIndex + 1
    );
    // window.location.href = portfolioMetaData[currentIndex].path;
  };

  return (
    <>
      <div className="w-full flex justify-between mt-20">
        <button onClick={handlePrevClick}>이전 페이지</button>
        <button onClick={handleNextClick}>다음 페이지</button>
      </div>
      <H1 text={currentMenu} />
      <div>현재 인덱스는? {currentIndex}</div>
      <div>length-1? {portfolioMetaData.length - 1}</div>
      <div>{portfolioMetaData[currentIndex].path}</div>
    </>
  );
};
export default MenuComp;
