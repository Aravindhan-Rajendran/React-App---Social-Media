import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div id="head"><h1>TravelMedia.in</h1></div>
          <div id="img">
            <svg width="431" height="73" viewBox="0 0 431 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 36.5C0 16.3416 16.3416 0 36.5 0H394.5C414.658 0 431 16.3416 431 36.5C431 56.6584 414.658 73 394.5 73H36.5C16.3416 73 0 56.6584 0 36.5Z" fill="white" />
              <ellipse cx="379.553" cy="26.6115" rx="5.77652" ry="5.61148" fill="#F9DDCF" />
              <path d="M380.708 32.223H378.398C372.655 32.223 368 36.7452 368 42.3236C368 42.9435 368.517 43.4459 369.155 43.4459H389.951C390.589 43.4459 391.106 42.9435 391.106 42.3236C391.106 36.7452 386.451 32.223 380.708 32.223Z" fill="#F9DDCF" />
              <path d="M278.591 22H267.368C265.469 22.0429 263.963 23.6141 264.001 25.5128V41.9881C263.996 42.9037 264.527 43.7375 265.359 44.1205C266.158 44.458 267.08 44.3051 267.727 43.7277L272.979 38.9467L278.231 43.7277C278.631 44.0996 279.156 44.3079 279.702 44.3112C280.011 44.3086 280.316 44.2437 280.599 44.1205C281.431 43.7375 281.962 42.9037 281.957 41.9881V25.5128C281.995 23.6141 280.489 22.0429 278.591 22Z" fill="#F9DDCF" />
              <path d="M176.89 38.8344H175.897V30.9784C175.897 26.0198 172.114 22 167.447 22C162.78 22 158.996 26.0198 158.996 30.9784V38.8344H158.056C157.473 38.8344 157 39.3369 157 39.9567C157 40.5766 157.473 41.079 158.056 41.079H176.89C177.473 41.079 177.946 40.5766 177.946 39.9567C177.946 39.3369 177.473 38.8344 176.89 38.8344Z" fill="#F9DDCF" />
              <path d="M167.447 44.4459C168.786 44.4419 169.979 43.5433 170.425 42.2014H164.468C164.914 43.5433 166.107 44.4419 167.447 44.4459Z" fill="#F9DDCF" />
              <g filter="url(#filter0_d_102_23)">
                <path d="M69.0276 29.5298L67.1646 27.7853L66.1994 26.9304L58.927 20.2874C58.5033 19.9042 57.8692 19.9042 57.4455 20.2874L50.173 26.9304L49.2079 27.7853L47.3449 29.5298C46.9116 29.9582 46.8829 30.6619 47.2798 31.1262C47.6767 31.5905 48.3584 31.6507 48.8263 31.2628L49.2079 30.9162V40.794C49.2079 42.7082 50.7153 44.2599 52.5748 44.2599H54.8194V37.3281C54.8194 35.4139 56.3268 33.8622 58.1862 33.8622C60.0457 33.8622 61.5531 35.4139 61.5531 37.3281V44.2599H63.7977C65.6572 44.2599 67.1646 42.7082 67.1646 40.794V30.9162L67.5462 31.2628C68.0113 31.6833 68.7193 31.6367 69.1286 31.1588C69.5371 30.68 69.4919 29.9512 69.0276 29.5298Z" fill="#F05A22" />
              </g>
              <circle cx="58.0192" cy="56.0192" r="2.01918" fill="#F05A22" />
              <defs>
                <filter id="filter0_d_102_23" x="38" y="13" width="46.4077" height="48.2599" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="3" dy="5" />
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.615686 0 0 0 0.78 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_23" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_23" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;