import GifGalery from "./components/template/gif-galery/gif-galery";
import {GifGaleryProvider} from "./context/gif-galery-context/gif-galery-context";

function App() {

    return (
        <GifGaleryProvider>
            <GifGalery/>
        </GifGaleryProvider>
    )
}

export default App
