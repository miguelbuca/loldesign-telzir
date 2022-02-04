import { Provider as BumbagProvider } from 'bumbag'

import { Home } from './pages'

const router = () => {
    return (
        <BumbagProvider>
            <div>
                <Home/>
            </div>
        </BumbagProvider>
    )
}

export default router
