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
    const isRunning = speechStatus === 'started'

    return (
        <div
            style={{
                position: 'absolute',
                top: '13px',
                right: '11px',
                zIndex: 10,
            }}
        >
            {!isRunning && (
                <span onClick={start}>
                    <Play />
                </span>
            )}

            {isRunning && (
                <span onClick={pause}>
                    <Pause />
                </span>
            )}
        </div>
    )
}

export default SpeechText
