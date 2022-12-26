import { useEffect } from "react"
import HeaderEtc from "../components/header/HeaderEtc"
import HeaderMain from "../components/header/HeaderMain"
import HeaderSelect from "../components/header/HeaderSelect"
import { useAppDispatch } from "../store/hooks"
import { fetchStore } from "../store/storeSlice"

const HeaderPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStore())
  }, [dispatch])
  return (
    <>
      <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content ">
        <div className="flex w-full xl:container xl:m-auto">
          <HeaderMain />
          <HeaderSelect />
          <HeaderEtc />
        </div>
      </div>
    </>
  )
}

export default HeaderPage
