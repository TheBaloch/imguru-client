"use client";
import { useRouter } from "next/navigation";

export default function Pagination({ page, totalPages, onPageChange }) {
  const router = useRouter();
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`?p=${newPage}`);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center mt-8 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-colors duration-200 ${
          page === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Previous
      </button>

      {/* First Page */}
      {page !== 1 && (
        <button
          onClick={() => handlePageChange(1)}
          className={`px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium ${
            page === 1
              ? "text-white bg-teal-500 border-teal-500"
              : "text-gray-500 hover:text-teal-600 hover:border-teal-500"
          } transition-colors duration-200`}
        >
          1
        </button>
      )}

      {/* Ellipses before current page if needed */}
      {page > 4 && <span className="px-1 md:px-2 text-gray-500">...</span>}

      {/* Pages around the current page */}
      {page > 3 && (
        <button
          onClick={() => handlePageChange(page - 2)}
          className="px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-colors duration-200"
        >
          {page - 2}
        </button>
      )}

      {page > 2 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-colors duration-200"
        >
          {page - 1}
        </button>
      )}

      {/* Current Page */}
      <button
        className="px-2 py-1 md:px-4 md:py-2 border border-teal-500 rounded-md text-sm font-medium text-white bg-teal-500 transition-colors duration-200"
        disabled
      >
        {page}
      </button>

      {page < totalPages - 1 && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-colors duration-200"
        >
          {page + 1}
        </button>
      )}

      {page < totalPages - 2 && (
        <button
          onClick={() => handlePageChange(page + 2)}
          className="px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-colors duration-200"
        >
          {page + 2}
        </button>
      )}

      {/* Ellipses after current page if needed */}
      {page < totalPages - 3 && (
        <span className="px-1 md:px-2 text-gray-500">...</span>
      )}

      {/* Last Page */}
      {page !== totalPages && (
        <button
          onClick={() => handlePageChange(totalPages)}
          className={`px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium ${
            page === totalPages
              ? "text-white bg-teal-500 border-teal-500"
              : "text-gray-500 hover:text-teal-600 hover:border-teal-500"
          } transition-colors duration-200`}
        >
          {totalPages}
        </button>
      )}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className={`px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500 transition-colors duration-200 ${
          page === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}
