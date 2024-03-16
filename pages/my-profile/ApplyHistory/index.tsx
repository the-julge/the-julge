import { h1Regular, h3 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import HistoryTable from "./HistoryTable";
import { History } from "@/components/Table";

type ApplyHistoryProps = {
  histories: History[];
};

export default function ApplyHistory({ histories }: ApplyHistoryProps) {
  return (
    <Wrapper>
      <Title>신청 내역</Title>
      <HistoryTable histories={histories} />
    </Wrapper>
  );
}

const Title = styled.span`
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;

const Wrapper = styled.div`
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  font-size: 16px;
  padding: 60px 0 120px;

  @media (max-width: 1023px) {
    padding: 60px 32px 120px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px 80px;
  }
`;
