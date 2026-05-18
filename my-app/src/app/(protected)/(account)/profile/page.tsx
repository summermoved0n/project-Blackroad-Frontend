import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { dbFindUser } from "@/lib/repositories/auth.repo";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";

type TokenPayload = {
  email: string;
};

export default async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const { email } = jwt.verify(token!, process.env.JWT_SECRET!) as TokenPayload;
  const user = await dbFindUser({ email });
  console.log(user);

  return (
    <section className="text-white flex flex-col gap-10">
      <ProfileInfo user={user} />
      <ChangePassword />
    </section>
  );
}
