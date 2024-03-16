import { h2 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Layout from "@/components/Layout";
import RecommendNotice from "./home/components/RecommendNotice";
import AllNotice from "./home/components/AllNotice";

export default function Home() {
  return (
    <Layout>
      <RecommendNotice />
      <AllNotice />
    </Layout>
  );
}

const CustomPostList = styled.section`
  padding: 60px 0;
  max-width: 968px;
  margin: 0 auto;
`;
const CustomPostListHeader = styled.div`
  margin-bottom: 30px;
  width: 100%;
  ${h2};
`;

const CustomPostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 294px);
  gap: 31px 18px;
  margin: 0 auto;
  width: 100%;
`;
