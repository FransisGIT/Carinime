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
                        className="join-item btn text-white bg-gray-700"
                        onClick={goToFirstPage}
                        disabled={page <= 1}
                    >
                        ⏪ Start Page
                    </button>
                }
                {page <= 1 ? null :
                    <button
                        className="join-item btn text-white bg-gray-700"
                        onClick={prevPage}
                        disabled={page <= 1}
                    >
                        «
                    </button>
                }
                <button className="join-item btn text-white bg-gray-700">
                    {page} Page {lastPage}
                </button>
                {page >= lastPage ? null :
                    <button
                        className="join-item btn text-white bg-gray-700"
                        onClick={nextPage}
                        disabled={page >= lastPage}
                    >
                        »
                    </button>
                }
                {page >= lastPage ? null :
                    <button
                        className="join-item btn text-white bg-gray-700"
                        onClick={goToLastPage}
                        disabled={page >= lastPage}
                    >
                        Last Page ⏩
                    </button>
                }
            </div>
        </div >
    );
}
