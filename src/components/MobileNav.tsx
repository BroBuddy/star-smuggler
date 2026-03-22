import { Link } from 'react-router-dom'

const links = [
    { to: '/', label: 'Game' },
    { to: '/rules', label: 'Rules' },
    { to: '/events', label: 'Events' },
    { to: '/sector', label: 'Sector' },
    { to: '/history', label: 'History' },
]

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            {links.map(({ to, label }) => (
                <Link key={to} to={to}>
                    <span className="text-xs">{label}</span>
                </Link>
            ))}
        </section>
    )
}

export default MobileNav