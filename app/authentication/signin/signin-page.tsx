import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export async function SignInPage() {
  return (
    <div>
      <Dialog>
        <form action="handleSignIn">
          <Label />
          <Input />
        </form>
      </Dialog>
    </div>
  );
}
