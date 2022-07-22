import React from 'react'

type Props = {
    name: string,
    size?: string
}


const SocialIcon = ({ name }: Props) => {
    return (
        <div className=' fill-current tooltip' data-tip={name}>
            
            {name === 'youtube' &&
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m163.3 123l-48-32a6 6 0 0 0-9.3 5v64a6 6 0 0 0 3.2 5.3a5.9 5.9 0 0 0 6.1-.3l48-32a6 6 0 0 0 0-10ZM118 148.8v-41.6l31.2 20.8Zm114.4-78.5a22 22 0 0 0-13.3-15C185 42.2 130.3 42.4 128 42.4s-57-.2-91.1 12.9a22 22 0 0 0-13.3 15C21 80.1 18 98.1 18 128s3 47.9 5.6 57.7a22 22 0 0 0 13.3 15c34.1 13.1 88.8 12.9 91.1 12.9h.7c6.9 0 57.9-.4 90.4-12.9a22 22 0 0 0 13.3-15c2.6-9.8 5.6-27.8 5.6-57.7s-3-47.9-5.6-57.7Zm-11.6 112.4a10 10 0 0 1-6 6.8c-32 12.3-86.2 12.1-86.8 12.1s-54.8.2-86.8-12.1a10 10 0 0 1-6-6.8c-2.4-9.2-5.2-26.1-5.2-54.7s2.8-45.5 5.2-54.7a10 10 0 0 1 6-6.8c32-12.3 86.2-12.1 86.8-12.1s54.8-.2 86.8 12.1a10 10 0 0 1 6 6.8c2.4 9.2 5.2 26.1 5.2 54.7s-2.8 45.5-5.2 54.7Z" /></svg>}
            {name === 'tiktok' &&
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M224 76a48 48 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v128a20 20 0 1 1-28.6-18.1a7.9 7.9 0 0 0 4.6-7.2V89.1a7.8 7.8 0 0 0-2.9-6.2a8 8 0 0 0-6.5-1.7A76 76 0 1 0 176 156v-35.7a103.2 103.2 0 0 0 48 11.7a8 8 0 0 0 8-8V84a8 8 0 0 0-8-8Zm-8 39.6a87.4 87.4 0 0 1-43.3-16.1A8.1 8.1 0 0 0 160 106v50a60 60 0 1 1-80-56.6v26.7a36 36 0 1 0 56 29.9V36h24.5A64.1 64.1 0 0 0 216 91.5Z" /></svg>
            }
            {name === 'twitter' &&
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m245.7 77.7l-30.2 30.1c-6 69.9-65 124.2-135.5 124.2c-14.5 0-26.5-2.3-35.6-6.8c-7.3-3.7-10.3-7.6-11.1-8.8a8 8 0 0 1 3.9-11.9c.2-.1 23.8-9.1 39.1-26.4a108.6 108.6 0 0 1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1 8.1 0 0 1 5.5-6.2a8 8 0 0 1 8.1 1.9c.3.4 33.6 33.2 74.3 43.8V88a48.3 48.3 0 0 1 48.6-48a48.2 48.2 0 0 1 41 24H240a8 8 0 0 1 7.4 4.9a8.4 8.4 0 0 1-1.7 8.8Z" /></svg>}
            {name === 'facebook' &&
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M232 128a104.3 104.3 0 0 1-91.5 103.3a4.1 4.1 0 0 1-4.5-4V152h24a8 8 0 0 0 8-8.5a8.2 8.2 0 0 0-8.3-7.5H136v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 8-8.5a8.2 8.2 0 0 0-8.3-7.5H152a32 32 0 0 0-32 32v24H96a8 8 0 0 0-8 8.5a8.2 8.2 0 0 0 8.3 7.5H120v75.3a4 4 0 0 1-4.4 4C62.8 224.9 22 179 24.1 124.1A104 104 0 0 1 232 128Z" /></svg>
            }
            {name === 'google' &&
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M128 228a100 100 0 1 1 70.7-170.7a12 12 0 0 1 0 17a12.2 12.2 0 0 1-17 0A75.2 75.2 0 0 0 128 52a76 76 0 1 0 75.1 88H128a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12a100.2 100.2 0 0 1-100 100Z" /></svg>
            }
            {name === 'telegram' &&
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={28} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M231.3 31.7A16.1 16.1 0 0 0 215 29L30.4 101.5a15.8 15.8 0 0 0-10.1 16.3a16 16 0 0 0 12.8 14.3l46.9 9.3V200a16 16 0 0 0 9.9 14.8A16.6 16.6 0 0 0 96 216a15.8 15.8 0 0 0 11.3-4.7l26-25.9l39.3 34.6a16 16 0 0 0 10.5 4a14.2 14.2 0 0 0 5-.8a15.9 15.9 0 0 0 10.7-11.6l37.6-164.2a16 16 0 0 0-5.1-15.7ZM86.1 126.3l-49.8-9.9l139.6-54.9ZM96 200v-47.4l25.2 22.2Zm87.2 8l-82.4-72.5l118.7-85.7Z" /></svg>
            }
            {name === 'snapchat' &&
                SnapChat
            }
        </div>
    )
}

export default SocialIcon