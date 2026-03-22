import { useParams } from 'react-router-dom'
import { Rules as RulesData } from '@/services/rules'
import { Events as EventsData } from '@/services/events'
import { useEffect, useState } from 'react'
import { makeUrlsClickable } from '@/lib/helper'
import { TagItem } from '@/lib/types'
import Card from './Card'
import { useHistory } from '@/hooks/useHistory'

const Tag = () => {
    const { tagId } = useParams()
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const [_, setLinkTags] = useState<string[]>([])
    const dataSet = RulesData.concat(EventsData)
    const transformedContent = makeUrlsClickable(activeTag?.content)
    const { addToHistory } = useHistory()

    useEffect(() => {
        const rulesRegex = /[ER]\d{3}[A-Z]?/g
        const findTags = activeTag?.content.match(rulesRegex)
        const uniqueTags = [...new Set(findTags)]
        setLinkTags(uniqueTags)
    }, [activeTag?.content])

    useEffect(() => {
        const findTag = dataSet.find((item: TagItem) => item.id === tagId)
        setActiveTag(findTag as TagItem)

         if (findTag) {
            addToHistory(findTag.id, findTag.title)
        }
    }, [tagId])

    return (
        <section className="flex flex-col py-2 w-full">
            {activeTag && (
                <Card
                    id={activeTag.id}
                    time={activeTag.time || null}
                    title={activeTag.title}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: transformedContent,
                        }}
                    />
                </Card>
            )}
        </section>
    )
}

export default Tag
