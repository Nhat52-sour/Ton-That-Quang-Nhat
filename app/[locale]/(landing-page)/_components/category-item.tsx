import { IconType } from 'react-icons'

interface CategoryItemProps {
    icon: IconType;
    label: string;
    number_course: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon: Icon, label, number_course }) => {
    return (
        <div className='flex flex-col items-center p-4 border rounded-lg shadow-md'>
            <Icon className='text-4xl mb-2' />
            <span className='text-lg font-semibold'>{label}</span>
            <span className='text-sm text-gray-500'>{number_course} courses</span>
        </div>
    )
}

export default CategoryItem
