"use client"

import Image from 'next/image'
import { BookText, Calendar, Clock, Languages } from 'lucide-react'
import ReactStars from 'react-rating-star-with-type'
import { formatVND } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Course } from '@/@types'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface CourseItemProps {
  course: Course
}

const CourseItem = ({
  course
}: CourseItemProps) => {
  const locale = useLocale()
  const src = course.image
  return (
    <div className='shadow-custom rounded-xl bg-white overflow-hidden'>
      <div className='aspect-video'>
        <Image className='size-full object-cover' width={200} height={300} alt='Image' src={src} loader={() => src} />
      </div>
      <div className='mt-2 px-2 font-bold line-clamp-1'>
        <h1>{course.title}</h1>
      </div>
      <div className='p-2 mt-2'>
        <div className='flex gap-2'>
          {course.hashtag.map((hashtag, index) => (
            <div key={index} className='px-2 font-normal rounded-lg border-sky-600 border-2 text-sky-600 bg-sky-100'>{hashtag}</div>
          ))}
        </div>
        <div className='flex flex-col gap-2 pt-2'>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center font-medium text-gray-700'>
              <BookText size={18} />{course.lessons.length} Lesson
            </div>
            <div className='flex gap-1 items-center font-medium text-gray-700'>
              <Languages size={18} />
              {course.language}
            </div>
          </div>
          <div className='flex gap-1 items-center font-medium text-gray-700'>
            <Clock size={18} />{course.duration} hours
          </div>
        </div>
        <div className='flex gap-1 items-center font-medium text-gray-700 pt-2'>
          <Calendar size={18} />
          Start date: {course.start_at}
        </div>
        <div className='flex justify-between pt-2'>
          Avocaedu
          <ReactStars
            value={course.ave_rating}
            isEdit={false}
            activeColors={['yellow']}
          />
        </div>
        <div className='flex justify-between pt-2'>
          <div className='flex gap-1 items-center'>
            <span className='underline font-semibold text-xl text-gray-700'>đ</span>
            <span className='font-bold text-xl text-gray-700'>{formatVND(course.price)}</span>
          </div>
          <div>
            <Link href={`/${locale}/course/${course.id}`}>
              <Button className='bg-blue-500 hover:bg-blue-400 text-white'>Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
