import { useState } from "react";
import contactservice from "../../../services/ContactService";
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function contactStore(event){
        event.preventDefault();
        const contact={
            name:name,
            email:email,
            phone:phone,
            title:title,
            content:content,
            status:2,
        }
        try {
            await contactservice.create(contact).then(function (res) {
              alert(res.data.message);
            });
          } catch (error) {
            console.error(error.response.data);
          }
    }
    return (
    <form onSubmit={contactStore} method="post">
      <div className="container-fluid pt-5">
      <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: 600}}>
              <h1 className="display-5 text-uppercase mb-0">Xin vui lòng liên hệ với chúng tôi</h1>
          </div>
          <div className="row g-5">
              <div className="col-lg-7">
                    <div className="row g-3">
                        <div className="col-12">
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control bg-contact border-0 px-4" placeholder="Nhập Họ & Tên" style={{height: 55}}/>
                        </div>
                        <div className="col-12">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control bg-contact border-0 px-4" placeholder="Nhập Email" style={{height: 55}}/>
                        </div>
                        <div className="col-12">
                            <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={phone} className="form-control bg-contact border-0 px-4" placeholder="Số điện thoại" style={{height: 55}}/>
                        </div>
                        <div className="col-12">
                            <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control bg-contact border-0 px-4" placeholder="Vấn đề liên hệ" style={{height: 55}}/>
                        </div>
                        <div className="col-12">
                            <textarea onChange={(e) => setContent(e.target.value)} type="text" name="content" value={content} className="form-control bg-contact border-0 px-4 py-3" rows="8" placeholder="Thông tin chi tiết"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Gửi tin nhắn đến quản trị</button>
                        </div>
                    </div>
              </div>
              <div className="col-lg-5">
                  <div className="bg-contact mb-5 p-5">
                      <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Địa chỉ</h6>
                              <span>20 Tăng Nhơn Phú, Phước Long B, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam </span>
                          </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Email</h6>
                              <span>buibuinek@gmail.com</span>
                          </div>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                          <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Số điện thoại</h6>
                              <span>0291641450</span>
                          </div>
                      </div>
                    <div>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7467071531205!2d106.77242407365625!3d10.830685758193393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1697711241180!5m2!1svi!2s"
                       style={{height: 265,width: 400, border:0}} width="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</form>
    );
  }
  
  export default Contact;
