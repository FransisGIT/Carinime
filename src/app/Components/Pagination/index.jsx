import React, { useEffect } from 'react';

export default function Pagination({ page, lastPage, setPage }) {
    useEffect(() => {
        localStorage.setItem('currentPage', page);
    }, [page]);

    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    const nextPage = () => {
        if (page < lastPage) {
            setPage(prevState => prevState + 1);
            scrollTop();
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(prevState => prevState - 1);
            scrollTop();
        }
    };

    const goToFirstPage = () => {
        if (page > 1) {
            setPage(1);
            scrollTop();
        }
    };

    const goToLastPage = () => {
        if (page < lastPage) {
            setPage(lastPage);
            scrollTop();
        }
    };

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-2xl">
            <div className="join">
                {page <= 1 ? null :
                    <button
                        className="join-item btn bg-gray-700 border-none"
                        onClick={goToFirstPage}
                        disabled={page <= 1}
                    >
                        ⏪ <span className="text-white">Start Page</span>
                    </button>
                }
                {page <= 1 ? null :
                    <button
                        className="join-item btn bg-gray-700 border-none"
                        onClick={prevPage}
                        disabled={page <= 1}
                    >
                        <span className="text-white">«</span>
                    </button>
                }
                <button className="join-item btn bg-gray-700 border-none">
                    <span className="text-white">{page} Page {lastPage}</span>
                </button>
                {page >= lastPage ? null :
                    <button
                        className="join-item btn bg-gray-700 border-none"
                        onClick={nextPage}
                        disabled={page >= lastPage}
                    >
                        <span className="text-white">»</span>
                    </button>
                }
                {page >= lastPage ? null :
                    <button
                        className="join-item btn bg-gray-700 border-none"
                        onClick={goToLastPage}
                        disabled={page >= lastPage}
                    >
                        <span className="text-white">Last Page</span> ⏩
                    </button>
                }
            </div>
        </div >
    );
}
