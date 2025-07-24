import { Inter, Montserrat, Open_Sans } from "next/font/google";

export const montserrat = Montserrat({subsets:['latin'], weight:['700', '800'], variable:"--font-title"})
export const inter = Inter ({subsets:['latin'], weight:['400', '500'], variable:'--font-body'})
export const openSans = Open_Sans({subsets:['latin'], weight:['400', '500'], variable:'--font-text'})