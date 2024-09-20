import { RealtimeDataContext } from "@/components/layout";
import { useContext } from "react";
import styles from "@/styles/Dashboard.module.css"; // Import a custom CSS module
import Image from "next/image";
import ExpandableItem from "@/components/Item/ExpandableItem";
import SimpleItem from "@/components/Item/SimpleItem";
import Link from "next/link";

export default function Dashboard() {
  const realtimeData = useContext(RealtimeDataContext);

  return (
    <>
      <div className="container">
        <div className={`container, ${styles.dataBody}`}>
          <h1>Welcome back, User</h1>
          <ul>
            <SimpleItem key={"Favourites"} title={"Favourites"} icon={"*"}>
              <ul>
                <li>
                  <Link href={"/devices/Warehouse"}>Warehouse</Link>
                </li>
              </ul>
            </SimpleItem>
            <SimpleItem key={"Quick View"} title={"Quick View"} icon={"#"}>
              <ul>
                {realtimeData?.map(
                  ({ device, temperature, humidity, timestamp }) => (
                    <ExpandableItem title={device} key={device}>
                      <ul>
                        <li>Date: {timestamp}</li>
                        <li>Temperature: {temperature}</li>
                        <li>Humidity: {humidity}</li>
                      </ul>
                    </ExpandableItem>
                  )
                )}
              </ul>
            </SimpleItem>
          </ul>
        </div>

        {/* Responsive Grid */}
        <div className="container text-center mt-4">
          <div className="row">
            <div className={`col-12 col-sm-4 p-2`} style={{ minWidth: 214 }}>
              <div className="card">
                <Image
                  src="/path/to/image.jpg"
                  className="card-img-top"
                  alt="Card image"
                  width={288} // Example width
                  height={162} // Example height, adjust according to your image's aspect ratio
                />
                <div className="card-body">
                  <a href="#" className="btn btn-primary">
                    Add Device <i className="far fa-plus-square"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-12 col-sm-4 p-2`} style={{ minWidth: 214 }}>
              <div className="card">
                <Image
                  src="/path/to/image.jpg"
                  className="card-img-top"
                  alt="Card image"
                  width={288} // Example width
                  height={162} // Example height, adjust according to your image's aspect ratio
                />
                <div className="card-body">
                  <a href="#" className="btn btn-primary">
                    Your Devices <i className="fas fa-mobile-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-12 col-sm-4 p-2`} style={{ minWidth: 214 }}>
              <div className="card">
                <Image
                  src="/path/to/image.jpg"
                  className="card-img-top"
                  alt="Card image"
                  width={288} // Example width
                  height={162} // Example height, adjust according to your image's aspect ratio
                />
                <div className="card-body">
                  <a href="#" className="btn btn-primary">
                    Your Data <i className="fas fa-database"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
