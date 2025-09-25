"use client";
import { useParams } from "next/navigation";

export default function Student() {
  const params = useParams();
  return (
    <div>
      <h1>Student: {params.student}</h1>
    </div>
  );
}
