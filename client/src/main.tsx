import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { CatalogProvider } from './contexts/CatalogContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <CatalogProvider>
        <App />
      </CatalogProvider>
    </CartProvider>
  </StrictMode>,
)
