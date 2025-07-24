import { useState } from "react"
import Frames from "./_ui/frames"


export default function Sidebar({
    url,
    setUrl,
    bottomText,
    setBottomText,
    textColor,
    setTextColor,
    color,
    setColor,
    shape,
    setShape
}) {
    const [selectedTab, setSelectedTab] = useState('frames');
    return (
        <div className="flex flex-col gap-12">
            <div>
                <h2 className="text-xl font-bold p-2">Enter your Website</h2>
                <InputBox
                    placeholder="https://example.com"
                    onChange={setUrl}
                    value={url}
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold p-2">Design your Logo</h2>
                <div className="flex gap-4 px-2 pb-6">
                    {
                        tabs.map(({ name, value }) => {
                            return (
                                <button
                                    className={`
                                        px-4 py-2 rounded-full
                                        text-xl font-bold cursor-pointer
                                        ${selectedTab === value ? 'bg-sky-700' : 'bg-gray-700'}
                                    `}
                                    onClick={(() => setSelectedTab(value))}
                                    key={value}
                                >
                                    {name}
                                </button>
                            )
                        })
                    }
                </div>
                {selectedTab === 'frames' &&
                    <Frames
                        bottomText={bottomText}
                        setBottomText={setBottomText}
                        textColor={textColor}
                        setTextColor={setTextColor}
                        color={color}
                        setColor={setColor}
                        shape={shape}
                        setShape={setShape}
                    />
                }
            </div>
        </div>
    )
}

const tabs = [
    {
        name: 'Frames',
        value: 'frames',
    },
    {
        name: 'Shape',
        value: 'shape',
    }
]


function InputBox({ placeholder, value, onChange }) {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className="bg-gray-600 w-[25rem] px-4 py-2 rounded-full"
            onChange={(e) => onChange(e.target.value)}
            value={value}
        />
    )
}