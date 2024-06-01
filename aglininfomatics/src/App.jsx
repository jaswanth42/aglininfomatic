import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div>
            {/* <img src="./aglin/socialCollage.png" alt="Social College Logo"> */}
            <ul>
                <li>
                    <a href="/"><b>Home</b></a>
                </li>
                <li>
                    <a href="/stories"><b>Services</b></a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" >Prceing Plans</a>
                    <div class="dropdown-content">
                        <a href="#">Essential</a>
                        <a href="#">Custom</a>
                        <a href="#">Premium</a>
                    </div>
               </li>
                <li>
                    <a href="/contacts"><b>Contact Us</b></a>
                </li>
                <li>
                    <a href="/apply"><b>Sign Up</b></a>
                </li>
            </ul>
        </div>
      </nav>
      <div class="main-content">
        <div class="banner">Welcome to Social Collage</div>
        <h1><b>Unlock Your Digital Potential with Us</b></h1>
        <p>Where Digital Dreams Take Shape! Empower your business or personal brand with cutting-edge digital marketing solutions tailored for today's dynamic landscape. Discover how we harness the latest technologies to amplify your online presence and unlock growth opportunities.</p>
        <button class="button get-started"><b>Get Started</b></button>
        <button class="button learn-more"><b>Learn More</b></button>
      </div>
    </>
  )
}

export default App
