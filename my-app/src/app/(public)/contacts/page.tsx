import { prisma } from "@/lib/prisma";

export default async function page() {
  const users = await prisma.user.findFirst();
  const posts = await prisma.post.findMany();
  console.log(users);

  return (
    <div className="pt-20 bg-[#171717]">
      <ul className="">
        {posts.map(({ id, title, published, content }) => (
          <li
            key={id}
            className="text-white border-b border-b-white/30 flex flex-col py-10"
          >
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>{published ? "😎" : "😒"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
