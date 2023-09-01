import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/action";
import { Table } from "antd";
import { FetchTable } from "./StylePage/StyleComponent";
const GetData = () => {
  const FetchValue = useSelector((state) => state?.user);
  const loading = useSelector((state) => state?.loading);
  const error = useSelector((state) => state?.error);
  const dispatch = useDispatch();

  const CheckData = () => {
    console.log(FetchValue.data);
  };

  useEffect(() => {
    dispatch(FetchUser());
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>
          <FetchTable
            dataSource={FetchValue?.data}
            columns={[
              { title: "Id", dataIndex: "id" },
              { title: "Name", dataIndex: "name" },
              { title: "Organization ID", dataIndex: "organization_id" },
              { title: "BluePrint ID", dataIndex: "blueprint_id" },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default GetData;
