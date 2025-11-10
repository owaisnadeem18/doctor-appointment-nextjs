import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { github, googleIcon } from "@/assets";
import Link from "next/link";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
     <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-3">
        <Button asChild variant="outline">
          <Link href="/api/auth/signin/google">
            <Image alt="google" src={googleIcon} className="w-6 h-6" />
            Continue with Google
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/api/auth/signin/github">
            <Image alt="github" src={github} className="w-4 h-4" />
            Continue with GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}
