import { useEffect, useState } from "react";
import type { Project } from "../Types";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const MyGenerations = () => {
  const [generations, setGenerations] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchMyGenerations = async () => {
    setTimeout(() => {
      setGenerations(dummyGenerations);
      setLoading(true);
    }, 3000);
  };
  useEffect(() => {
    fetchMyGenerations();
  }, []);
  return loading ? (
  <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400" />
    </div>
  )
}
export default MyGenerations;
