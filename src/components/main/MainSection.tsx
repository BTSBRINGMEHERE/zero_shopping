import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchStore } from "../../store/storeSlice"
import { Link } from "react-router-dom"
import { StoreListType } from "../../api/storeAPI"

const MainSection = () => {
  const { fakeStore } = useAppSelector((state) => state.store)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStore())
  }, [dispatch])

  const fashion = new Array(0)
  const acc = new Array(0)
  const digit = new Array(0)

  for (let i = 0; i < 20; i++) {
    if (fakeStore[i] !== undefined && i < 4) {
      fashion.push(fakeStore[i])
    } else if (fakeStore[i] !== undefined && i >= 4 && i < 8) {
      acc.push(fakeStore[i])
    } else if (fakeStore[i] !== undefined && i >= 8 && i < 12) {
      digit.push(fakeStore[i])
    }
  }

  if (!fashion || !acc || !digit) {
    return (
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto h-max">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          패션
        </h2>
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="true"
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
      </section>
    )
  }

  return (
    <>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto h-max">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          패션
        </h2>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-scroll="true"
        >
          {fashion.map((item: StoreListType, idx: number) => (
            <Link
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              to={`product/:${item.id}`}
              key={`${item.id}_${idx}`}
            >
              <figure className="flex h-80 bg-white overflow-hidden">
                <img
                  src={item.image}
                  alt="상품 이미지"
                  className=" transition-transform duration-300"
                />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">{item.title}</p>
                <p className="text-base">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto h-max">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          악세사리
        </h2>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-scroll="true"
        >
          {acc.map((item: StoreListType, idx: number) => (
            <Link
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              to={`product/:${item.id}`}
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
                <p className="text-base">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto h-max">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          디지털
        </h2>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-scroll="true"
        >
          {digit.map((item: StoreListType, idx: number) => (
            <Link
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              to={`product/:${item.id}`}
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
                <p className="text-base">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default MainSection
