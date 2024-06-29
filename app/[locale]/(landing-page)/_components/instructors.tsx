"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstructorItem from "./instructor-item";

const instructors = [
  {
    imageSrc: '/shit-3.jpg',
    title: 'Livestream học trực tuyến',
    name: 'Học mọi lúc mọi nơi bằng video hoặc học trực tuyến cực kì tiện lợi',

  },
  {
    imageSrc: '/shit-2.jpg',
    title: 'Lớp giảng dạy tại nhà',
    name: 'Có thể học tại nhà để trao đổi trực tiếp và giải đáp thắc mắc với giáo viên',

  },
  {
    imageSrc: '/shit-6.jpg',
    title: 'Các giải thưởng lớn',
    name: 'Rất nhiều giải thưởng lớn đã được trao xuyên suốt quá trình giảng dạy',

  },
  {
    imageSrc: '/shit-4.jpg',
    title: 'Các buổi talkshow',
    name: 'Chúng tôi luôn có những buổi talkshow mỗi cuối tuần',

  },
  {
    imageSrc: '/shit-5.jpg',
    title: 'Khuyến mãi và học bổng',
    name: 'Chúng tôi có các khuyến mãi và học bổng giành riêng cho những học viên',

  },
  {
    imageSrc: '/shit-6.jpg',
    title: 'Đội ngũ hỗ trợ',
    name: 'Đội ngũ hỗ trợ của chúng tôi luôn túc trực từ 6-18h từ thứ 2 đến thứ 7',

  }
];

const Instructors = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='px-32 pt-8 mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>Những hình ảnh thực tế</h1>
      </div>
      <div className="pt-4 mt-2">
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <InstructorItem
              key={index}
              imageSrc={instructor.imageSrc}
              title={instructor.title}
              name={instructor.name}

            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Instructors
