import cornersSquareOptions from '@/app/_data/cornerSquareOptions';
import { setCornerSquare, setDotColor } from '../_features/shapesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Circle, SquareRoundCorner, Grip, Squircle, Square, Diamond } from 'lucide-react';



export default function Shapes() {
    const { cornerSquare, dotColor } = useSelector((state) => state.shapes);
    const dispatch = useDispatch();

    const IconMap = {
        'rounded': SquareRoundCorner,
        'dots': Grip,
        'classy': Squircle,
        'classy-rounded': Diamond,
        'square': Square,
        'extra-rounded': Circle,
    }
    return (
        <div className='bg-gray-700 p-6 rounded-xl flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <p className="text-xl font-bold">Corner</p>
                <div className='flex gap-6 p-2 flex-wrap'>
                    {cornersSquareOptions.map(({ name, icon }) => {
                        const IconComponent = IconMap[name];
                        return IconComponent ?
                            <IconComponent
                                key={name}
                                size="2rem"
                                color={name === cornerSquare ? 'orange' : '#ffffff'}
                                strokeWidth={'2.5px'}
                                className='cursor-pointer'
                                onClick={() => dispatch(setCornerSquare(name))}
                            />
                            :
                            null
                    })}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className="text-xl font-bold">Dot Color</p>
                <div className='flex items-center gap-2 border-2 w-fit px-4 py-1 rounded-xl'>
                    <p>{dotColor}</p>
                    <input
                        type='color'
                        className="w-6 cursor-pointer"
                        onChange={(e) => dispatch(setDotColor(e.target.value))}
                        value={dotColor}
                    />
                </div>
            </div>
        </div>
    )
}