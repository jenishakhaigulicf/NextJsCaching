export default async function MessagesLayout({ children }) {
  // here same request is in two places
  // but when refreshing the page only one api gets called
  // because nextJs caches
  // this is called request memoization
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
