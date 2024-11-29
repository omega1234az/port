import Image from 'next/image';

export const Navbar = () => {
    return (
        <>
            <div className="text-white w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black px-5 items-center flex justify-center">
                    <div>
                    <Image
                        src="/profile.png"
                        width={200}
                        height={200}
                        alt="Profile"
                        className="rounded-full"
                    />
                    <p className='p-5 text-xl text-center'>Suphakit Ranphol</p>
                    <p className='p-5 text-xl text-center'>66026167</p>
                    </div>
            </div>
        </>
    );
}