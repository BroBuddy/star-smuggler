import { useRuleService } from '../services/RuleService'
import TagList from '@/features/sheet/components/TagList'

function RulePage() {
    const { getRuleData } = useRuleService()
    const data = getRuleData()

    return <TagList tags={data} />
}

export default RulePage
