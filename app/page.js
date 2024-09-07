import Image from "next/image";
import styles from "./page.module.css";
import MainImage from "@/public/main.jpg";
import Icon from "@/public/icon.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <div className={styles.top__info}>
          Seller Centre | Start Selling | Download | Follow us on Facebook and
          Instagram
        </div>

        <div className={styles.top__info}>
          Notifications | Help | English | Tedric Chow
        </div>
      </div>

      <div className={styles.favs__header}>
        <div className={styles.favs__container}>
          <div className={styles.favs__logo}>
            <Image src={Icon} />
            Shopee | Favourite Items
          </div>

          <div className={styles.favs__search}>
            Search for products and shops
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main__heading}>
          <h1>Your Lists</h1>

          <div>Create a List | Get List Help</div>
        </div>
        <div className={styles.image__container}>
          <Image src={MainImage} />
        </div>
      </div>
    </div>
  );
}
