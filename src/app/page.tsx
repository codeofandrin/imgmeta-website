export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-black xs:text-3xl sm:text-5xl lg:text-7xl">
        <div className="flex flex-col items-center xs:flex-row">
          <span>Work in progress...</span>
          <span className="mt-2 xs:ml-2 xs:mt-0">🔨</span>
        </div>
      </h1>
      <p className="mt-5 text-xs text-zinc-500 xs:mt-8 xs:text-sm sm:mt-10 sm:text-base lg:mt-14">
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
