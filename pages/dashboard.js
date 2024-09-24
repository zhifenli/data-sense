import { RealtimeDataContext } from "@/components/layout";
import { useContext } from "react";
import styles from "@/styles/Dashboard.module.css"; // Import a custom CSS module
import Image from "next/image";
import ExpandableItem from "@/components/Item/ExpandableItem";
import SimpleItem from "@/components/Item/SimpleItem";
import Link from "next/link";

import DownloadImg from "@/public/assets/images/download.webp";
import FavouriteImg from "@/public/assets/images/favourite.gif";

/**
 * FE on history page: do GET ALL []  => 10005
 * BE push latest data to FE via socket, then FE display it and push to array
 * @returns
 *
 */
export default function Dashboard() {
  const realtimeData = useContext(RealtimeDataContext);
  const items = [
    {
      src: DownloadImg,
      name: "Add Device",
      link: "#",
      buttonText: "Add Device",
      icon: <i className="far fa-plus-square"></i>,
    },
    {
      src: DownloadImg,
      name: "Your Devices",
      link: "#",
      buttonText: "Your Devices",
      icon: <i className="fas fa-laptop me-2"></i>,
    },
    {
      src: DownloadImg,
      name: "Your Data",
      link: "#",
      buttonText: "Your Data",
      icon: <i className="fas fa-database me-2"></i>,
    },
  ];

  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}
      >
        <div className={`container, ${styles.dataBody}`}>
          <h1 className="m-3 p-3">Welcome back, User</h1>
          <ul className="m-3 p-3">
            <SimpleItem
              className={"mb-3"}
              key={"Favourites"}
              title={"Favourites"}
              icon={<i class="fa-solid fa-star"></i>}
            >
              <ul>
                <li
                  className="p-2 m-1 mb-6"
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    border: "1px solid grey",
                    borderRadius: "9px",
                  }}
                >
                  <h3>
                    <Link
                      href={"/devices/Warehouse"}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Warehouse
                      <i class="fa-solid fa-square-up-right"></i>
                    </Link>
                  </h3>
                </li>
              </ul>
              <div></div>
            </SimpleItem>
            <SimpleItem
              key={"Quick View"}
              title={"Quick View"}
              icon={<i class="fa-sharp fa-solid fa-eye"></i>}
            >
              <ul>
                {[realtimeData]?.map(
                  ({ device, temperature, humidity, moisture, timestamp }) => (
                    <ExpandableItem title={device || "Home"} key={device}>
                      <ul>
                        <li>Date: {timestamp}</li>
                        <li>Temperature: {temperature}</li>
                        <li>Humidity: {humidity}</li>
                        <li>Moisture: {moisture}</li>
                      </ul>
                    </ExpandableItem>
                  )
                )}
              </ul>
            </SimpleItem>
          </ul>
        </div>

        {/* Responsive Grid */}
        <div className={styles.cardsContainer}>
          {items.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={item.src}
                className="card-img-top"
                alt={item.name}
                width={288} // Example width
                height={162} // Example height, adjust according to your image's aspect ratio
              />
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a href={item.link} className="btn btn-basic">
                  {item.buttonText} {item.icon}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
