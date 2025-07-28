import ContainerAside from "@/components/layout/container-aside";
import ContainerBlock from "@/components/layout/container-block";
import EmployeesOfTheMonthBanner from "@/components/layout/employees";
import FloatingContainer from "@/components/layout/floating-container";
import FloatingPanelProject from "@/components/layout/floating-panel-project";
import FloatingQuickAccessPanel from "@/components/layout/floating-quickacess-panel";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import BlogContent from "@/components/ui/blog-content";
import { quickApps } from "@/res/apps";
import { blogPosts } from "@/res/blog-content";
import { employees } from "@/res/employees";
import { projects } from "@/res/projects";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <ContainerAside />
        <main className="w-full">
          <FloatingContainer />
          <FloatingPanelProject projects={projects} />
          <FloatingQuickAccessPanel apps={quickApps} />
          <ContainerBlock>
            <BlogContent title="New Articles" articles={blogPosts} />
          </ContainerBlock>
        </main>
      </div>
      <ContainerBlock><EmployeesOfTheMonthBanner employees={employees}/></ContainerBlock>
      <Footer/>
    </div>
  );
}
