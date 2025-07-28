import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-zinc-900 py-6 px-4 mt-12 text-sm text-center sm:text-left">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Andaime. All Rights Reserved.
          </p>
        </div>

        <div className="text-gray-500 dark:text-gray-400 text-xs leading-snug space-y-1">
          <p>
            Image {" "}
            <Link
              href="https://pixabay.com/pt/users/diagonalhorizon-4872029/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5625922"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Luc Marie Martin
            </Link>{" "}
            by{" "}
            <Link
              href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5625922"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pixabay
            </Link>
          </p>

          <p>
            Image {" "}
            <Link
              href="https://pixabay.com/pt/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1845166"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pexels
            </Link>{" "}
            by{" "}
            <Link
              href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1845166"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pixabay
            </Link>
          </p>

          <p>
            Image {" "}
            <Link
              href="https://pixabay.com/pt/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1283235"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pexels
            </Link>{" "}
            by{" "}
            <Link
              href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1283235"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pixabay
            </Link>
          </p>

          <p>
            Image {" "}
            <Link
              href="https://pixabay.com/pt/users/radu_floryn22-13702785/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4599553"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Florin Radu
            </Link>{" "}
            by{" "}
            <Link
              href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4599553"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pixabay
            </Link>
          </p>

          <p>
            Image {" "}
            <Link
              href="https://pixabay.com/pt/users/ha11ok-1785462/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1248088"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              ha11ok
            </Link>{" "}
            by {" "}
            <Link
              href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1248088"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Pixabay
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
