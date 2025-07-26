import Image from "next/image";

interface Article {
  title: string;
  description: string;
  text: string;
  publishBy: string;
  image: string;
}

interface IBlogContent {
  title:string,
  articles: Article[];
}

export default function BlogContent({ title, articles }: IBlogContent) {
  const displayFractionText = (fraction: string) => fraction.slice(0, 75);
  return (
    <div className="w-3/4  flex flex-col justify-center md:justify-start pl-2 md:pl-[40px]">
        <h1 className="m-2">{title}</h1>
      {articles.map((article, i) => (
        <div key={i}>
          <div className="flex flex-col sm:flex-row gap-2  m-2 mb-12">
            <div className="w-full md:w-[240px] h-auto border rounded-lg overflow-hidden ">
              <Image
                src={article.image}
                alt="image"
                width={240}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <h1>{article.title}</h1>
              <h6>{article.description}</h6>
              <p className="text-sm">{`${displayFractionText(
                article.text
              )}...`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
