import logo from "./logo.svg";
import TableComponent from "./components/TableComponent";
import { styled } from "styled-components";

const MainPage = styled.div`
  margin: 0%;
  padding: 0px;
  width: 1220px;
  height: auto;
  font-family: "Roboto";
  border: 1px solid #a3adb8;
  background-color: rgb(248, 248, 249);

  @media (max-width: 400px) {
    width: 400px;
  }
`;

function App() {
  return (
    <MainPage className="App">
      <TableComponent />
    </MainPage>
  );
}

export default App;
