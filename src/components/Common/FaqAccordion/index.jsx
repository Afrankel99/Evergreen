/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

const FaqAccordion = (props) => {
  const { faq } = props;

  const [current, setCurrent] = useState();
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  // determines height based on active state
  useEffect(() => {
    const calculateContentHeight = () => {
      if (ref.current) {
        setTimeout(() => {
          const { scrollHeight } = ref.current;
          ref.current.style.setProperty('--content-height', `${scrollHeight}px`);
        }, 400); // 0.4 seconds delay to match the transition duration
      }
    };

    calculateContentHeight();

    window.addEventListener('resize', calculateContentHeight);

    return () => window.removeEventListener('resize', calculateContentHeight);
  }, [active]);

  // closes info card if not currently selected
  useEffect(() => {
    if (current !== faq?._key) setActive(false);
  }, [current]);

  const toggle = () => {
    if (current !== faq?._key) {
      setActive(true);
      setCurrent(current);
    } else if (current === faq?._key) {
      setActive(false);
      setCurrent('');
    }
    setActive(!active);
    setCurrent(faq?._key);
  };

  return (
    <div className={classNames(styles.container, active && styles.activeContainer)} onClick={toggle}>
      <div className={styles.title}>
        <p>{faq?.title}</p>
        {active ? (
          <div className={styles.closeButton}>
            <span className={classNames(styles.plusMinus, styles.active)} />
            <span className={styles.plusMinus} />
          </div>
        ) : (
          <div className={styles.closeButton}>
            <span className={styles.plusMinus} />
            <span className={styles.plusMinus} />
          </div>
        )}
      </div>
      <div className={styles.infoContainer} ref={ref}>
        {faq?.info && <p className={styles.body}>{faq.info}</p>}
        {faq?.addButton && (
          <Button title={faq?.button?.title ?? 'Learn more'} to={faq?.button?.link} className={styles.button} />
        )}
      </div>
    </div>
  );
};

export default FaqAccordion;
