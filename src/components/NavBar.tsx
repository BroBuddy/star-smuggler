import { NavLink, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { ReactNode } from 'react'
import { BookOpenText, Globe, Home, Sun, Users } from 'lucide-react'

type Links = {
    to: string
    label?: string
    icon?: ReactNode
}

const links: Links[] = [
    { to: '/', label: 'Game', icon: <Home /> },
    { to: '/rule/r203', label: 'Actions', icon: <Sun /> },
    { to: '/rule/r233', label: 'Entry & Contact Table', icon: <Users /> },
    { to: '/rule/r207', label: 'Guide to the Pavonis Sector', icon: <Globe /> },
    { to: '/booklet', label: 'Booklets', icon: <BookOpenText /> },
]

const NavBar = () => {
    const location = useLocation()

    return (
        <nav className={styles.navBar}>
            {links.map(({ to, label, icon }) => {
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
                        <span>{icon ?? label}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}

export default NavBar
