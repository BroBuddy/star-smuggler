import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { useRuleService } from '../services/RuleService'

function RulePage() {
    const { getRuleTags } = useRuleService()
    const data = getRuleTags()

    return (
        <section className="flex flex-col">
            <Card title="Rules">
                <div className="flex flex-wrap my-2">
                    {data.map((id, index) => (
                        <Link
                            to={`/rule/${id}`}
                            key={index}
                            className="flex flex-col w-1/6 py-2 px-2"
                        >
                            <span className="font-mono">{id}</span>
                        </Link>
                    ))}
                </div>
            </Card>
        </section>
    )
}

export default RulePage
