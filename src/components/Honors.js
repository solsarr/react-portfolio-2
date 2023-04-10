import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my projects that I've worked on</p>
 
            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Film Buddy" made="2023" desc="A project with the main idea and application being to help users find their next movie through recommendations from other users with genre filter options for convenience"
                image="https://i.imgur.com/NbRqYvL.png" 
                tech="React and Express"
                link="https://main--film-buddy.netlify.app/profile"/>
                <HonorCard name="Insta Clone" made="2023"  desc="Insta Clone is instagram like app. It is full-stack application with backend and frontend. It allows the posting of pictures, editing the post, deleting the post and comment on the post as well as the tracking of picture comments on posted pictures."
                image="https://i.imgur.com/QBl61U8.png" 
                tech="React and Express"
                link="https://instagraphfs.netlify.app/" />
                <HonorCard name="Weather App" made="2022"  desc="This is a weather app that lets you choose to see weather data from other cities. current weather, 3 day forecast and 7 day forecast."
                image="https://i.imgur.com/RDo4nK3.png" 
                tech="React"
                link="https://sols-weather-app.netlify.app/" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
