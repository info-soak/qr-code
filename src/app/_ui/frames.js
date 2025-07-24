import { useSelector, useDispatch } from "react-redux"
import { setBottomText, setColor, setShape, setTextColor } from "../_features/framesSlice";
import { Circle, Ban } from "lucide-react";
import frames from '@/app/_data/frames.json';


export default function Frames() {
    const { bottomText, textColor, color, shape } = useSelector((state) => state.frames);
    const dispatch = useDispatch();

    const framesMap = {
        'square': Ban,
        'circle': Circle,
    }

    return (
        <div className="flex flex-col gap-6 bg-gray-700 p-6 rounded-xl">
            <div className="flex gap-6 border-2 p-2 rounded-xl border-gray-500">
                {frames.map(({ name, frame }) => {
                    const IconComponent = framesMap[frame];
                    return IconComponent ?
                        <IconComponent
                            key={frame}
                            size="5rem"
                            color={frame === shape ? 'orange' : '#ffffff'}
                            strokeWidth={'2.5px'}
                            className={`cursor-pointer ${frame === shape ? 'bg-sky-800' : ''} p-2 rounded-xl`}
                            onClick={() => dispatch(setShape(frame))}
                        />
                        :
                        null
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
                            onChange={(e) => dispatch(setBottomText(e.target.value))}
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
                                    onChange={(e) => dispatch(setTextColor(e.target.value))}
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
                                    onChange={(e) => dispatch(setColor(e.target.value))}
                                    value={color}
                                />
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}
