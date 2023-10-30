import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import Banner from '@/components/Banner/Banner';
import './blogs.css';

async function getCategories() {
  try {
    const dirPath = path.join(process.cwd(), 'src', 'data', 'blogs')
    return await fs.readdir(dirPath);
  } catch (err) {
    console.error('An error occured:', err);
  }
}

export default async function Page() {
  const categories = await getCategories();

  return (
    <>
      <Banner src='/banner.jpg' title='BLOGS' description='Read up on our blogs to learn about business, self-care, and more!' />
      <div className='blogsContainer'>
        {categories.map((category) => {
          return (
            <Link href={`/blogs/${category}`} key={category}>
              <h2>{category}</h2>
            </Link>
          )
        })}
      </div>
    </>

  )
}
