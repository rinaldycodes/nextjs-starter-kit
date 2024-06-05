import { fetchData } from '@/lib/fetchData.lib';
import React from 'react';


export default async function ServerFetchingComponent() {
  const data = await fetchData('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <h1>Data Fetching in Server Component</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
