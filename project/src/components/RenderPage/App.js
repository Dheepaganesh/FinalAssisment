import TableComponent from "../TableComponent";
import { styled } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../../redux/reduxstore";

const RenderPage = styled.div`
  margin: 0%;
  padding: 0px;
  width: 100%;
  height: auto;
  font-family: "SF Pro Display";
  border: 1px solid #a3adb8;
  background-color: rgb(248, 248, 249);

  @media (max-width: 400px) {
    width: 400px;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <RenderPage className="App">
        <TableComponent />
      </RenderPage>
    </Provider>
  );
}

export default App;
