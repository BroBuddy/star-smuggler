import { NavLink, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'

type Links = {
    to: string
    label: string
}

const links: Links[] = [
    { to: '/', label: 'Game' },
    { to: '/rule/r203', label: 'Actions' },
    { to: '/helper', label: 'Helper' },
    { to: '/booklet', label: 'Booklets' },
]

const NavBar = () => {
    const location = useLocation()

    return (
        <nav className={styles.navBar}>
            {links.map(({ to, label }) => {
                const isActive = location.pathname === to

                return (
                    <NavLink
                        key={to}
                        to={to}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            pointerEvents: isActive ? 'none' : 'auto',
                            cursor: isActive ? 'default' : 'pointer',
                        }}
                        className={isActive ? styles.active : undefined}
                    >
                        <span>{label}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}

export default NavBar
