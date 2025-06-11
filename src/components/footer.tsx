import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center pb-8 bottom-0">
      <p className="text-lesswhite">
        With love,{" "}
        <Link
          href={"https://github.com/fayrghos"}
          className="underline sm:no-underline hover:underline hover:text-white"
          target="_blank"
        >
          fayrghos
        </Link>
        . ❤
      </p>
    </footer>
  )
}
