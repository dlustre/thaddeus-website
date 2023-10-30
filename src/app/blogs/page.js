import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
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
    <div className='blogsContainer'>
      {categories.map((category) => {
        return (
          <Link href={`/blogs/${category}`} key={category}>
            <h1>{category}</h1>
          </Link>
        )
      })}
    </div>
  )
}
