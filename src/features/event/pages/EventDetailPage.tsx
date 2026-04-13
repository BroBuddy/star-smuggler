import { useParams } from 'react-router-dom'
import { getEventByTag } from '@/features/event/data/events'
import { useEffect, useMemo } from 'react'
import { useHistory } from '@/features/helper/hooks/useHistory'
import { parseLinks } from '@/lib/parseLinks'
import Card from '@/components/Card'

const EventDetailPage = () => {
    const { tag } = useParams()
    const { addToHistory } = useHistory()
    const event = getEventByTag(tag as string)
    const content = event?.content

    const paragraphs = useMemo(() => {
        if (!content) return []

        return content
            .split(/<\/p>/g)
            .map((p) => p.replace(/<p>/g, '').trim())
            .filter(Boolean)
    }, [content])

    useEffect(() => {
        if (event) {
            addToHistory(event.tag, event.title)
        }
    }, [event, addToHistory])

    return (
        <>
            {event && (
                <Card title={event.title}>
                    {event.image && (
                        <img
                            src={`/images/events/${tag}.png`}
                            alt={event.title}
                        />
                    )}

                    {paragraphs.map((text, index) => (
                        <p key={index}>{parseLinks(text)}</p>
                    ))}
                </Card>
            )}
        </>
    )
}

export default EventDetailPage
