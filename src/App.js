import './App.css';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">Beyonce</h2>
          <img
            className="circle-img"
            src="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">+123 456 789</p>
          <p className="info">b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
