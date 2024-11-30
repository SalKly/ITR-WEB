const ErrorComp = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-red-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-red-600">Something went wrong!</h2>
      <p className="text-md text-gray-600">Please try again.</p>
      <button
        onClick={onRetry}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorComp;
