import React, { useState } from "react";
import { Tabs, Table } from "antd";
import { styled } from "styled-components";

const StyledTabs = styled(Tabs)`
  width: 1160px;
  background: #fff;
`;

const items = [
  {
    key: "1",
    label: "Tab 1",
    tableData: [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      // Add more data as needed
    ],
  },
  {
    key: "2",
    label: "Tab 2",
    tableData: [
      { name: "Bob", age: 28 },
      { name: "Eve", age: 22 },
      // Add more data as needed
    ],
  },
  {
    key: "3",
    label: "Tab 3",
    tableData: [
      { name: "Charlie", age: 35 },
      { name: "Grace", age: 27 },
      // Add more data as needed
    ],
  },
];

const TabComponent = () => {
  const [activeKey, setActiveKey] = useState(items[0].key);

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const activeItem = items.find((item) => item.key === activeKey);

  return (
    <StyledTabs defaultActiveKey={activeKey} onChange={handleTabChange}>
      {items.map((item) => (
        <Tabs.TabPane tab={item.label} key={item.key}>
          <Table
            dataSource={item.tableData}
            columns={[
              { title: "Name", dataIndex: "name" },
              { title: "Age", dataIndex: "age" },
            ]}
          />
        </Tabs.TabPane>
      ))}
    </StyledTabs>
  );
};

export default TabComponent;
