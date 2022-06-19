import Cards from '../cards/Cards';
import ModalProvider from './../../contexts/ModalProvider';

import './app.scss';

function App() {
    return (
        <ModalProvider>
            <div className="container">
                <Cards />
            </div>
        </ModalProvider>
    );
}

export default App;