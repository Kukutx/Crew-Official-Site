import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用条款 - Crew",
  description: "使用 Crew 即表示您同意遵守相关法律法规与平台规则。",
};

export default function TermsPage() {
  return (
    <main className="legal">
      <h1>使用条款</h1>
      <p>使用 Crew 应用即表示您同意遵守相关法律法规，不得利用本服务进行违法行为。</p>
      <p>Crew 保留在必要时修改或更新条款的权利，并会通过应用或邮件进行通知。</p>
      <p>继续使用本服务即视为接受更新后的条款。</p>
    </main>
  );
}
