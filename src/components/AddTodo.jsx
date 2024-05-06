function AddTodo() {
  return (
    <div className="row">
      <div className=" inputi col-6">
        <input type="text" placeholder="Enter todo here" />
      </div>
      <div className=" inputi col-4">
        <input type="date" name="" id="" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
