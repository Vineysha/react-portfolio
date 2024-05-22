import React, { useState } from "react";
import PortfolioItem from "../PortfolioItem";
import "./Portfolio.css"; // Import your CSS file for portfolio styling

export default function Portfolio() {
    const [projects] = useState([
        {
            name: "Text Editor",
            desc: "A versatile text editing application that runs directly in your browser",
            deployed: "https://text-editor-challenge-0b5f187fa506.herokuapp.com/",
            repo: "https://github.com/Vineysha/text-editor.git",
            image: "text-editor.jpg",
        },
        {
            name: "Note Taker",
            desc: "A note taking application that allows the user to write, save, and delete notes.",
            deployed: "https://bootcamp-note-taker-d506cc5675f2.herokuapp.com/",
            repo: "https://github.com/Vineysha/note-taker.git",
            image: "note-taker.jpg",
            },
            {
            name: "Work Day Scheduler",
            desc: "A work day scheduler for a usual 9 AM - 5 PM shift.", 
            deployed: "https://vineysha.github.io/work-day-scheduler/",
            repo: "https://github.com/Vineysha/work-day-scheduler.git",
            image: "scheduler.jpg",
            },
            {
            name: "Weather Dashboard",
            desc: "A simple weather application that provides accurate and up-to-date weather forecasts and conditions",
            deployed: "https://vineysha.github.io/weather-dashboard/",
            repo: "https://github.com/Vineysha/weather-dashboard.git",
            image: "dashboard.jpg",
            },
        
    ]);

    return (
        <div>
            <h1 className="portfolio-heading">Portfolio Page</h1>
            <div className="portfolio-items">
                {projects.map((project, index) => (
                    <PortfolioItem project={project} key={"project" + index} />
                ))}
            </div>
        </div>
    );
}


