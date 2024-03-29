import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styled from "@emotion/styled";
import ProfileEditForm from "./components/ProfileEditForm";
import ModalContent from "@/pages/shops/[shopId]/notices/[noticeId]/components/ModalContent";
import useCookie from "@/hooks/useCookies";
import MetaHead from "@/components/MetaHead";

export default function ProfileEdit() {
  const { userType } = useCookie();
  const router = useRouter();

  if (userType && userType !== "employee")
    return (
      <ModalContent
        modalIcon="alert"
        modalText="권한이 없습니다"
        handleYesClick={() => {
          router.push("/");
        }}
      />
    );

  return (
    <>
      <MetaHead title="+HE JULGE | 내 프로필 편집" />
      <Layout>
        <Wrapper>
          <ProfileEditForm />
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
