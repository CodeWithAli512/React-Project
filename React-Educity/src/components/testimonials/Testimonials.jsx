import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef()
    let translX = 0;


    const slideForward = () => {
      if (translX > -50) {
        translX -= 25;
      }

      slider.current.style.transform = `translateX(${translX}%) `
    }
    
    const slideBackward = () => {
        if (translX < 0) {
          translX += 25;
        }
  
        slider.current.style.transform = `translateX(${translX}%) `
      }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="user-1" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edusity was one of the best decisions I've ever made . The supportive, comminity state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expectations. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="user-1" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edusity was one of the best decisions I've ever made . The supportive, comminity state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expectations. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="user-1" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edusity was one of the best decisions I've ever made . The supportive, comminity state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expectations. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="user-1" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edusity was one of the best decisions I've ever made . The supportive, comminity state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expectations. </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
