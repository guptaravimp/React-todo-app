import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div classNameName="container ">
      {todoItems.map((item) => (
        //  <TodoItem todoDate="14/4/2023" todoName="buy milk icecream"></TodoItem>
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
      {/* <TodoItem todoDate="14/4/2023" todoName="buy milk icecream"></TodoItem>
      <TodoItem todoDate="14/4/2023" todoName="buy milk icecream"></TodoItem> */}
    </div>
  );
};
export default TodoItems;
