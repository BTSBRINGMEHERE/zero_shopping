import { useEffect } from "react"
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

  const store = new Array(0)

  for (let i = 0; i < 20; i++) {
    store[i] = fakeStore[i]
  }

  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto h-max">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        패션
      </h2>

      {store.map((item: StoreListType) => (
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="true"
        >
          <Link
            className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            to={`product/:${item.id}`}
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
        </div>
      ))}
    </section>
  )
}

export default MainSection
