import Head from "next/head";
import Input from "@/components/input";

export default function Home() {
  return (
    <>
      <Input
        title="비밀번호 확인"
        palceholder="비밀번호를 한번 더 입력해 주세요"
        data="pwd"
      />
      <Input
        title="비밀번호"
        palceholder="비밀번호를 한번 더 입력해 주세요"
        data="pwd"
      />
      <Input
        title="이메일"
        palceholder="이메일를 한번 더 입력해 주세요"
        data="이메일"
      />
      <Input
        title="닉네임"
        palceholder="닉네임를 한번 더 입력해 주세요"
        data="닉네임"
      />
    </>
  );
}
