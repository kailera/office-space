import ContainerBlock from "@/components/layout/container-block";
import FloatingContainer from "@/components/layout/floating-container";
import FloatingPanelProject from "@/components/layout/floating-panel-project";
import FloatingQuickAccessPanel from "@/components/layout/floating-quickacess-panel";
import Header from "@/components/layout/header";
import BlogContent from "@/components/ui/blog-content";
import { quickApps } from "@/res/apps";
import { blogPosts } from "@/res/blog-content";
import { projects } from "@/res/projects";

export default function Page() {
  return (
    <div>
      <main className="w-full">
        <Header />
        <FloatingContainer />
        <FloatingPanelProject projects={projects} />
        <FloatingQuickAccessPanel apps={quickApps} />
        <ContainerBlock>
          <BlogContent title="New Articles"articles={blogPosts} />
        </ContainerBlock>
      </main>
    </div>
  );
}
