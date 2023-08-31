import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/action";
import { Table } from "antd";

const GetData = () => {
  const InputValue = useSelector((state) => state?.user.user);
  const dispatch = useDispatch();

  const CheckData = () => {
    console.log(InputValue.data);
  };

  useEffect(() => {
    dispatch(FetchUser());
  }, []);
  return (
    <div>
      <Table
        dataSource={InputValue.data}
        columns={[
          { title: "Id", dataIndex: "id" },
          { title: "Name", dataIndex: "name" },
          { title: "Organization ID", dataIndex: "organization_id" },
          { title: "BluePrint ID", dataIndex: "blueprint_id" },
        ]}
      />
    </div>
  );
};

export default GetData;
