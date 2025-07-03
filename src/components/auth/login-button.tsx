"use client";

import { useRouter } from "next/navigation";

type LogginButtonProps = {
  children?: React.ReactNode;
  asChild?: boolean;
  mode?: "modal" | "redirect";
};

export default function LogginButton({ asChild, children, mode = "redirect" }: LogginButtonProps) {
  const router = useRouter();
  function onClick() {
    router.push("/login");
  }

  if (mode === "modal") {
    return <div>implement modal login</div>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
