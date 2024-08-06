"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Chrome } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";

const Logindiv = () => {
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
            <div>
              <Button variant="outline" className="absolute bottom-4 left-4">
                Admin
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="absolute bottom-4 left-4"
                  >
                    Admin
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-lg font-medium">Enter 6-digit code</p>
                  </div>
                  <DialogFooter>
                    <div>
                      <Button type="button">Submit</Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
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
};

export default Logindiv;
