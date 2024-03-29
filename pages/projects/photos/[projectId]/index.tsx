import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { Navbar } from "@/components/navbar/navbar";
import { Photo } from "@/components/projects/photos/photo";

export default function PhotosProjectId() {
  const photosProjects = useAppSelector<PhotosProjectsStateType[]>(
    (state) => state.photosProjects
  );

  const router = useRouter();
  const { projectId } = router.query;

  const project = photosProjects.find((el) => el.id === projectId);

  if (project)
    return (
      <ProjectLayout
        navbar={<Navbar />}
        title={<ProjectsTitle title={project.title} />}
        description={project.description}
        photo={project.album.map((el, index) => (
          <Photo key={index} projectId={projectId} photo={el} index={index} />
        ))}
      />
    );
}
