import HeadComponent from "./Header";
import { Button, Switch, Table } from "antd";
import SubHead from "./SubHead";
import TableMenu from "./MenuTable";


const columns = [
  {
    title: 'S.no',
    dataIndex: 'serialNumber',
    key: 'serialNumber',
  },
  {
    title: 'AgentInfo',
    dataIndex: 'agentInfo',
    key: 'agentInfo',
  },
  {
    title: 'MappedEmail',
    dataIndex: 'mappedEmail',
    key: 'mappedEmail',
  },
  {
    title: 'Actions',
    dataIndex:'actions',
    key: 'actions',
    
  },
];

const data =[
  {
    key: '1',
    serialNumber: '1',
    agentInfo: <div><p>Micheal</p><p>micheal@gmail.com</p></div>,
    mappedEmail: <div><Switch/></div>,
    actions:<Button>Reset</Button>
  }]

const TableComponent = () => {
  return (
    <div>
      <HeadComponent />
      <SubHead />
      <TableMenu />
      <Table columns={columns} dataSource={data}/>
    </div>
  );
};

export default TableComponent;
