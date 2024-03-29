import React from "react";
import { Button, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./bigCard.module.css";

const BigCard = ({img, title, description, bookId}) => {
  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardBasis}>
        <div className={styles.bigCardImg}>
          <img
            className={styles.bigCardImag}
            src={`http://localhost:4000/${img}`}
            alt=""
          />
        </div>
        <div className={styles.bigCardContent}>
          <div className={styles.contentHeader}>{title}</div>
          <div className={styles.btnContainer}>
          <div className={styles.endedStories}>
            <h5>Завершенная история</h5>
          </div>
          <Link to={`/book/${bookId}`}><Button className={styles.readBook} variant="success">Читать</Button></Link>
          </div>
        
          <div className={styles.info}>
            <div className={styles.likes}>
              <div className={styles.likesIcon}>
                <div><ion-icon name="happy-outline"></ion-icon></div>
                <span>Голосов</span>
              </div>
              <h6>3</h6>
            </div>
            <div className={styles.time}>
              <div className={styles.bookIcon}>
                <div><ion-icon name="book-outline"></ion-icon></div>
                <span>Время</span>
              </div>
              <h6>23 мин</h6>
            </div>
          </div>
          <div className={styles.contentMain}>
            {description.substr(0, 450) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;