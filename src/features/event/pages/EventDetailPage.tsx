import { useParams } from 'react-router-dom'
import { Rules as RulesData } from '@/features/rule/data/rules'
import { Events as EventsData } from '@/features/event/data/events'
import { useEffect, useMemo, useState } from 'react'
import { TagItem } from '@/types/TagTypes'
import { useHistory } from '@/features/history/hooks/useHistory'
import { parseLinks } from '@/lib/parseLinks'
import Card from '@/components/Card'

const EventDetailPage = () => {
    const { tagId } = useParams()
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const [_, setLinkTags] = useState<string[]>([])
    const dataSet = useMemo(() => RulesData.concat(EventsData), [])
    const transformedContent = parseLinks(activeTag?.content as string)
    const { addToHistory } = useHistory()

    useEffect(() => {
        const rulesRegex = /[ER]\d{3}[A-Z]?/g
        const findTags = activeTag?.content.match(rulesRegex)
        const uniqueTags = [...new Set(findTags)]
        setLinkTags(uniqueTags)
    }, [activeTag?.content])

    useEffect(() => {
        const findTag = dataSet.find(
            (item: TagItem) => item.id?.toLowerCase() === tagId?.toLowerCase()
        )
        setActiveTag(findTag as TagItem)
        if (findTag) {
            addToHistory(findTag.id, findTag.title)
        }
    }, [tagId, dataSet, addToHistory])

    return (
        <>
            {activeTag && (
                <Card
                    id={activeTag.id}
                    time={activeTag.time || null}
                    title={activeTag.title}
                >
                    <div className="text-md">{transformedContent}</div>
                </Card>
            )}
        </>
    )
}

export default EventDetailPage
