import React, { FC } from 'react'


const Skeleton: FC<{ loading?: boolean }> = ({ loading }) => {
    let height = 'h-2.5'
    let color = 'bg-base-300 '
    return (
        <div className="animate-pulse p-2 space-x-4">
            <div className=' flex justify-between items-center'>
                <div className={`${height} ${color} w-36  rounded col-span-1`}></div>

                <div className=' grid grid-cols-3 gap-2 w-24 py-5'>
                    <div className={`${height} col-span-1 ${color} rounded `}></div>
                    <div className={`${height} col-span-1 ${color} rounded `}></div>
                    <div className={`${height} col-span-1 ${color} rounded `}></div>

                </div>
            </div>
            <div className="flex-1 space-y-5 py-1">
                <div className={`${height} ${color} rounded`}></div>
                <div className="grid grid-cols-4 gap-4">
                    <div className={`${height} ${color} rounded col-span-1`}></div>
                    <div className={`${height} ${color} rounded col-span-2`}></div>
                    <div className={`${height} ${color} rounded col-span-3`}></div>
                    {/* <div className="${height} ${color} rounded col-span-1"></div> */}
                    <div className={`${height} ${color} rounded col-span-1`}></div>
                    <div className={`${height} ${color} rounded col-span-1`}></div>
                    <div className={`${height} ${color} rounded col-span-3`}></div>
                    <div className={`${height} ${color} rounded col-span-2`}></div>
                    <div className={`${height} ${color} rounded col-span-1`}></div>
                    <div className={`${height} ${color} rounded col-span-1`}></div>
                    <div className={`${height} ${color} rounded col-span-1`}></div>
                    <div className={`${height} ${color} rounded col-span-2`}></div>
                    <div className={`${height} ${color} rounded col-span-2`}></div>
                </div>
                {/* <div className={`${height} ${color} rounded`}></div> */}
            </div>
        </div>
    )
}
export default Skeleton