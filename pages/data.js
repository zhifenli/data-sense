import { RealtimeDataContext } from "@/components/layout";
import { useContext, useEffect, useState } from "react";
import { getSensorHistoryData } from "./api/sensor";

// with socket
export default function History1({ data }) {
  const [localData, setLocalData] = useState(data);

  const realtimeData = useContext(RealtimeDataContext);

  useEffect(() => {
    setLocalData((prev) => {
      return [...prev, realtimeData];
    });
  }, [realtimeData]);

  return (
    <div
      className="container table-responsive "
      style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}
    >
      <table class="table align-middle boder-none">
        <thead>
          <tr>
            <th scope="col">Timestamp</th>
            <th scope="col">Temperature</th>
            <th scope="col">Humidity</th>
            <th scope="col">Moisture</th>
          </tr>
        </thead>
        <tbody className="boder-white">
          {localData?.slice(-15)?.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.timestamp}</td>
                <td>{row.temperature}</td>
                <td>{row.humidity}</td>
                <td>{row.moisture}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// This function runs on the server during the request
export async function getServerSideProps() {
  const data = await getSensorHistoryData();
  return {
    props: {
      data,
    },
  };
}
