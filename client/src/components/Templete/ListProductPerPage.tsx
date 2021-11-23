import dynamic from 'next/dynamic'
import { isEmpty } from "lodash";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { toggleShowFilter } from "../../redux/Product/showFilter";
const HeaderCategory  = dynamic(() => import("../Molec/ListProduct/HeaderCategory"))
const NoHaveProduct  = dynamic(() => import("../Atom/NoHaveProduct"))
const ListProduct = dynamic(() => import("../Molec/ListProduct/ListProduct"))
const FilterProduct = dynamic(() => import("../Organ/Product/FilterProduct"))
const HeaderCategoryMb = dynamic(() => import("../Molec/ListProduct/HeaderCategoryMb"))

interface IListProductPerPage {
  products: any;
  hasMore: boolean;
  totalCount: number;
  fetchMore: any;
  categoryId?: number;
}
const ListProductPerPage = ({
  products,
  hasMore,
  totalCount,
  fetchMore,
  categoryId,
}: IListProductPerPage) => {
  const [isShowSort, setIsShowSort] = useState(false);
  const isShowFilter = useAppSelector((state) => state.showFilter.isShowFilter);
  const ShowSort = () => {
    setIsShowSort(!isShowSort);
  };
  const dispatch = useAppDispatch();
  const showFilter = () => {
    dispatch(toggleShowFilter());
  };
  return (
    <>
      <div className='hidden lg:block'>
        <HeaderCategory
          showSort={isShowSort}
          ShowSort={ShowSort}
          totalCount={totalCount}
          categoryId={categoryId}
          isShowFilter={isShowFilter}
          showFilter={showFilter}
        />
      </div>
      <div className='block lg:hidden'>
        <HeaderCategoryMb
          showSort={isShowSort}
          ShowSort={ShowSort}
          totalCount={totalCount}
          categoryId={categoryId}
          isShowFilter={isShowFilter}
          showFilter={showFilter}
        />
      </div>
      <div className="flex">
        <div className={"hidden lg:flex " + (isShowFilter ? "w-80" : "w-0")}>
          <FilterProduct />
        </div>
        <div className={isShowFilter ? "pl-0 lg:pl-8 w-full" : "pl-0 w-full"}>
          {isEmpty(products) ? (
            <NoHaveProduct text="Not have product...." />
          ) : (
            <ListProduct
              products={products}
              hasMore={hasMore}
              fetchMore={fetchMore}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ListProductPerPage;
