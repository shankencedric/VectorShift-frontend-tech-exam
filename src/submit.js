// submit.js

export const SubmitButton = () => {
  return (
    <div className="flex items-center justify-center py-5 bg-vs-cream border-t border-gray-200/60">
      <button
        type="submit"
        className="
          px-6 py-2 min-w-[140px]
          text-xs font-medium text-white bg-vs-dark
          tracking-wider uppercase rounded-sm
          border border-vs-dark shadow-xs
          cursor-pointer select-none
          hover:bg-vs-dark/90 hover:border-vs-dark
          active:scale-[0.99]
          transition-all duration-150 ease-in-out
        "
      >
        Test Pipeline
      </button>
    </div>
  );
};