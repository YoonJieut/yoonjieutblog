import React from "react";
import Div from "../../Atom/Basic/Div";
import DetailLine from "../Etc/DetailLine";
import H1 from "../../Atom/Basic/H1";
import H3 from "../../Atom/Basic/H3";
import H5 from "../../Atom/Basic/H5";

interface TextAreaProps {
  h1Text?: string;
  h3Text?: string;
  h5Text?: string;
  children: React.ReactNode;
  textAreaClassName?: string;
  divClassName?: string;
}

/**
 * TextArea 컴포넌트는 텍스트 영역을 나타내는 컴포넌트입니다.
 *
 * @component
 * @example
 * ```tsx
 * <TextArea
 *   h1Text="Title"
 *   h3Text="Subtitle"
 *   textAreaClassName="textarea"
 *   divClassName="container"
 * >
 *   This is the content of the TextArea.
 * </TextArea>
 * ```
 */
const TextArea: React.FC<TextAreaProps> = ({
  h1Text,
  h3Text,
  h5Text,
  children,
  textAreaClassName,
  divClassName,
}) => {
  const divClass = `textArea ${divClassName}`;
  return (
    <div className={divClass}>
      {h1Text && (
        <>
          <H1 text={h1Text} />
          <DetailLine className="w-1/4" />
        </>
      )}
      {h3Text && (
        <>
          <H3 text={h3Text} />
          <DetailLine className="w-1/6" />
        </>
      )}
      {h5Text && (
        <>
          <H5 text={h5Text} />
          <DetailLine className="w-1/12" />
        </>
      )}
      <Div className={textAreaClassName}>{children}</Div>
    </div>
  );
};

export default TextArea;
