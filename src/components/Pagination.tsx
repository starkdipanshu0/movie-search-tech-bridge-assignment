type Props = {
  currentPage: number;
  totalResults: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalResults, onPageChange }: Props) => {
  const totalPages = Math.ceil(totalResults / 10);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 pb-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-4 py-2">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
