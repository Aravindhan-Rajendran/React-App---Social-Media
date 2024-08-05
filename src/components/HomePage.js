import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postSlice';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter posts based on search query
  const filteredPosts = items.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === 'loading') return <div className="loading">Loading...</div>;
  if (status === 'failed') return <div className="error">{error}</div>;

  return (
    <div>
      <div id="search" style={{ 'margin-top': '8rem' }}>
        <h1>Social Media For Travellers</h1>
        <span>
          <svg
            width="23"
            height="20"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5097 11.6814L10.3455 9.53469C11.1856 8.48726 11.5924 7.15778 11.4823 5.81962C11.3723 4.48145 10.7537 3.23631 9.75375 2.34023C8.75382 1.44415 7.44858 0.965239 6.1064 1.00197C4.76421 1.03869 3.48711 1.58827 2.53769 2.53769C1.58827 3.48711 1.03869 4.76421 1.00197 6.1064C0.965239 7.44858 1.44415 8.75382 2.34023 9.75374C3.23632 10.7537 4.48145 11.3723 5.81962 11.4823C7.15778 11.5924 8.48727 11.1856 9.53469 10.3455L11.6814 12.4922C11.7356 12.5469 11.8001 12.5903 11.8712 12.6199C11.9423 12.6495 12.0185 12.6647 12.0955 12.6647C12.1725 12.6647 12.2488 12.6495 12.3199 12.6199C12.3909 12.5903 12.4555 12.5469 12.5097 12.4922C12.6148 12.3834 12.6736 12.2381 12.6736 12.0868C12.6736 11.9355 12.6148 11.7901 12.5097 11.6814ZM6.26219 10.3455C5.45459 10.3455 4.66511 10.106 3.99361 9.65736C3.32211 9.20868 2.79874 8.57095 2.48968 7.82482C2.18063 7.07868 2.09976 6.25766 2.25732 5.46557C2.41488 4.67348 2.80378 3.9459 3.37484 3.37484C3.9459 2.80377 4.67348 2.41487 5.46557 2.25732C6.25766 2.09976 7.07869 2.18063 7.82482 2.48968C8.57095 2.79874 9.20868 3.32211 9.65736 3.99361C10.106 4.66511 10.3455 5.45458 10.3455 6.26219C10.3455 7.34516 9.91532 8.38377 9.14954 9.14954C8.38377 9.91532 7.34516 10.3455 6.26219 10.3455Z"
              fill="#263238"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="home-container">
        {filteredPosts.map((post) => (
          <div key={post.id} className="card">
            <img
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={post.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-body">
                {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
              </p>
              <Link to={`/item/${post.id}`} className="read-more"><strong>Read More...</strong></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;