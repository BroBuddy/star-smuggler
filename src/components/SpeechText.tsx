import { Pause, Play } from 'lucide-react'
import { useMemo } from 'react'
import { useSpeech, useVoices } from 'react-text-to-speech'

type SpeechType = {
    desc: string[]
    stable?: boolean
}

function SpeechText({ desc, stable = true }: SpeechType) {
    const { voices } = useVoices()
    const text = useMemo(() => desc.join(' '), [desc])
    const { speechStatus, start, pause } = useSpeech({
        text,
        lang: 'en-US',
        voiceURI: voices[3]?.voiceURI,
        stableText: stable,
    })
    const isReading = speechStatus === 'started'

    return (
        <div
            style={{
                position: 'absolute',
                top: '30px',
                right: '10px',
                zIndex: 10,
            }}
        >
            {!isReading && (
                <span className="pointer" onClick={start}>
                    <Play />
                </span>
            )}

            {isReading && (
                <span className="pointer" onClick={pause}>
                    <Pause />
                </span>
            )}
        </div>
    )
}

export default SpeechText
