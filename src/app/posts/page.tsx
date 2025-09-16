"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

interface Post {
  userId: number,
  id:     number,
  title:  string, 
  body:   string
}

export default function PostsPage() {

  // fetch url
  // treatments: 
  // 1) loading time
  // 2) error
  // 3) []

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchPosts() {
    setLoading(true);

    // simulating 3sec delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data:Post[] = await response.json();

      setPosts(data);

      console.log(data);

    } catch (err) {
      console.log(err);
    }
    
    setLoading(false); 
  }

  return(
    <div>
      <h1>Lista de Posts</h1>
      <Button onClick={() => fetchPosts()}>
        Buscar na API
      </Button>

      <div className="m-4">Quantidade de posts: {posts.length}</div>

      {/* {posts.length > 0 && (<div className="bg-blue-600 p2">Existem posts</div>)} */}

      {posts.length > 0 ? (<div className="bg-green-200 p-2">{posts.length} posts encontrados.</div>) : (<div className="bg-red-200 p-2">Não há posts</div>)}

      {posts.length > 0 && (
        <div className="m-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>UserId</TableHead>
                <TableHead>Id</TableHead>
                <TableHead>Title</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {posts.map(p=> (
                <TableRow key={p.id}>
                  <TableCell>{p.userId}</TableCell>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="flex justify-center items-center">
        <PacmanLoader
          loading={loading}
          size={50}
          color="#002255"
          aria-label="Loading Spinner"
        />
      </div>
    </div>
  )
}