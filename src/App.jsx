import React, { useState } from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Users from './components/user/User'
import Footer from './components/footer/Footer'
import Posts from './components/posts/Posts'

const App = () => {
  const [page, setPage] = useState("posts")

  return (
    <div>
      <Header setPage={setPage} />

      {page === "posts" && <Posts />}
      {page === "products" && <Products />}
      {page === "users" && <Users />}

      <Footer />
    </div>
  )
}

export default App
