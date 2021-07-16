import React from 'react';
import Buttons from '../Components/Button';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';
import Project from '../Components/Project'

export const Project1 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project numberProject={0}/>
                <Buttons left={"/"}  right={"project2"} />
            </div>
        </main>
    )

}
export const Project2 = () => {
    return (
        <main>         
            <div className="project">
                <Navigation />
                <Logo />
                <Project numberProject={1} />
                <Buttons left={"project1"} right={"project3"} />
            </div>
        </main>
    )

}
export const Project3 = () => {
    return (
        <main>
            <div className="project">
            <Navigation />
            <Logo />
            <Project numberProject={2} />
            <Buttons left={"project2"} right={"project4"} />
            </div>
         </main>
    )

}
export const Project4 = () => {
    return (
        <main>
            <div className="project">
            <Navigation /> 
            <Logo />
            <Project numberProject={3} />
            <Buttons left={"project3"} right={"contact"} />
            </div>
        </main>
    )
}
