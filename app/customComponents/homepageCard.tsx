import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Footer from "./footer";
import { SignInButton } from "../authentication/signin/signin-button";

export default function HomePageCard() {
  return (
    <main className="flex mx-auto min-h-screen max-w-screen-2xl items-center px-10">
      <div className="flex items-center justify-center flex-1">
        <Image
          src="/socio_canva.png"
          alt="Socio"
          width={600}
          height={600}
        ></Image>
      </div>

      <Card className="flex-1 flex flex-col items-center justify-center bg-teal-50">
        <CardHeader className="items-center justify-center">
          <div className="font-bold items-center justify-center p-3">
            <p className="text-2xl mb-4">'Your NEW Social Media Bestie'</p>
            <p className=" text-2xl flex justify-between">
              Join today
              <span>
                <Button className="px-5 items-center justify-center bg-teal-500	hover:bg-teal-700	">
                  {" "}
                  Create account
                </Button>
              </span>
            </p>
          </div>

          <p>OR</p>

          <CardDescription>
            <span className="flex gap-10">
              <Button className="px-5 items-center justify-center bg-teal-500	hover:bg-teal-700">
                {" "}
                Sign up with Google{" "}
              </Button>
              <Button className="px-5 items-center justify-center bg-teal-500	hover:bg-teal-700	">
                {" "}
                Sign up with Github{" "}
              </Button>
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="px-24 text-sm ">
          By signing up, you agree to the{" "}
          <span>
            <a
              href="/customComponents/termsOfService"
              className="text-teal-500 hover: underline"
            >
              Terms of Service
            </a>
          </span>{" "}
          and{" "}
          <a
            href="/customComponents/termsOfService"
            className="text-teal-500	 hover: underline "
          >
            Privacy Policy
          </a>
          <span>, including</span>{" "}
          <span>
            <a href="/cookies" className="text-teal-500	hover: underline">
              {" "}
              Cookie Use.
            </a>
          </span>
        </CardContent>

        <SignInButton />
      </Card>
    </main>
  );
}
