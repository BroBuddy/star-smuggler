import Card from '@/components/Card'
import { useParams } from 'react-router-dom'
import { useHistory } from '@/features/history/hooks/useHistory'
import { useEffect } from 'react'
import { parseLinks } from '@/lib/parseLinks'
import { useRuleService } from '../services/RuleService'
import TableRenderer from '@/components/TableRenderer'

function RuleDetailPage() {
    const { tag } = useParams()
    const { getRuleDataByTag } = useRuleService()
    const rule = getRuleDataByTag(tag as string)
    const { addToHistory } = useHistory()

    useEffect(() => {
        if (!rule) return

        addToHistory(rule.tag, rule.title)
    }, [addToHistory, rule])

    if (!rule) return null

    return (
        <Card title={rule.title}>
            {rule.desc?.map((p, i) => (
                <p key={i}>{parseLinks(p)}</p>
            ))}

            {rule.tables?.map((table, index) => (
                <TableRenderer key={index} table={table} />
            ))}

            {rule.note?.map((p, i) => (
                <p key={i}>{parseLinks(p)}</p>
            ))}
        </Card>
    )
}

export default RuleDetailPage
