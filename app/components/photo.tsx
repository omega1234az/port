import Image from "next/image";

export default function Photo() {
  return (
    <>
      <div className="container mx-auto mt-3">
      <p className="text-xl font-bold p-2 mt-3">Photo</p>
        <div className="grid grid-cols-3 gap-5">
        <Image
              src="/photo/k-on.gif"
              width={500}
              height={500}
              alt="k-on"
              className="py-2 rounded-2xl"
            />
             <Image
              src="/photo/bocchii.gif"
              width={500}
              height={200}
              alt="bocchi"
              className="py-2 rounded-2xl"
            />
             <Image
              src="/photo/byou.gif"
              width={500}
              height={500}
              alt="byou"
              className="py-2 rounded-2xl"
            />
             <Image
              src="/photo/furry.gif"
              width={500}
              height={500}
              alt="furry"
              className="py-2 rounded-2xl"
            />
             <Image
              src="/photo/gojo.gif"
              width={500}
              height={500}
              alt="gojo"
              className="py-2 rounded-2xl"
            />
           <Image
              src="/photo/nagatoro.gif"
              width={500}
              height={500}
              alt="nagatoro"
              className="py-2 rounded-2xl"
            />
        </div>
      </div>
    </>
  );
}
