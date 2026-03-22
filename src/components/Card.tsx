const Card = ({ id, time, title, children }: any) => {
    return (
        <div className="flex flex-col bg-black/50 p-4 text-xs mb-3s">
            <div className="grid grid-cols-2">
                {id && <h3 className="text-sm font-mono font-bold text-grey-300 mb-2">{id}</h3>}

                {time && (
                    <h3 className="text-sm text-gray-300 mb-2 text-right">
                        ({time})
                    </h3>
                )}
            </div>

            {title && (
                <h2 className="text-md mb-4 px-4 py-2">{title}</h2>
            )}

            {children}
        </div>
    )
}

export default Card
