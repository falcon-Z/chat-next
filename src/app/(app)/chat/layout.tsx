export default function ChatLayout(props: {
  inbox: React.ReactNode;
  conversations: React.ReactNode;
}) {
  return (
    <div className="grid h-full w-full md:grid-cols-2   gap-4  ">
      <section className="max-w-xs w-full h-full p-2">{props.inbox}</section>
      <section className="w-full h-full p-2">{props.conversations}</section>
    </div>
  );
}
