import Card from '@/components/Card'
import { useParams } from 'react-router-dom'
import { useHistory } from '@/hooks/useHistory'
import { useEffect } from 'react'
import { parseLinks } from '@/lib/parseLinks'
import { useRuleService } from '../services/RuleService'
import SpeechText from '@/components/SpeechText'
import ListTable from '@/components/ListTable'

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
        <>
            <Card title={rule.title}>
                <SpeechText desc={rule.desc as string[]} />

                {rule.image && (
                    <img src={`/images/rules/${tag}.png`} alt={rule.title} />
                )}

                {rule.desc?.map((p, i) => (
                    <p key={i}>{parseLinks(p)}</p>
                ))}
            </Card>

            {rule.tables?.map((table, index) => (
                <ListTable key={index} table={table} />
            ))}

            {rule.note && (
                <Card title="Notes">
                    {rule.note?.map((p, i) => (
                        <p key={i}>{parseLinks(p)}</p>
                    ))}
                </Card>
            )}
        </>
    )
}

export default RuleDetailPage
