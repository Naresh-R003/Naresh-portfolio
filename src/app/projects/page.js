import { Suspense } from "react";
import ProjectsPageClient from "./ProjectsPageClient";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#08090b]" />}>
      <ProjectsPageClient />
    </Suspense>
  );
}

