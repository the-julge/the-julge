import { useToast } from "@/contexts/ToastContext";
import { body1Regular, h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import FormContainer from "./FormContainer";

export default function PostForm({}) {
  const router = useRouter();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    wage: "",
    start_at: "",
    work_time: "",
    description: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleRegisterClick = () => {
    const confirmed = window.confirm(
      `\n시급: ${formData.wage}\n시작 일시: ${formData.start_at}\n업무 시간: ${formData.work_time}\n공고 설명: ${formData.description}\n\n등록하시겠습니까?`,
    );
    if (confirmed) {
      router.push("/"); // 공고 등록 한 후 id를 이용해 shops/${shopId}/notices/${noticeId}로 이동해야함
      showToast("등록되었습니다!");
    }
  };

  return (
    <Wrapper>
      <Title>공고 등록</Title>
      <Content>
        <FormContainer
          label="시급*"
          gridArea="wage"
          inputProps={{
            placeholder: "15,000",
            unit: "원",
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("wage", event.target.value),
          }}
        />
        <FormContainer
          label="시작 일시*"
          gridArea="start_at"
          inputProps={{
            type: "date",
            placeholder: "2023-07-01 15:00",
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("start_at", event.target.value),
          }}
        />
        <FormContainer
          label="업무 시간*"
          gridArea="work_time"
          inputProps={{
            placeholder: "3",
            unit: "시간",
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("work_time", event.target.value),
          }}
        />
        <FormContainer
          label="공고 설명"
          gridArea="description"
          inputProps={{
            placeholder: "공고 상세",
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("description", event.target.value),
          }}
        />
      </Content>
      <Button
        text="등록하기"
        color="colored"
        width={312}
        handleClick={handleRegisterClick}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--The-julge-gray-05, #fafafa);
  display: flex;
  padding: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Title = styled.span`
  ${h1}
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  row-gap: 20px;
  column-gap: 24px;
  grid-template-areas: "wage start_at work_time" "wage_input start_at_input work_time_input" "description description description" "description_input description_input description_input";
  ${body1Regular}
`;
