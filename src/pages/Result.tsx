import { useEffect, useState } from "react";
import type { Project } from "../Types";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const Result = () => {
  const [project, setProjectData] = useState<Project>({} as Project)
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  
  const fetchProjectData = async ()=>{
    setTimeout (()=>{
      setProjectData(dummyGenerations[0])
      setLoading(false)
    },2000)
  }


  useEffect(()=>{
    fetchProjectData()
  }, [])
  return loading ? (
  <div className="h-screen w-full flex items-center justify-center">
    <Loader2Icon className='animate-spin text-indigo- size-9'/>
    </div>
  ) : (
  <div className="min-h-screen text-white p-6 md:p-12 mt-20">
    <div className="max-w-6xl mx-auto">
      <header>
        <h1>Generation Result</h1>
        <Link></Link>
        </header>
      </div>
    </div>
  );
};

export default Result;