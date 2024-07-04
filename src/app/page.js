import Image from "next/image";

export default function Home() {
  return (

<div className="  text-white-600 font-bold bg-blue-400 rounded p-2 m-5 " >
<div><div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <Image className="h-12 w-12" src="/prof.png" width={900} height={500} alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">Dhananjay</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div></div>
</div>


  );
}
