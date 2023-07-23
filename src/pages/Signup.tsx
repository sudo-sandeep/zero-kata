import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-black opacity-20 left-0 top-0"></div>
      <div className="p-10 rounded-lg shadow-2xl bg-sky-700 relative z-10 text-pink-600">
        <h1 className="text-4xl uppercase tracking-wider font-semibold text-white">
          Zero Kata Pro
        </h1>
        <h2 className="text-2xl uppercase tracking-wider font-semibold text-pink-500 bg-white inline-block px-5 mt-2 font-hindi">
          जीरो काटा प्रो
        </h2>
        <div className="bg-white p-5 rounded mt-8 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full items-center mb-3">
              <label htmlFor="name" className="text-sm mr-5 w-1/2 text-start">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="border border-slate-200 min-w-[250px] rounded placeholder:text-xs px-3 py-2 text-xs focus:outline-none focus:border-black text-black"
                minLength={1}
                maxLength={16}
              />
            </div>
            <div className="flex w-full items-center mb-3">
              <label htmlFor="email" className="text-sm mr-5 w-1/2 text-start">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="border border-slate-200 min-w-[250px] rounded placeholder:text-xs px-3 py-2 text-xs focus:outline-none focus:border-black text-black"
              />
            </div>
            <div className="flex w-full items-center mb-3">
              <label
                htmlFor="password"
                className="text-sm mr-5 w-1/2 text-start"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="border border-slate-200 min-w-[250px] rounded placeholder:text-xs px-3 py-2 text-xs focus:outline-none focus:border-black text-black"
                minLength={1}
                maxLength={16}
              />
            </div>
            <div className="flex w-full items-center mb-3">
              <label
                htmlFor="confirm-password"
                className="text-sm mr-5 w-1/2 text-start"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Your Confirm Password"
                className="border border-slate-200 min-w-[250px] rounded placeholder:text-xs px-3 py-2 text-xs focus:outline-none focus:border-black text-black"
                minLength={1}
                maxLength={16}
              />
            </div>
            <div className="w-full text-end">
              <button className="text-sm text-white uppercase font-semibold bg-sky-600 hover:bg-sky-700 shadow-2xl hover:text-white px-10 py-3 rounded">
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-5 text-slate-800">
            <Link className="text-xs block" to={"/login"}>
              Already have an account??{" "}
              <span className="font-semibold text-sm cursor-pointer underline underline-offset-4">
                Let's Play
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
