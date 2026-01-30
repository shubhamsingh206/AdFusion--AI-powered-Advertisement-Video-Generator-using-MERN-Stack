import type React from "react";
import type { Project } from "../Types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectCard = ({
  gen,
  setGenerations,
  forCommunity = false,
}: {
  gen: Project;
  setGenerations: React.Dispatch<React.SetStateAction<Project[]>>;
  forCommunity?: boolean;
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return <div key={gen.id}></div>;
};

export default ProjectCard;
