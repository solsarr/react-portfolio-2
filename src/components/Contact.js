import hr from "../assets/curve-hr.svg"

export default function Contact(){

    return(

     <div id="contact" className="mt-4 text-white">
     <h1 className="text-2xl font-bold">Contact Me!</h1>
     <p className="font-light text-gray-400"><span className="text-1xl font-bold">Email: </span>solomonsarr18@gmail.com</p>
     <p className="font-light text-gray-400"><span className="text-1xl font-bold">Phone: </span>(401)-345-9805</p>
     <p className="font-light text-gray-400"><span className="text-1xl font-bold">Linkedin: </span><a href='https://www.linkedin.com/in/solomon-sarr/?trk=public_profile-settings_edit-profile-content' rel="noreferrer" target="_blank"><span id="click">Click here!</span></a></p>
     <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
