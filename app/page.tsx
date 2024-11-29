import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-4">
      <p className="text-xl font-bold p-5">My Skills</p>
        <div className="grid grid-cols-10 gap-5">
          
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/next.js.png"
              width={60}
              height={60}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">Next.js</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/nuxtjs.png"
              width={90}
              height={90}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">Nuxt.js</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/PHP.png"
              width={80}
              height={80}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">PHP.js</p>
          </div>
          
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/python.png"
              width={60}
              height={60}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">Python</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/java.png"
              width={60}
              height={60}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">Java</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/docker.png"
              width={60}
              height={60}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">Docker</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/react.png"
              width={60}
              height={60}
              alt="Profile"
              className="rounded-full py-2"
            />
            <p className="text-center text-white">React.js</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/vue.png"
              width={60}
              height={60}
              alt="Profile"
              className="py-2"
            />
            <p className="text-center text-white">Vue.js</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/express.png"
              width={90}
              height={90}
              alt="Profile"
              className="py-2 bg-white rounded-lg"
            />
            <p className="text-center text-white mt-3">Express.js</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full p-2 flex flex-col items-center justify-center">
            <Image
              src="/skills/postman.png"
              width={60}
              height={60}
              alt="Profile"
              className="py-2"
            />
            <p className="text-center text-white">Postman</p>
          </div>
        </div>
      </div>
    </>
  );
}
