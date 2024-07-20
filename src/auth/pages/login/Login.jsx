import { Logo } from "../../../assets/icons";

export function LoginPage() {
  return (
    <main className="md:flex">
      <figure className="relative hidden h-full md:block md:w-6/12 lg:w-8/12">
        <picture>
          <img
            src="/images/login-image.webp"
            className="h-screen object-cover object-center"
          />
        </picture>
        <figcaption className="text-sm absolute bottom-5 left-5 text-white">
          Photo by{" "}
          <a
            href="https://unsplash.com/es/@otohp_by_sakul"
            target="_blank"
            className="underline"
          >
            Lukáš Vaňátko
          </a>
        </figcaption>
      </figure>

      <aside className="w-full p-4 flex flex-col gap-4 md:w-6/12 lg:w-4/12 ">
        <header className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-bold">MGMT</span>
          </div>
          <h1 className="text-2xl font-bold">Nice to see you again</h1>
        </header>
        <form className="flex flex-col gap-3 mb-4">
          <label className="flex flex-col gap-1">
            <span className="ml-3 text-sm text-[#666]">Login</span>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-[#e5e5e5] bg-[#f2f2f2]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="ml-3 text-sm text-[#666]">Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="p-3 border border-[#e5e5e5] bg-[#f2f2f2]"
            />
          </label>
          <button className="mt-6 p-3 text-white font-bold rounded-md bg-[#007aff]">
            Sign in
          </button>
        </form>
        <p className="text-center">
          Dont&apos;t have an account?{" "}
          <a href="#" className="text-[#007aff]">
            Sign up now
          </a>
        </p>
      </aside>
    </main>
  );
}
