const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-0 flex min-w-full max-w-full flex-col  bg-acadia py-[72px] text-center text-scotchMist dark:bg-blackPearl ">
      <img
        src="/images/logo__secret-santa--small.svg"
        alt="secret santa small logo"
        className="relative mx-auto mb-16"
      />

      <p className="font-sans font-medium">
        Copyright ©2023.{' '}
        <a
          href="www.ahCreative.com"
          className="underline"
          target="_target"
          rel="noreferrer"
        >
          Ah Ha Creative, LLC.
        </a>{' '}
        All Rights Reserved.
      </p>

      <ul className="flex items-center justify-center font-sans font-medium">
        <li className="mr-2">
          <a href="#terms" className="underline">
            Terms & Conditions
          </a>
        </li>
        <li className="mr-2">
          <a href="#privacy" className="underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#disclaimers" className="underline">
            Disclaimers
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
