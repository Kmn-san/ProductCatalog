# Product Catalog App

A small product catalog app build with the free API(https:dummyjson.com), usng React Native + TypeScript.

## Tech Stack

- **React Native** (Expo)
- **TypeScript** 
- **Expo Router** - file-based navigation
- **Tanstack Query** - data fetching, caching, pagination (`useInfiniteQuery`) and refetch/retry
- **NativeWind (Tailwind CSS for RN)** - styling
- **Axios** - HTTP client
- **react-native-reanimated** - skeleton loading animations
- **@expo/vectoe-icons** - icons

## How to Run

1. Clone the repository:
```bash
   git clone https://github.com/Kmn-san/ProductCatalog.git
   cd ProductCatalog
```

2. Install dependecies:
```bash
   npm install
```

3. Create a `.env` file in the project root:
```dotenv
   EXPO_PUBLIC_BASE_URL=https://dummyjson.com
```

4. Start the project:
```bash
   npx expo start
```

5. Scan the QR code with the **Expo Go** app (IOS/Android) to run it on your device.

## Architecture

The project is organnized into distinct layers to saperate data fetching, business logic and UI:
```
app/     # Screens (file-based routing via expo-router)
   _layout.tsx
   MainScreen.tsx    # Main product list screen
   product/[id].tsx     # Product detail screen

components/    # UI-only components
   EmptyState.tsx
   ErrorState.tsx
   ListFooter.tsx
   ProductCard.tsx
   SearchBar.tsx
   SkeletonList.tsx
   SkeletonState.tsx
   detail/
      DetailSkeleton.tsx
      ImageHeader.tsx
      PolicyInfo.tsx
      PriceSection.tsx
      ProductInfo.tsx
      ReviewSection.tsx
      StandardModal.tsx

hooks/      # Business logic/ data-fetching layer
   useProducts.ts    # Infinite query: list + search + pagination
   useProductDetail.ts     # Single product query
   useDebounce.ts    # Deneric debounce hook 

lib/
   api/
      axios.ts    # Configured axios instance (baseURL, timeout, error interceptor)
      api.ts      # API call functions (getProducts, getProductDetail, searchProduct)
      utils.ts    # Pure function : discounted price calculation
types/      # TypeScript interface matching only the fields actually used
   Product.ts      
   Review.ts
```

## Key Architectural Decisions
- **TanStack Query over manual state management:** Rather than hand-rolling `useState`/`useEffect` for loading, error and pagination state, I used `useInfiniteQuery` for the product list (handles `skip`-based pagination, chching and refetch out og the box) and `useQuery` for the product detail page. This significantly reduces boilerplate.

- **Server-side search:** Search uses DummyJSON's dedicated `/products/search?q=` endpoint rather than filtering the already-loaded list client-side. This was less work to implement and scales correctly even if the full catalog is much larger than what's currently loaded on the client.

- **Lean data models:** The `Product` type only maps the fields actually used in the UI (title, price, thumbnail, description, rating, stock, images, reviews, etc.), rather then the full DummyJSON response (e.g. `barcode`, `qrCode` are intentionally ommited.)

- **Loading states split into two:** Initial load (`isLoading`) shows a full-screen skeleton matching the shape of the real content. Loading the next data (`isFetchingNextPage`) only shows a small spinner in the list footer - the already-loaded list is never replaced or reset while paginating.

## Feature
- **Product list** - two-column grid showing thumbnail, discounted price and rating so the most important infois visible at a glance.
- **Pagination** - Infinite scroll using DummyJSON's `skip` parameter, loading 20 items at a time. Footer shows a spinner while loading more, or "This is the end!"once all items are loaded.
- **Pull-to-refresh** - swipe down on the list to refresh from the top.
- **Product detail page** -
   - Image with a floating back button
   - Discounted price with original price struck through
   - Title, rating and remaining stock (including minimun order quantity)
   - Return policy, shipping info and warranty info
   - "Product Standard" - tappable row that opens a modal showing brand, category, weight, dimensions and SKU
   - Reviews - total review count, plus the 3 most recent reviews (reviewer name, rating, date, comment). Reviewer email intentionally excluded for privacy.
   - Full description
- **States** - loading (skeleton), error (with retry button), empty (with friendly message) and success are all visually distinct across both screen.
- **Search** - debounced search bar using DummyJSON's server-side `/products/search` endpoint.

## TODOs 
- No explicit image-load-failure placeholder yet
- No unit tests yet. Testing the `discountedPrice` function in `lib/utlis.ts`

## AI Usage Disclosure
AI (Claude) was used for:
- Explaning concepts I was unfamiliar with (debounce,`useInfiniteQUery` vs `useQuery`)
- Reviewing code snippets and pointing out bugs (e.g. missing `keyExtractor`)
- Generating and reviewing UI component code (NativeWind styling) based on my descriptions and requirements

I was responsible for:
- All architextural decisions (folder structure, choice of TanStack Query, server-side vs client-side search, splitting loading states for initial load vs pagination)
- Deciding what each component/screen should look like and what data it needs
- Reading and understanding every line of generated code before including it in the project

For UI inplementation details (styling syntax, component boilerplate) I leaned heavily on AI. BUt for business logic and data layer I wrote based on my own understanding of the requirements.