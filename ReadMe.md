NextJS performs Aggressive Caching

Next14 aggressive caching > Next15

1. Request memoization
   NextJs stores/memorizes the request with same configuration
   at build and local time
   to Avoid duplicate data fetches
   persists until request duration

2. Data Cache
   Stores and reuses data that has been fetched from the data source
   at build and local time
   Avoids data fetches in whole unlike request memoization that avoids duplicate data fetches
   persists until revalidated

3. Full Route Cache
   Not only the data, Next also caches the entire HTML and client side rendering
   at build time
   Avoids re-rendering does pre-rendering
   persists until revalidated

4. Router Cache
   managed on the client side

# NextJsCaching
