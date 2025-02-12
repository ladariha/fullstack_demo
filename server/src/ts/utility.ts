type Todo = {
  title: string;
  text: string;
  timeCreated: Date;
  author?: string;
};

type PartialTodo = Partial<Todo>;
const x: PartialTodo = { title: "" };
type RequiredTodo = Required<Todo>;

type PickedTodo = Pick<Todo, "author" | "text">;

type TodoWithoutDate = Omit<Todo, "timeCreated">;
type ReadonlyTodo = Readonly<Todo>;

const fetchData = async (): Promise<Todo> => {
  return (await fetch("asd")).json();
};

const result = await fetchData();
