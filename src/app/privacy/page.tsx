import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 - Crew",
  description:
    "Crew 不会出售或泄露您的个人信息，所有数据仅用于提供核心功能。",
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <h1>隐私政策</h1>
      <p>
        我们非常重视您的隐私。Crew 不会出售、交换或以其他方式向无关的第三方披露
        您的个人信息。
      </p>
      <p>
        我们使用 Firebase 提供的身份验证与相关云服务，所收集的数据仅用于应用运行
        所需，并受到合理的安全与加密保护。
      </p>
      <p>如有疑问，欢迎通过 contact@yourcompany.com 与我们联系。</p>
    </main>
  );
}
