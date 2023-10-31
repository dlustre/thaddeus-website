import React from 'react'
import Link from 'next/link'
import Banner from '@/components/Banner/Banner'
import './internships.css'

export const metadata = {
  title: 'Internships',
  description: 'Gain experience at The Thaddeus Resource Center',
}

export default function Internships() {
  return (
    <>
      <Banner src='/internship_banner.jpg' title={'INTERNSHIPS'} description={'Gain experience at The Thaddeus Resource Center'} />
      <div className='internshipsBody'>
        <h1>INTERNSHIP APPLICATION</h1>
        <div />
        <Link href='https://forms.office.com/pages/responsepage.aspx?id=xT9GKNOb2EKXlq1fn4UmpkWY3plA_QhOo51S0QLoIgJUQjQ0RVhTMVZQUkpYOFlJMzZFT1FUTkhHNyQlQCN0PWcu'>
          Internship Application
        </Link>
      </div>
    </>
  )
}
