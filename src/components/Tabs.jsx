const Tabs = ({ todos, selectedTab, setSelectedTab }) => {
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const numberOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => !todo.completed).length
            : todos.filter((todo) => todo.completed).length;

        return (
          <button
            key={index}
            className={
              "tab-button " + (selectedTab === tab ? "tab-selected" : "")
            }
            onClick={() => setSelectedTab(tab)}
          >
            <h4>
              {tab} <span>({numberOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
};
export default Tabs;
