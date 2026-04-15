import { useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useHistory } from '@/hooks/useHistory'
import { parseLinks } from '@/lib/parseLinks'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { useEventService } from '../services/EventService'

const EventDetailPage = () => {
    const { tag } = useParams()
    const { addToHistory } = useHistory()
    const { getEventByTag } = useEventService()
    const event = getEventByTag(tag as string)
    const desc = event?.desc

    const paragraphs = useMemo(() => {
        if (!desc) return []
        return desc
            .split(/<\/p>/g)
            .map((p) => p.replace(/<p>/g, '').trim())
            .filter(Boolean)
    }, [desc])

    useEffect(() => {
        if (event) addToHistory(event.tag, event.title)
    }, [event, addToHistory])

    if (!event) return null

    return (
        <>
            <PageHeader tag={event.tag} title={event.title} time={event.time} />

            {event.image && (
                <img src={`/images/events/${tag}.png`} alt={event.title} />
            )}

            <Card>
                {paragraphs.map((text, index) => (
                    <p key={index}>{parseLinks(text)}</p>
                ))}
            </Card>
        </>
    )
}

export default EventDetailPage
