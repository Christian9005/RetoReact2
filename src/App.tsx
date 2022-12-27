import Button from "./components/atoms/button/button";
import Input from "./components/atoms/input/input";
import Img from "./components/atoms/img/img";
import Card from "./components/molecules/card/card";
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
