"use client";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
// https://www.youtube.com/shorts/3QwRCawSpcw
