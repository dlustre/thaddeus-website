import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import './[slug].css';

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

async function getBlogBySlug(category, slug) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs', category, `${slug}.json`);
  console.log(filePath);
  const content = await fs.readFile(filePath, 'utf8');

  return JSON.parse(content);
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    category: blog.Category,
    slug: blog.Slug,
  }))
}

export default async function Page({ params }) {
  const blog = await getBlogBySlug(params.category, params.slug);

  return (
    <div className='blogContainer'>
      <div className='blogCard'>
        <h1>{blog.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog['Blog Content'] }} />
      </div>
    </div>
  );
}