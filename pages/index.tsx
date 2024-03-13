import Button from "@/components/Button/Button";
import Filter from "@/components/Filter/Filter";
import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import responseData from "../components/Post/response_mockupdata.json";
import { h2 } from "@/styles/fontsStyle";
import Post from "@/components/Post";

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

export const utilFormatDuration = (duration: string, workhour: number) => {
  const date = duration.slice(0, 10);
  const time = duration.slice(11, 13);
  const minutes = duration.slice(14, 16);

  const numTime = Number(time);
  const worktimeAdded = numTime + workhour;

  const newTime = `${worktimeAdded % 24}:${minutes}`;

  return `${date} ${time}:${minutes}~${newTime}`;
};

export default function Home() {
  const [user, setUser] = useState<
    "guest" | "employee" | "employer" | undefined
  >("guest");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const { items } = responseData;
  const itemArray = items.map((item) => item.item);

  const itemDatas = itemArray.map((item) => ({
    noticeId: item.id,
    shopId: item.shop?.item.id,
    name: item.shop?.item.name,
    duration: utilFormatDuration(item.startsAt, item.workhour),
    workhour: item.workhour,
    address: item.shop?.item.address1,
    hourlyPay: item.hourlyPay,
    originalHourlyPay: item.shop?.item.originalHourlyPay,
    imageUrl: item.shop?.item.imageUrl,
    closed: item.closed,
  }));

  return (
    <>
      <Gnb userType={user} />
      <button onClick={() => setUser("guest")}>로그인하지 않음</button>
      <button onClick={() => setUser("employee")}>알바님</button>
      <button onClick={() => setUser("employer")}>사장님</button>
      <ButtonWrapper>
        <Button
          text="상세 필터"
          color="colored"
          handleClick={() => setIsModalVisible(!isModalVisible)}
        />
      </ButtonWrapper>
      <Filter
        isModalVisible={isModalVisible}
        handleModalClose={handleToggleModal}
      />

      <CustomPostList>
        <CustomPostListHeader>
          <h1>맞춤 공고</h1>
        </CustomPostListHeader>
        <CustomPostContent>
          {itemDatas.map((item) => (
            <Post key={item.noticeId} item={item} />
          ))}
        </CustomPostContent>
      </CustomPostList>
    </>
  );
}

const ButtonWrapper = styled.div`
  width: 80px;
`;
