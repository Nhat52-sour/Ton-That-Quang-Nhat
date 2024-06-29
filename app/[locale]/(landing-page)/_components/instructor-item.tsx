import Image from 'next/image'
import ReactStars from 'react-rating-star-with-type'

// Định nghĩa kiểu dữ liệu cho các props
interface InstructorItemProps {
  imageSrc: string;
  title: string;
  name: string;

}

const InstructorItem: React.FC<InstructorItemProps> = ({ imageSrc, title, name, }) => {
  return (
    <div className='bg-background mr-10'>
      <div className='aspect-video rounded-xl overflow-hidden'>
        <Image
          className='size-full object-cover'
          height={200}
          width={120}
          alt='Avatar'
          src={imageSrc}
        />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <span className='text-sm text-amber-400 font-light'>{title}</span>
        <span className='text-xl font-medium'>{name}</span>
        <div className='flex items-center gap-2 border-t-2'>

        </div>
      </div>
    </div>
  )
}

export default InstructorItem
