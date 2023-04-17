import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="relative h-[100vh]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="fixed left-[20px] top-[10px] w-[150px] object-contain"
        />
        <button className="fixed right-[20px] top-[10px] px-[20px] py-[10px] bg-[black]">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
