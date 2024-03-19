import { useForm } from "react-hook-form";
import { SigninFormData } from "../../types/types";
import { validateSigninData } from "@/lib/utils/validateFormData";
import { useRouter } from "next/router";
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  WRONG_INFORMATION,
} from "@/lib/constants/errorMessage";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import Input from "@/components/Input";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegex = /^.{8,}$/;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({ mode: "onChange" });
  const router = useRouter();

  const { email: emailError, password: passwordError } = errors;

  const onSubmit = async (formData: any) => {
    const isValid = validateSigninData(formData);
    if (!isValid) {
      alert(WRONG_INFORMATION);
      return;
    }

    try {
      const { data } = await axios.post(`${BASE_URL}/token`, formData);
      const { token } = data.item;
      document.cookie = `Authorization=Bearer ${token}; path=/`;
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        alert(message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="이메일"
        error={emailError}
        register={register("email", {
          pattern: {
            value: emailRegex,
            message: INVALID_EMAIL,
          },
        })}
      />
      <Input
        label="비밀번호"
        error={passwordError}
        type="password"
        register={register("password", {
          pattern: {
            value: passwordRegex,
            message: INVALID_PASSWORD,
          },
        })}
      />
      <Button type="submit" text="로그인 하기" />
    </Form>
  );
}

const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    font-size: 16px;
  }
`;
