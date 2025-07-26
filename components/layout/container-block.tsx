import { ReactNode } from "react";

interface IContentBlock{
    children:ReactNode,
    className?:string,
}

export default function ContainerBlock({children, className}:IContentBlock) {
  return (
    <section
      className={`py-12 max-w-7xl mx-auto flex justify-center ${className}`}>
      {children}
    </section>
  );
}
