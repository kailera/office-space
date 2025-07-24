import { ReactNode } from "react";

interface IContentBlock{
    children:ReactNode,
    className?:string,
}

export default function ContainerBlock({children, className}:IContentBlock) {
  return (
    <section
      className={`w-full px-258 md:px-258 lg:px-258 py-12 max-w-7xl mx-auto flex justify-center ${className}`}>
      {children}
    </section>
  );
}
