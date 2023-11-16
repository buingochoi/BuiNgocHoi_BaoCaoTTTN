import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function login(e){
    e.preventDefault();
    var user = new FormData();
    user.append('username',username);
    user.append('password',password);
    user.append('roles',2);
    await userservice.login(user).then(function(res){
      if(res.data.success === true){
        alert('thanh cong');
        navigate('/');
      }else{
        alert('tai khoan hoac mat khau sai');
      }
    });
  }

  return ( 
    <section className="section-conten padding-y" >
    {/* ============================ COMPONENT LOGIN   ================================= */}
    <div className="card mx-auto" style={{ maxWidth: 400}}>
      <div className="card-body">
        <h4 className="card-title mb-4">Đăng nhập</h4>
        <form method="post" onSubmit={login}>
          
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Username"
              type="text"
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Password"
              type="password"
              value={password} onChange={(e) => setPassword(e.target.value)}

            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <a href="#" className="float-right">
              Quên mật khẩu?
            </a>
            <label className="float-left custom-control custom-checkbox">
              {" "}
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
              />{" "}
              <div className="custom-control-label"> Nhớ </div>{" "}
            </label>
          </div>{" "}
          
          {/* form-group form-check .// */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Đăng nhập
            </button>
          </div>{" "}
{/* form-group// */}
        </form>
      </div>{" "}
      {/* card-body.// */}
    </div>{" "}
    {/* card .// */}
    <p className="text-center mt-4">
      Chưa có tài khoản? <a href="page-user-register">Đăng ký</a>
    </p>
    <br />
    <br />
    {/* ============================ COMPONENT LOGIN  END.// ================================= */}
  </section>

   );
}

export default Login;