import React, { type ReactNode } from 'react'

type BadgeProps = {
    text: string
    icon?: string | ReactNode
    variant?: 'default' | 'dark'
}

const Badge: React.FC<BadgeProps> = ({ text, variant = 'default' }) => {
    const variantStyles =
        variant === 'default' ? 'bg-dark-grey' : 'bg-light-grey'

    return (
        <span
            className={`rounded text-md text-bold text-black py-1 px-2 mb-1 mr-1 ${variantStyles}`}
        >
            {text ? text.charAt(0).toUpperCase() + text.slice(1) : ''}
        </span>
    )
}

export default Badge
