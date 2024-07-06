import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-white">

    <div className="  text-white-600 font-bold bg-blue-400 rounded p-2 m-5 " >
      <div><div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <Image className="h-12 w-12" src="/prof.png" width={900} height={500} alt="ChitChat Logo" />
          <img src="https://github.com/lanzkrish/tarutra/assets/73235813/07584a9b-51f5-49c4-91c9-8edc486611eb"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Dhananjay</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div></div>
    </div>

    </div >
  );
}
