import { useState } from "react"
import Frames from "./_ui/frames"
import Shapes from "./_ui/shapes";
import tabs from '@/app/_data/tabs.json';


export default function Sidebar({
    url,
    setUrl,
}) {
    const [selectedTab, setSelectedTab] = useState('frames');

    return (
        <div className="flex flex-col gap-12 w-[40%]">
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
                                        px-6 py-1 rounded-full
                                        text-lg font-bold cursor-pointer
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
                    <Frames />
                }
                {selectedTab === 'shapes' &&
                    <Shapes />
                }
            </div>
        </div>
    )
}


function InputBox({ placeholder, value, onChange }) {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className="bg-gray-600 w-[25rem] px-6 py-2 rounded-full border-none outline-none"
            onChange={(e) => onChange(e.target.value)}
            value={value}
        />
    )
}