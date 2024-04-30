import React from "react";
import { useRouter } from "next/router";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();

  return (
    <a
      href={href}
      className="text-blue-500 hover:underline"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
