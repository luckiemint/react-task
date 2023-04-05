export const InputForm = ({
  handleSubmit,
  submitButtonLabel,
  inputData,
  setInputData,
}) => {
  console.log("form ran");
  console.log("data", inputData);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(inputData);
        }}
      >
        <div>
          <input
            type="number"
            name="id"
            className="form-control"
            disabled
            hidden
          />
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
            value={inputData.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            value={inputData.email || ""}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <input
            type="date"
            name="dob"
            className="form-control"
            onChange={(e) =>
              setInputData({ ...inputData, dob: e.target.value })
            }
            value={inputData.dob || ""}
          />
        </div>
        <button type="submit" className="btn btn-info mt-3">
          {submitButtonLabel}
        </button>
      </form>
    </>
  );
};

export default InputForm;
