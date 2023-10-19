export default function FormExtra() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 md:h-5 md:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 text-sm md:text-base text-white-50">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
