import styles from "./AppService.module.css";
export default function AppService({ title , description , serviceIcon }) {
    return (
        <div className={styles.AppService}>
            <div className={styles.Icon}>{serviceIcon}</div>
            <h2 className={styles.Title}>{title}</h2>
            <p className={styles.Description}>{description}</p>
        </div>
    );
};

