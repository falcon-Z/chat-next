export default function ChatLayout(props: {
  inbox: React.ReactNode;
  conversations: React.ReactNode;
}) {
  return (
    <div className="grid h-full w-full gap-4   md:grid-cols-2   ">
      <section className="h-full w-full max-w-sm ">{props.inbox}</section>
      <section className="h-full w-full ">{props.conversations}</section>
    </div>
  );
}
