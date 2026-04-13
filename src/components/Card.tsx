const Card = ({ time, title, children }: any) => {
    return (
        <div className="flex flex-col p-4">
            <div>
                {time && (
                    <strong className="text-grey mb-2 text-right">
                        ({time})
                    </strong>
                )}
            </div>

            {title && <h3>{title}</h3>}

            {children}
        </div>
    )
}

export default Card
