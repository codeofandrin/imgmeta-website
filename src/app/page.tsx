import Image from "next/image"

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-black">
        <div className="flex flex-col items-center xs:flex-row">
          <span>Work in progress...</span>
          <span className="mt-2 xs:mt-0 xs:ml-2">🔨</span>
        </div>
      </h1>
      <p className="mt-5 xs:mt-8 sm:mt-10 lg:mt-14 text-xs xs:text-sm sm:text-base text-zinc-500">
        See how it's built on{" "}
        <a
          className="text-zinc-400 hover:underline"
          href="https://github.com/codeofandrin/imgmeta-website"
          target="_blank">
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
