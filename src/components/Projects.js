import { Outlet } from "react-router-dom"
import Calculadora from "./calculadora/Calculadora"
import { PageTemplate } from "./Navegacao"

export function Projects(){
    return (
        <PageTemplate>
            <TemplateProjects >
                <Outlet/>
            </TemplateProjects>
        </PageTemplate>

    )
}


function TemplateProjects({children}){
    return (
        <div className="projects text-center all-height">
            {children}
        </div>
    )
}

export function Project1(){
    return(
        <>
            <h1>Calculadora Padrão Apple</h1>
            <Calculadora/>
        </>
    )
}
export function Project2(){
    return <h1>hello</h1>
}
export function Project3(){
    return <h1>from home</h1>
}
