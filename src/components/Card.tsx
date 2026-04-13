import styles from './Card.module.scss'

type CardProps = {
    time?: string
    title?: string
    children: React.ReactNode
}

const Card = ({ time, title, children }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                {title && <strong>{title}</strong>}
                {time && <span>time {time}</span>}
            </div>

            <div className={styles.cardContent}>{children}</div>
        </div>
    )
}

export default Card
