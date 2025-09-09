import Parent from "./components/Parent";
import ParentWithoutMemo from "./components/ParentWithoutMemo";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-10 p-6">
      <ParentWithoutMemo />
      <Parent />
    </div>
  );
}

export default App;
