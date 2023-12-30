import Footer from 'src/components/Footer/Footer'
import MyAccount from 'src/components/MyAccount/MyAccount'
import Nav from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <main className="grid min-h-screen grid-cols-12 gap-x-5 bg-silverTree dark:bg-nileBlue">
        <header className="col-span-4 pb-10">
          <aside className="fixed z-50">
            <Nav />
          </aside>
          <img src="/images/bg__interior.svg" alt="Holiday Illustration" />
          <a href="#mysite">
            <img
              src="/images/logo__secret-santa.svg"
              alt="Secret Santa"
              className="absolute top-[7vw] z-30 w-[25vw]"
            />
          </a>
        </header>
        <section className="col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            <div>
              <MyAccount />
            </div>
          </div>
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
