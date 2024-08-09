"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LoginOptions } from "@/components/LoginOptions";
import { PasskeyModal } from "@/components/PasskeyModal";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { Chrome } from "lucide-react";

export default function Login({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";

  const { status, data: session } = useSession();
  if (status === "authenticated") {
  } else {
    return (
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12 relative">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Login with your Google account
              </p>
            </div>
            <div className="grid gap-4">
              <Button
                onClick={() => signIn("google")}
                variant="outline"
                className="w-full"
              >
                <Chrome className="mr-2 h-4 w-4" />
                Login with Google
              </Button>
            </div>
            <PasskeyModal />
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="https://placehold.co/1920x1080"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  }
}
