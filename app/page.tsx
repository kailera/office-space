import FloatingContainer from "@/components/layout/floating-container";
import FloatingPanelProject from "@/components/layout/floating-panel-project";
import FloatingQuickAccessPanel from "@/components/layout/floating-quickacess-panel";
import Header from "@/components/layout/header";
import { quickApps } from "@/res/apps";
import { projects } from "@/res/projects";
export default function Page(){
  return(
<main className="w-full">
      <Header/>
     
      <FloatingContainer/>
      <FloatingPanelProject projects={projects}/>
      <FloatingQuickAccessPanel apps={quickApps}/>
    </main>
  )
}