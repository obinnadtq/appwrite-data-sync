import Head from 'next/head'
import TotalStudents from '@/components/TotalStudents'
import StudentData from '@/components/StudentData'
import { useEffect, useState } from 'react'
import { getStudentData } from '@/components/appwriteInit'


export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    getStudentData()
    .then((res) => setData(res.documents))
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <title>Student data</title>
      </Head>
      <div>
        <h1 class="heading-level-1 u-text-center">Student Data</h1>
        <TotalStudents students={data}/>
      </div>
      <StudentData students={data}/>
    </>
  )
}