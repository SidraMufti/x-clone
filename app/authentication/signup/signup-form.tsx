import { Button } from "@/components/ui/button";
import Credentials from "../credentials";

export default function SignUpForm() {
  return (
    <>
      <Button>Sign in with Google</Button>
      <Button>Sign in with Github</Button>
      <p>or</p>
      <Credentials></Credentials>
    </>
  );
}
