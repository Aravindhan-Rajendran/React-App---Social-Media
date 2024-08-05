import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postSlice';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './DetailPage.css'; // Import the CSS file
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use the useNavigate hook
  const { items, status, error } = useSelector((state) => state.posts);

  const [showDetail, setShowDetail] = useState(false);
  const [showUserId, setShowUserId] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const post = items.find((item) => item.id === parseInt(id));
  console.log(post); // Check if userId is present in the post object

  if (status === 'loading') return <div className="loading">Loading...</div>;
  if (status === 'failed') return <div className="error">{error}</div>;
  if (!post) return <div className="not-found">Post not found</div>;

  const goBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="detail-page">
      <div className="top-container">
        <Tooltip title="Go Back" arrow>
          <Button onClick={goBack}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left"/>
          </Button>
        </Tooltip>
        <h1>Post Number {post.id}</h1>
      </div>
      <div className="detail-container">
        <div className='img-container'>
          <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} className="detail-image" />
          <div className="svg-container">
            <img src='https://www.svgrepo.com/show/27444/share.svg' style={{ height: '25px', width: '25px' }} alt="share-icon" />
            <img src='https://static.vecteezy.com/system/resources/previews/000/552/501/original/vector-heart-romantic-love-graphic.jpg' style={{ height: '30px', width: '30px' }} alt="heart-icon" />
          </div>
        </div>
        <div id="title">
          <div className="button-container">
            <Button
              variant="contained"
              id="class1"
              onClick={() => {
                setShowDetail(true);
                setShowUserId(false);
              }}
            >
              Detail
            </Button>
            <Button
              variant="contained"
              id="class2"
              onClick={() => {
                setShowUserId(true);
                setShowDetail(false);
              }}
            >
              User Info
            </Button>
          </div>
          {showDetail && (
            <>
              <h1 className="detail-title">{post.title}</h1>
              <p className="detail-body">{post.body}</p>
            </>
          )}
          {showUserId && (
            <p className="detail-userId">Post Was Posted By </p>
          )}
        </div>
      </div>
      <div className="more-posts">
        <h1>More Posts</h1>
        {/* Displaying all posts */}
        {items.map((item) => (
          <div key={item.id} className="card">
            <img
              src={`https://picsum.photos/200?random=${item.id}`}
              alt={item.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-body">
                {item.body.length > 100 ? `${item.body.slice(0, 100)}...` : item.body}
              </p>
              <Link to={`/item/${item.id}`} className="read-more"><strong>Read More...</strong></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;