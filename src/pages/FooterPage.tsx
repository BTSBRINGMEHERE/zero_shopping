import Footer from "../components/footer/Footer"
import { useAppDispatch, useAppSelector } from "../store/hooks"

const FooterPage = () => {
  const store = useAppSelector((state) => state.stores.stores)
  const dispatch = useAppDispatch()

  console.log(store)
  return (
    <>
      <Footer />
    </>
  )
}

export default FooterPage
