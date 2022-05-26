import React from "react"
import ReactDOM from "react-dom"

function Header() {
  return (
    <header>
        <nav>
          <img src="./react-log.png" alt="react logo" width="40px" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </header>
  )
}

function Main() {
  return (
    <>
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
      </ol>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <small>&#169 2022 Cabahug development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
    
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))