
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";

import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const result=await fetchPosts(1,30)
  const user=await currentUser()
  

  /*const userInfo=await fetchUser(user.id);
  if(!userInfo?.onboarding)redirect('/onboarding')*/

  console.log(result)
  return (
  <>
    <h1 className="head-text text-left">
      Home
    </h1>
    <section className="mt-9 flex flex-col gap-10">
       {result?.posts.map((post:any)=>(
         <ThreadCard
           key={post._id}
           id={post._id}
           currentUserId={user?.id || null}
           parentId={post.parentId}
           content={post.text}
           author={post.author}
           community={post.community}
           createdAt={post.createdAt}
           comments={post.children}
         />
       ))}
    </section>
  </>
  );
}
