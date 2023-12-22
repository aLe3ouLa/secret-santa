type LoginLayoutProps = {
  children?: React.ReactNode
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <main className="min-w-screen min-h-screen bg-silverTree bg-auth bg-cover bg-no-repeat dark:bg-nileBlue">
      <img
        src="/images/logo__secret-santa.svg"
        alt="secret santa"
        className="mx-auto mb-24 w-[460px]"
      />
      {children}
    </main>
  )
}

export default LoginLayout
