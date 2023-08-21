'use client'
import React from 'react'
import Link from 'next/link'
import Courses from './components/Courses'
import { useState, useEffect } from 'react'
// need to import loading page since it only works automatically for server components 
import LoadingPage from './loading'
import CourseSearch from './components/CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(  () => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  } ,[])

  if(loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Welcome to the next cheatsheet</h1>
      <CourseSearch getSearchResults={ (results) => setCourses(results) }/>
      <Courses courses={courses}/>
    </div>
  )
}

export default HomePage