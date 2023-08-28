import HeadComponent from "./Header";
import { Table } from "antd";
import SubHead from "./SubHead";
import TableMenu from "./MenuTable";

const TableComponent = () => {
  return (
    <div>
      <HeadComponent />
      <SubHead />
      <TableMenu />
      <Table />
    </div>
  );
};

export default TableComponent;
