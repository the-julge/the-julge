import Button from "@/components/Button/Button";
import Layout from "@/components/Layout";
import { body1Regular, h2 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <Layout>
      <Wrapper>
        <img src="images/404.svg" alt="page-not-found" />
        <Title>페이지를 찾을 수 없습니다</Title>
        <Text>
          페이지의 주소가 잘못 입력되었거나, 주소 변경 또는 삭제되어 요청하신
          페이지를 찾을 수 없습니다
        </Text>
        <ButtonWrapper>
          <Button
            text="돌아가기"
            color="colored"
            handleClick={() => {
              router.back();
            }}
          />
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 20px;
`;

const Title = styled.div`
  ${h2}
  color: #757575;
`;

const Text = styled.div`
  ${body1Regular}
  color: #757575;
  margin-top: -16px;
`;

const ButtonWrapper = styled.div`
  width: 352px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
