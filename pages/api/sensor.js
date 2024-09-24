// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export async function getSensorHistoryData() {
  // mock data
  return [
    {
      timestamp: "2024-09-15T18:55:17.555Z",
      temperature: 22.5,
      humidity: 55,
      moisture: 32,
    },
    {
      timestamp: "2024-09-15T18:55:18.555Z",
      temperature: 23.5,
      humidity: 56,
      moisture: 33,
    },
    {
      timestamp: "2024-09-15T18:55:19.555Z",
      temperature: 24.5,
      humidity: 57,
      moisture: 34,
    },
    {
      timestamp: "2024-09-15T18:55:20.555Z",
      temperature: 25.5,
      humidity: 58,
      moisture: 35,
    },
    {
      timestamp: "2024-09-15T18:55:21.555Z",
      temperature: 26.5,
      humidity: 59,
      moisture: 36,
    },
  ];
  /**
  try {
    const res = await fetch("http://localhost:8080/sensor-data");
    if (!res.ok) {
      throw new Error("Failed to fetch sensor data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
  */
}
