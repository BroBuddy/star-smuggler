import { useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useHistory } from '@/features/helper/hooks/useHistory'
import { parseLinks } from '@/lib/parseLinks'
import Card from '@/components/Card'
import { useEventService } from '../services/EventService'

const EventDetailPage = () => {
    const { tag } = useParams()
    const { addToHistory } = useHistory()
    const { getEventByTag } = useEventService()
    const event = getEventByTag(tag as string)
    const description = event?.desc

    const paragraphs = useMemo(() => {
        if (!description) return []

        return description
            .split(/<\/p>/g)
            .map((p) => p.replace(/<p>/g, '').trim())
            .filter(Boolean)
    }, [description])

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
