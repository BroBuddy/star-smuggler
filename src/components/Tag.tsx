import { useParams } from 'react-router-dom'
import { Rules as RulesData } from '@/services/rules'
import { Events as EventsData } from '@/services/events'
import { useEffect, useMemo, useState } from 'react'
import { TagItem } from '@/lib/types'
import Card from './Card'
import { useHistory } from '@/hooks/useHistory'
import { parseLinks } from '@/lib/parseLinks'

const Tag = () => {
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
        const findTag = dataSet.find((item: TagItem) => item.id === tagId)
        setActiveTag(findTag as TagItem)
        if (findTag) {
            addToHistory(findTag.id, findTag.title)
        }
    }, [tagId, dataSet, addToHistory])

    return (
        <section className="flex flex-col py-2 w-full">
            {activeTag && (
                <Card
                    id={activeTag.id}
                    time={activeTag.time || null}
                    title={activeTag.title}
                >
                    <div>
                        {transformedContent.map((node: any, i: number) =>
                            typeof node === 'string' ? (
                                <div
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: node }}
                                />
                            ) : (
                                node
                            )
                        )}
                    </div>
                </Card>
            )}
        </section>
    )
}

export default Tag
