import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'

type Links = {
    to: string
    label: string
}

const links: Links[] = [
    { to: '/', label: 'Game' },
    { to: '/sheet', label: 'Sheets' },
    { to: '/booklet', label: 'Booklets' },
    { to: '/helper', label: 'Helper' },
]

const NavBar = () => {
    const location = useLocation()

    return (
        <nav className={styles.navBar}>
            {links.map(({ to, label }) => {
                const isActive = location.pathname === to

                return (
                    <Link
                        key={to}
                        to={to}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            opacity: isActive ? 0.6 : 1,
                            pointerEvents: isActive ? 'none' : 'auto',
                            cursor: isActive ? 'default' : 'pointer',
                        }}
                        className={` ${isActive ? 'active' : ''}`}
                    >
                        <span>{label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

export default NavBar
