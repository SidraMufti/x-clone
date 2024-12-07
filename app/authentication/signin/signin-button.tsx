"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export function SignInButton() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (email) {
      // setEmail(email)
      console.log("Email:", email);
    }
    return null;

    if (password) {
      // setPassword (hashedPassword)
      console.log("Password:", password);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex gap-5 items-center justify-center mb-4"
      >
        <div>
          Already have an account?
          <div>
            <Button
              // onClick={handleSignIn}
              className="px-5 items-center justify-center bg-teal-500	hover:bg-teal-700"
            >
              <Link href="./signin/signin-page"></Link> Sign in{" "}
            </Button>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  );
}
