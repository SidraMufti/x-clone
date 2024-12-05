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

export default function HomePageCard() {
  return (
    <main className="flex w-full px-4 mx-auto min-h-screen max-w-screen-2xl items-center">
      <div className="mx-auto min-h-screen max-w-screen-2xl items-center px-8">
        <Image
          src="/socio_canva.png"
          alt="Socio"
          width={300}
          height={300}
        ></Image>
      </div>

      <Card className="flex flex-col w-1/2 items-center justify-center bg-teal-50">
        <CardHeader className="items-center justify-center">
          <div className="font-bold items-center justify-center p-3">
            <p className="text-2xl mb-4">'Your NEW Social Media Bestie'</p>
            <p className=" text-2xl flex justify-between">
              Join today
              <span>
                <Button className="px-5 items-center justify-center ">
                  {" "}
                  Create account
                </Button>
              </span>
            </p>
          </div>

          <p>OR</p>

          <CardDescription>
            <span>
              <Button> Sign up with Google </Button>
              <Button> Sign up with Github </Button>
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="text-sm">
          By signing up, you agree to the{" "}
          <span>
            <a
              href="/customComponents/termsOfService"
              className="text-blue-800 hover: underline"
            >
              Terms of Service
            </a>
          </span>{" "}
          and{" "}
          <a
            href="/customComponents/termsOfService"
            className="text-blue-800 hover: underline"
          >
            Privacy Policy
          </a>
          <span>, including</span>{" "}
          <span>
            <a href="/cookies" className="text-blue-800 hover: underline">
              {" "}
              Cookie Use.
            </a>
          </span>
        </CardContent>

        <CardFooter className="flex gap-5">
          Already have an account?
          <div>
            <Button> Sign in </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
