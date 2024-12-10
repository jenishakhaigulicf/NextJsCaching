import Messages from "@/components/messages";
import { unstable_noStore } from "next/cache";

// this is same as the next revalidate option in the fetch
// export is needed
// revalidate is a reserved word
// export const revalidate = 5;
// -------

// export const dynamic = "force-dynamic"; // same as no-store

export default async function MessagesPage() {
  // this is more recommended
  // than this export const dynamic = "force-dynamic";
  // unstable_noStore();
  // -------

  // here same request is in two places
  // but when refreshing the page only one api gets called
  // because nextJs caches
  // this is called request memoization
  const response = await fetch("http://localhost:8080/messages", {
    // cache: "no-store", //Next15
    // -------
    // cache: "force-cache", // Next14
    // -------
    // next: {
    //   revalidate: 5, // 5secs to wait for revalidation
    // },
    // -------
    // tag can be useful when revalidating different data fetch at the same time
    // same tag can be used for the different fetches
    // and revalidateTag("tagName") can be done to revalidate all
    // next: { tags: ["msg"] },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
