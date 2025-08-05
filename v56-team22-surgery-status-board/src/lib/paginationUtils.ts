export const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  maxPagesToShow: number = 5
): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxPagesToShow) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  const start = Math.max(0, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  if (start > 0) pages.push(0);
  if (start > 1) pages.push('...');

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 2) pages.push('...');
  if (end < totalPages - 1) pages.push(totalPages - 1);

  return pages;
};
