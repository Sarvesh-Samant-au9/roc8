import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-paginating";
import {
  fetchDiscoverMovieList,
  fetchFilterMovieList,
} from "../../../redux/actions";

const DisplayPagination = () => {
  const { totalPages, currentPage, type, parameters } = useSelector(
    (state) => state.HomeMovie
  );
  // const states = useSelector((state) => state.HomeMovie);
  const dispatch = useDispatch();

  const handlePageChange = (data) => {
    // console.log(data);
    if (type === "DISCOVER_MOVIE") {
      dispatch(fetchDiscoverMovieList(parameters.discover_type, data));
    } else {
      dispatch(fetchFilterMovieList(parameters.filter_query, data));
    }
  };

  return (
    <div>
      <Pagination
        total={totalPages}
        limit={1}
        pageCount={5}
        currentPage={currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps,
        }) => (
          <div>
            <button
              className="btn btn-light border border-dark ml-1"
              {...getPageItemProps({
                pageValue: 1,
                onPageChange: handlePageChange,
              })}
            >
              First
            </button>

            {hasPreviousPage && (
              <button
                className="btn btn-light border border-dark ml-1"
                {...getPageItemProps({
                  pageValue: previousPage,
                  onPageChange: handlePageChange,
                })}
              >
                {"<"}
              </button>
            )}

            {pages.map((page) => {
              let activePage = null;
              if (currentPage === page) {
                activePage = {
                  backgroundColor: "#343A40",
                  color: "#ffffff",
                };
              }
              return (
                <button
                  className="btn btn-light border border-dark ml-1"
                  {...getPageItemProps({
                    pageValue: page,
                    key: page,
                    style: activePage,
                    onPageChange: handlePageChange,
                  })}
                >
                  {page}
                </button>
              );
            })}

            {hasNextPage && (
              <button
                className="btn btn-light border border-dark ml-1"
                {...getPageItemProps({
                  pageValue: nextPage,
                  onPageChange: handlePageChange,
                })}
              >
                {">"}
              </button>
            )}

            <button
              className="btn btn-light border border-dark ml-1"
              {...getPageItemProps({
                pageValue: totalPages,
                onPageChange: handlePageChange,
              })}
            >
              Last
            </button>
          </div>
        )}
      </Pagination>
    </div>
  );
};
export default DisplayPagination;
