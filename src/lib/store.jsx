import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import PRODUCTS from '../data/products.json';

export const discountedPrice = (p) => Math.round((p.price - p.price * p.discount / 100) * 100) / 100;

export function getProductById(products, id) {
  return products.find((p) => p.id === Number(id));
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [products] = useState(PRODUCTS);
  const [shuffleproducts, setShuffleproducts] = useState(PRODUCTS.slice(0, 30));
  const [wishlist, setWishlist] = useState([]);
  const [compare, setCompare] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = useCallback((item) => {
    setWishlist((w) => {
      if (w.find((x) => x.id === item.id)) return w;
      const o = products.find((x) => x.id === item.id) || item;
      return [...w, { ...o }];
    });
  }, [products]);

  const removeWishlistItem = useCallback((item) => {
    setWishlist((w) => {
      const i = w.findIndex((x) => x.id === item.id);
      const n = [...w];
      n.splice(i, 1);
      return n;
    });
  }, []);

  const addToCompare = useCallback((item) => {
    setCompare((c) => {
      if (c.find((x) => x.id === item.id)) return c;
      const o = products.find((x) => x.id === item.id) || item;
      return [...c, { ...o }];
    });
  }, [products]);

  const removeCompareItem = useCallback((item) => {
    setCompare((c) => {
      const i = c.findIndex((x) => x.id === item.id);
      const n = [...c];
      n.splice(i, 1);
      return n;
    });
  }, []);

  const searchProduct = useCallback((query) => {
    const q = (query || '').toLowerCase();
    setSearchResults(q.length ? products.filter((o) => o.title.toLowerCase().includes(q)) : []);
  }, [products]);

  const shuffleProduct = useCallback((list) => {
    setShuffleproducts(list);
  }, []);

  const getallProduct = useCallback(() => {
    setShuffleproducts(PRODUCTS);
  }, []);

  const addToCart = useCallback((item, qty) => {
    setCart((cartState) => {
      const n = [...cartState];
      const found = n.find((x) => x.id === item.id);
      const q = qty || 1;
      if (found) {
        found.quantity = q;
      } else {
        n.push({ ...item, quantity: q });
      }
      return n;
    });
  }, []);

  const updateCartQuantity = useCallback((product, qty) => {
    setCart((cartState) => {
      const n = cartState.map((item) => {
        if (item.id === product.id) {
          const r = item.quantity + qty;
          if (r !== 0 && !(item.stock < r)) return { ...item, quantity: r };
        }
        return item;
      });
      return n;
    });
  }, []);

  const removeCartItem = useCallback((item) => {
    setCart((cartState) => cartState.filter((x) => x.id !== item.id));
  }, []);

  const cartTotal = useMemo(
    () => cart.reduce((sum, e) => sum + discountedPrice(e) * e.quantity, 0),
    [cart]
  );

  const value = {
    products,
    shuffleproducts,
    wishlist,
    compare,
    searchResults,
    addToWishlist,
    removeWishlistItem,
    addToCompare,
    removeCompareItem,
    searchProduct,
    shuffleProduct,
    getallProduct,
    cart,
    cartTotal,
    addToCart,
    updateCartQuantity,
    removeCartItem,
    getById: (id) => getProductById(products, id),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within <StoreProvider>');
  return ctx;
}
