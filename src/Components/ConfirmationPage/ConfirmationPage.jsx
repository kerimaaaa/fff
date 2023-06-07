import React from 'react';
import smile from '../../smile.svg';
import styles from './Confirmation.module.css'
import  '../../style.css';
const ConfirmationPage = () => {
  return (
    <div className={styles.confirm_page}>
      <img src={smile} alt="smile" />
      <p>На вашу почту  было отправлено письмо</p>
      <button className={styles.confirm_btn}>Закрыть</button>
    </div>
  );
};

export default ConfirmationPage;