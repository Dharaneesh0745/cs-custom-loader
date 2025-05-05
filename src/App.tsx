import * as Loaders from "./components";

const App = () => {
  return (
    <div className="p-10 grid grid-cols-2 gap-6 bg-gray-100 min-h-screen">
      {Object.entries(Loaders).map(([name, Component]) => (
        <div key={name} className="">
          <Component size={50} color="green" />
        </div>
      ))}
    </div>
  );
};

export default App;
