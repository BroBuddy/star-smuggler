import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { useRuleService } from '../services/RuleService'

function RulePage() {
    const { getRuleTags } = useRuleService()
    const data = getRuleTags()

    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Rules">
                <div className="flex flex-wrap">
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
