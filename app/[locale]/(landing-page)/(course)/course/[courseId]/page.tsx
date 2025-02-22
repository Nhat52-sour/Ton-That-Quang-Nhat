"use client"
import { useEffect, useState } from "react"
import Footer from "../../../_components/footer"
import Navbar from "../../../_components/navbar"
import CourseCard from "./components/course-card"
import Description from "./components/description"
import LessonsList from "./components/lessons-list"
import {  CourseDetail, Instructor } from "@/@types"
import axiosInstance from "@/config/axiosConfig"
import { AxiosResponse } from "axios"
import InstructorDetail from "./components/instructor-detail"


const CourseId = ({
  params
}:{
  params: {courseId: string}
}) => {
  const [course,setCourse] = useState<CourseDetail>()
  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axiosInstance.get<any,AxiosResponse<CourseDetail>>(`/education/courses/${params.courseId}/?format=json`);
        setCourse(response.data)
        console.log(response.data.instructor)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getCourse();
  }, [params.courseId]);
  if(!course) return null
  return (
    <div>
        <Navbar/>
        <div className="flex gap-4 px-32 py-16 pt-[100px]">
            <div>
              <Description title={course?.title!} description={course?.description!}/>
              <LessonsList lessons={course?.lessons}/>
              <InstructorDetail instructors={course?.instructor}/>
            </div>
            <div>
                <CourseCard course={course}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CourseId
