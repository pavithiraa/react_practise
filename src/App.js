import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const notify = () => toast.success("Wow so easy!");
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

      <button>Click me!</button>

      <nav aria-label="Pagination alignment">
        <ul className="pagination justify-content-end border-0">
          <li class="page-item ">
            <a class="page-link" href="!#">
              &lt;
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="!#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="!#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="!#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="!#">
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="!#">
              &gt;
            </a>
          </li>
        </ul>
      </nav>

      <div className="profile_button">
        <div className="pro_img">  
        <div className="i_border">
        <img
            src="data:image/png;base64,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"
            alt="image"
            className="p-img"
          />
        </div>
         
        <div className="">
      
        </div></div>
    
       
    <div className="div">
    <img
            src="https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png"
            alt="image"
            className="p-img"
          />
    </div>
      </div>
    </div>
  );
}

export default App;
