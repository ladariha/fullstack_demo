import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message";

export type MessageWithId = MessageModel & { id: string };

export type UserRecord = {
  name: string;
  answer: "yes" | "no" | "if-needed";
};
export type DateRecord = {
  timestamp: number;
  records: UserRecord[];
};
export type PollingEvent = {
  location?: string | null;
  title: string;
  id: string;
  dates: DateRecord[];
};
export type EventsListProps = {
  data: PollingEvent[];
};
