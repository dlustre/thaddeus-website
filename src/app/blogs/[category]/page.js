import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import './[category].css'

async function getBlogs() {
  try {
    const dirPath = path.join(process.cwd(), 'src', 'data', 'blogs')
    const categories = await fs.readdir(dirPath);

    const blogs = [];

    for (const category of categories) {
      const categoryPath = path.join(dirPath, category)
      const files = await fs.readdir(categoryPath);

      for (const file of files) {
        const filePath = path.join(categoryPath, file);
        const content = await fs.readFile(filePath, 'utf8');
        const jsonContent = JSON.parse(content);
        jsonContent.Category = category;
        blogs.push(jsonContent);
      }
    }

    return blogs;

  } catch (err) {
    console.error('An error occured:', err);
  }
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    category: blog.Category,
  }))
}

export async function generateMetadata({ params }) {
  return {
    title: params.category,
  }
}

export default async function Page({ params }) {
  const blogs = await getBlogs();
  return (
    <div className='blogCategoriesContainer'>
      {blogs
        .filter((blog) => blog.Category === params.category)
        .map((blog) => (
          <Link href={`${blog.Category}/${blog.Slug}`} key={blog.Title}>
            <h1>
              {blog.Title}
            </h1>
          </Link>
        ))}
    </div>
  )
}
