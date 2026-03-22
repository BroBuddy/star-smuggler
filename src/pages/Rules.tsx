import { RuleIds } from '@/services/rules'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Rules() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Rules">
                <div className="flex flex-wrap">
                    {RuleIds.map((id, index) => (
                        <Link
                            to={`/${id}`}
                            key={index}
                            className="flex flex-col w-1/6 py-2 px-2"
                        >
                            <span className="font-mono">
                                {id}
                            </span>
                        </Link>
                    ))}
                </div>
            </Card>
        </section>
    )
}

export default Rules