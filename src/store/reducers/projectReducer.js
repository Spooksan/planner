const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "help me find Ron", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};
export default projectReducer;
