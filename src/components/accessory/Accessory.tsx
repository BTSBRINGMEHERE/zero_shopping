import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { StoreListType } from "../../api/storeAPI"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchStore } from "../../store/storeSlice"

const Accessory = () => {
  const { fakeStore } = useAppSelector((state) => state.store)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStore())
  }, [dispatch])

  const acc = new Array(0)

  for (let i = 0; i < 20; i++) {
    if (fakeStore[i] !== undefined)
      if (fakeStore[i].category === "jewelery") {
        acc.push(fakeStore[i])
      }
  }

  if (!acc) {
    return (
      <>
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto mt-[48px]">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>홈</li>
              <li>악세서리</li>
            </ul>
          </div>
          <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
            <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
              악세서리
            </h2>
            <div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
              data-scroll="false"
            >
              <Link
                className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
                to=""
              >
                <figure className="flex h-80 bg-white overflow-hidden">
                  <img
                    src=""
                    alt="상품 이미지"
                    className="transition-transform duration-300"
                  />
                </figure>
                <div className="card-body bg-gray-100 dark:bg-gray-700">
                  <p className="card-title text-base"></p>
                  <p className="text-base"></p>
                </div>
              </Link>
            </div>
          </article>
        </section>
      </>
    )
  }
  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto mt-[48px]">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>악세서리</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            악세서리
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
            data-scroll="false"
          >
            {acc.map((item: StoreListType, idx: number) => (
              <Link
                className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
                to={`/product/${item.id}`}
                key={`${item.id}_${idx}`}
              >
                <figure className="flex h-80 bg-white overflow-hidden">
                  <img
                    src={item.image}
                    alt="상품 이미지"
                    className="transition-transform duration-300"
                  />
                </figure>
                <div className="card-body bg-gray-100 dark:bg-gray-700">
                  <p className="card-title text-base">{item.title}</p>
                  <p className="text-base">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default Accessory
