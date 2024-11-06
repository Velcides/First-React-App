import { Footer } from "./Footer"
import { Header } from "./Header/Header"

// Componente sendo passado como parametro para outro componente(Header e Footer)
export const Layout = ({children}: any) => {
    return(
        <>
            <Header />
            {children} 
            <Footer />
        </>
    )
}
// children - tudo que for passado entre esses componentes