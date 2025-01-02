import Image from 'next/image'
import wave1 from '@/public/images/wave1.svg'
import wave2 from '@/public/images/wave2.svg'
import wave3 from '@/public/images/wave3.svg'

export default function Waves() {
    return (
        <div className='absolute left-1/2 translate-x-[-50%] bottom-48 w-screen h-48 -z-10'>
            <Image src={wave2} alt={'wave2'} className='absolute w-screen' />
            <Image src={wave1} alt={'wave1'} className='absolute w-screen' />
            <Image src={wave3} alt={'wave3'} className='absolute w-screen' />
        </div>
    )
}
