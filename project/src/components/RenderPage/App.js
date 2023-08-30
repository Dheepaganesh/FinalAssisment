import TableComponent from "../TableComponent";
import { styled } from "styled-components";

const RenderPage = styled.div`
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
    <RenderPage className="App">
      <TableComponent />
    </RenderPage>
  );
}

export default App;
