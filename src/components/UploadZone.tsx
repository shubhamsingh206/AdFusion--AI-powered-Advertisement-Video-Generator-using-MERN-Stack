import { button } from "framer-motion/client";

import type { UploadZoneProps } from "../Types";

const UploadZone = ({ label, file, onclear, onchange }: UploadZoneProps) => {
  return (
    <div className="relative group">
      <div
        className={`relative h-6 rounded-2xl border-2
      border-dashed transition-all duration-300 
      flex flex-col items-center justify-center bg-white/2 p-6 ${
        file
          ? "border-violet-600/50 bg-violet-500/5"
          : "border-white/10 hover:border-violet-500/30 hover:bg-white/5"
      }`}


      {
        file ? (
    <>
    <img src={URL.createObjectURL(file)} alt="preview"

<div className="absolute inset-0 w-full h-full object-cover rounded-x1
opacity-60"/>
<div className="absolute inset-0 flex items-center justify-center
opacity-0 group-hover: opacity-100 transition-opacity bg-black/40
rounded-x1 backdrop-blur-sm">
    <button type="button" onClick={onClear} className="p-2
    rounded-full bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 transitio-colors">
        <XIcon className="w-6 h-6"/>
        <button/>
      </div>
      </>
  ):(
    <></>
  )}
</div>
</div>
export default UploadZone;
