import Messages from "@/components/messages";

export default async function MessagesPage() {
  // here same request is in two places
  // but when refreshing the page only one api gets called
  // because nextJs caches
  // this is called request memoization
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
