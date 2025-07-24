export default function Frames({
    setBottomText,
    bottomText,
    textColor,
    setTextColor,
    color,
    setColor,
    shape,
    setShape
}) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6">
                {frames.map(({ name, frame }) => {
                    return (
                        <button
                            key={frame}
                            onClick={() => setShape(frame)}
                            className={`p-6 rounded-xl cursor-pointer hover:bg-sky-400 ${shape === frame ? 'bg-sky-500' : 'bg-sky-700'}`}
                        >
                            {name}
                        </button>
                    )
                })}
            </div>
            {shape === 'circle' &&
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold">Text</p>
                        <input
                            type='text'
                            placeholder='Enter Text'
                            className="bg-gray-600 w-[25rem] px-4 py-2 rounded-full"
                            onChange={(e) => setBottomText(e.target.value)}
                            value={bottomText}
                        />
                    </div>
                    <div className='flex gap-6'>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl font-bold">Text Color</p>
                            <div className='flex items-center gap-2 border-2 w-fit px-4 py-1 rounded-xl'>
                                <p>{textColor}</p>
                                <input
                                    type='color'
                                    className="w-6 cursor-pointer"
                                    onChange={(e) => setTextColor(e.target.value)}
                                    value={textColor}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl font-bold">Color</p>
                            <div className='flex items-center gap-2 border-2 w-fit px-4 py-1 rounded-xl'>
                                <p>{color}</p>
                                <input
                                    type='color'
                                    className="w-6 cursor-pointer"
                                    onChange={(e) => setColor(e.target.value)}
                                    value={color}
                                />
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}


const frames = [
    {
        name: 'None',
        frame: 'square'
    },
    {
        name: 'Circle',
        frame: 'circle'
    },
]