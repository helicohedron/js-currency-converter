import styles from './Header.module.css'

function Header({ title='', text='' }) {
  return (  
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.circle}></div>
        </div>
        <div>
          <p className={styles.text}>{text}</p>
        </div>
      </main>
  );
}

export default Header;