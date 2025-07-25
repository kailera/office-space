import FloatingContainer from "@/components/layout/floating-container";
import FloatingPanelProject from "@/components/layout/floating-panel-project";
import Header from "@/components/layout/header";
import { projects } from "@/res/projects";
export default function Page(){
  return(
<main className="w-full">
      <Header/>
     
      <FloatingContainer/>
      <FloatingPanelProject projects={projects}/>
    </main>
  )
}