import { Link } from 'react-router-dom'
import { useRuleService } from '../services/RuleService'

function RulePage() {
    const { getRuleTags } = useRuleService()
    const data = getRuleTags()

    return (
        <div className="flex flex-wrap my-2">
            {data.map((id, index) => (
                <Link
                    to={`/rule/${id}`}
                    key={index}
                    className="flex flex-wrap w-5 p-1"
                >
                    <span className="font-mono">{id}</span>
                </Link>
            ))}
        </div>
    )
}

export default RulePage
