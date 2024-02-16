"use client";

import DetailLine from "@/app/components/ui/DetailLine";
import { useEffect, useState } from "react";
import { Post } from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";
import deleteFetchJSON from "@/app/utils/frontend/deleteFetchJSON";
import fetchJSON from "@/app/utils/frontend/fetchJSON";

export default function AdminPostsView({
  posts,
  setPosts,
}: {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}) {
  // const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchJSON("/api/posts")
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (postId: number) => {
    console.log("삭제 버튼 클릭 - postId : ", postId);
    try {
      await deleteFetchJSON("/api/posts", postId);
      console.log(`ID가 ${postId}인 게시물이 성공적으로 삭제되었습니다!`);
    } catch (error) {
      console.error("게시물 삭제 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <div className="adminPostsView">
      <h3 className="text-xl font-bold text-blue-500 mb-5">Post Lists</h3>
      <DetailLine className="w-12" />
      <ul className="adminPostUl flex flex-col space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="flex w-full justify-between">
            <span className="contentPart flex space-x-4">
              <h2>{post.title}</h2>
              <p>|</p>
              <p>{post.content}</p>
            </span>
            <Btn onClick={() => handleDelete(post.id)}>Delete</Btn>
          </li>
        ))}
      </ul>
    </div>
  );
}