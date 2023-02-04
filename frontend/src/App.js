import "./App.css";
import DataScreen from "./components/DataSreen";
import FormContainer from "./components/Form";
import FormContainer2 from "./components/From-2";

function App() {
  return (
    <>
      <main className="py-3">
        <DataScreen />
        <FormContainer />
        <FormContainer2 />
      </main>
    </>
  );
}

export default App;
