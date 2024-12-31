import Image from 'next/image'
import wave1 from '@/public/images/wave1.svg'
import wave2 from '@/public/images/wave2.svg'
import wave3 from '@/public/images/wave3.svg'

export default function Waves() {
    return (
        <div className='absolute bottom-0 left-0 w-screen h-10 -z-10'>
            <Image src={wave1} alt={'wave1'} />
            <Image src={wave2} alt={'wave2'} />
            <Image src={wave3} alt={'wave3'} />
        </div>
    )
}
