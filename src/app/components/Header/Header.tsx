
export default function Header() {
    return (
        <div className="w-full p-4 pt-8 flex flex-row justify-between sm:justify-center items-center text-white">
            <p className="font-bold text-primaryBlue text-4xl">Made by Devs</p>
            <button className="bg-primaryBlue text-white p-2 rounded-lg sm:block sm:absolute sm:right-20" type="button">Visit Site</button>
        </div>
    )
}