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
    <div>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Moisture</th>
          </tr>
        </thead>
        <tbody>
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
