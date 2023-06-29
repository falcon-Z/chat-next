import ConnectRandomlyButton from "@falcon-z/app/_components/app/connectRandomlyButton";
import InboxHeader from "@falcon-z/app/_components/app/inbox/inboxHeader";

export default function InboxPage() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <InboxHeader />
      <div>
        <ConnectRandomlyButton />
      </div>
    </div>
  );
}
