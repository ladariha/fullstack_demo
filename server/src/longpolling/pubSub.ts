export enum EventName {
  NewData = "NewData",
  NewUser = "NewUser",
}

type EventCallback = (payload?: unknown) => void;
type SubscriberId = string;

const subscribers = new Map<EventName, Record<SubscriberId, EventCallback>>();

export const subscribe = (event: EventName, callback: EventCallback): SubscriberId => {
  const id = Math.random().toString(36);
  const eventSubscribers = subscribers.get(event) || {};
  eventSubscribers[id] = callback;
  subscribers.set(event, eventSubscribers);
  return id;
};

export const unsubscribe = (event: EventName, id: SubscriberId) => {
  const eventSubscribers = subscribers.get(event);
  if (eventSubscribers) {
    delete eventSubscribers[id];
  }
};

export const publish = (event: EventName, payload?: unknown) => {
  const eventSubscribers = subscribers.get(event);
  if (eventSubscribers) {
    Object.keys(eventSubscribers).forEach((subscriberId) => {
      const callback = eventSubscribers[subscriberId];
      unsubscribe(event, subscriberId);
      callback(payload);
    });
  }
};
