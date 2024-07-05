"use client";
import Pagination from "@/app/components/Pagination";
import Post from "@/app/components/Post";
import { TPost } from "@/app/interfaces/PostPageIntefaces";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/post")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col h-full items-center w-4/5 justify-between border-t min border-gray-200 bg-white px-4 py-3 sm:px-6">
      <ul role="list" className="divide-y w-full h-full divide-gray-100">
        {posts.map((post) => (
          <li key={post._id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};

export default PostsPage;
