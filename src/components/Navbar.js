// import logo from '../assets/logo.svg';
// import resume from "../assets/resume.pdf"
import resume from '../assets/solomon-resume.pdf'

export default function Navbar() {

    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Yin_and_yang.svg/640px-Yin_and_yang.svg.png'


    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#projects" className="hover:underline">Projects</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Certfications</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4" download>Resume</a>
        </div>
    </div>
    )
}
