import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '@brainhubeu/react-carousel/lib/style.css';

import styles from './styles.module.scss';

const BaseCard = ({ item, loading, style }) => {
  return (
    <div style={style} className={styles.root}>
      <div className={styles.card}>
        <div className={styles.mediaBox}>
          <div className={styles.mediaPanel}>
            {loading ? (
              <Skeleton
                width="100%"
                height="100%"
                className={styles.mediaLoading}
              />
            ) : (
              <div className={styles.imageBox}>
                <img className={styles.media} src={item?.image} />
              </div>
            )}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.topLine}>
            <div className={styles.itemName}>
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <div className={styles.name}>{item.name}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BaseCard);
