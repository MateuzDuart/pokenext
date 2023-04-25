import NavBar from "./NavBar"
import Rodape from "./Rodape"
import Head from 'next/head'

export default function Layout({ children }:{children: React.ReactNode}) {
    return (
        <>
              <Head>
                <link rel="shortcut icon" href="/imagens/favicon.ico" type="image/x-icon" />
                <title>PokeNext</title>
              </Head>
            <NavBar />
            <main className="main-container">{children}</main>
            <Rodape />
        </>
    )
}