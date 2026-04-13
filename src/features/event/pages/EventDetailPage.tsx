import { useParams } from 'react-router-dom'
import { Rules as RulesData } from '@/features/rule/data/rules'
import { Events as EventsData } from '@/features/event/data/events'
import { useEffect, useMemo } from 'react'
import { TagItem } from '@/types/TagTypes'
import { useHistory } from '@/features/helper/hooks/useHistory'
import { parseLinks } from '@/lib/parseLinks'
import Card from '@/components/Card'

const EventDetailPage = () => {
    const { tagId } = useParams()
    const { addToHistory } = useHistory()
    const dataSet = useMemo(() => RulesData.concat(EventsData), [])

    const activeTag = useMemo(() => {
        return dataSet.find(
            (item: TagItem) => item.id?.toLowerCase() === tagId?.toLowerCase()
        )
    }, [dataSet, tagId])

    const content = activeTag?.content
    const paragraphs = useMemo(() => {
        if (!content) return []

        return content
            .split(/<\/p>/g)
            .map((p) => p.replace(/<p>/g, '').trim())
            .filter(Boolean)
    }, [content])

    useEffect(() => {
        if (activeTag) {
            addToHistory(activeTag.id, activeTag.title)
        }
    }, [activeTag, addToHistory])

    return (
        <>
            {activeTag && (
                <Card title={activeTag.title}>
                    {paragraphs.map((text, index) => (
                        <p key={index}>{parseLinks(text)}</p>
                    ))}
                </Card>
            )}
        </>
    )
}

export default EventDetailPage
