import { Link } from 'react-router-dom'
import Card from '../components/Card'

function History() {
    const history = JSON.parse(localStorage.getItem('history') || '[]')

    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="History">
                {history.length === 0 && (
                    <p>No history yet.</p>
                )}

                {history.map((item: { id: string, title: string }, index: number) => (
                    <Link
                        to={`/${item.id}`}
                        key={index}
                        className="flex flex-col py-2"
                    >
                        <span className="font-mono">{item.id}</span>
                        <span className="text-gray-300">{item.title}</span>
                    </Link>
                ))}
            </Card>
        </section>
    )
}

export default History