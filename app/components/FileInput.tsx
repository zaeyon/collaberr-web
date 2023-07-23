import React, { useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import icon_clip from "../assets/icons/icon_clip.png";
import icon_exit from "../assets/icons/icon_exit-small.png";

interface ContainerProps {
  label: string;
}

interface InputProps {
  isExistedEmail?: boolean | undefined;
  isExistedUsername?: boolean | undefined;
  isInvaildEmail?: boolean | undefined;
  isInconPassword?: boolean | undefined;
  disabled?: boolean | undefined;
}

interface FileInputProps {
  disabled: boolean | undefined;
}

const Container = styled.div<ContainerProps>((props) => ({
  position: "relative",
  marginTop:
    props.label === "Email" ? 32 : props.label === "Brand Name" ? 20 : 24,
  display: "flex",
  flexDirection: "column",
  width:
    props.label === "First Name" || props.label === "Last Name"
      ? "48.2%"
      : "100%",
}));

const Label = styled.span`
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #35424c;
`;

const Input = styled.input<InputProps>`
  position: absolute;
  display: none;
  background-color: white;
  margin-top: 6px;
  padding: 14px 18px;
  border-radius: 8px;
  color: ${(props) => (props.disabled ? "#D1D7DF" : "#35424C")};
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;

  ::placeholder {
    color: #8696ab;
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.015em;
    text-align: left;
  }

  :hover {
    border: ${(props) =>
      props.disabled ? "1px solid #E6EAEF" : "1px solid #ACB8C8"};
  }

  :focus {
    outline: none;
    border: 1px solid #536878;
  }

  border: 1px solid #e6eaef;
`;

const FileInputContainer = styled.div<FileInputProps>`
  position: relative;
  border: 1px solid #e6eaef;
  background-color: white;
  margin-top: 6px;
  padding: 14px 18px;
  border-radius: 8px;
  color: #35424c;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;

  :hover {
    border: ${(props) =>
      props.disabled ? "1px solid #E6EAEF" : "1px solid #ACB8C8"};
  }
`;

const FileInputPlaceholder = styled.span`
  margin-left: 10px;
  color: #8696ab;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
`;

const FileNameSpan = styled.span`
  margin-left: 10px;
  color: #35424c;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
`;

const Error = styled.div`
  position: absolute;
  bottom: -22px;
  left: 0px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #f04d3e;
`;

const Description = styled.div`
  margin-top: 6px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #acb8c8;
`;

const Icon = styled(Image)`
  cursor: pointer;
`;

const FileListDiv = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const FileListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--secondary-gray-gray-100, #f1f4f7);
  padding: 6px 0px;
`;

interface props {
  type?: string;
  accept?: string;
  disabled?: boolean;
  value?: any;
  label: string;
  placeholder?: string;
  description?: string;
  changeFile: (file: any, src: any) => void;
  deleteFiles?: (name: string) => void;
}

export default function FileInput({
  type = "one",
  accept = "",
  disabled = false,
  value,
  label,
  placeholder,
  description,
  changeFile,
  deleteFiles,
}: props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickFileInput = () => {
    inputRef.current?.click();
  };

  const changeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          changeFile(e.target.files?.[0], reader.result);
          resolve();
        };
      });
    }
  };

  return (
    <Container label={label}>
      <Label>{label}</Label>
      <FileInputContainer onClick={() => clickFileInput()} disabled={disabled}>
        <Icon width={24} height={24} src={icon_clip} alt={"icon_clip"} />
        {type === "many" && (
          <FileInputPlaceholder>{placeholder}</FileInputPlaceholder>
        )}
        {!value && type === "one" && (
          <FileInputPlaceholder>{placeholder}</FileInputPlaceholder>
        )}
        {value && type === "one" && <FileNameSpan>{value.name}</FileNameSpan>}
        <Input
          ref={inputRef}
          accept={accept}
          disabled={disabled}
          type={"file"}
          onChange={(e) => changeFileInput(e)}
        />
      </FileInputContainer>
      {description && <Description>{description}</Description>}
      {type === "many" && (
        <FileListDiv>
          {value.map((item: any, index: number) => {
            return (
              <FileListItem key={index}>
                {item.name}
                <Icon
                  onClick={() => (deleteFiles ? deleteFiles(item.name) : "")}
                  width={20}
                  height={20}
                  alt={"icon_exit"}
                  src={icon_exit}
                />
              </FileListItem>
            );
          })}
        </FileListDiv>
      )}
    </Container>
  );
}
