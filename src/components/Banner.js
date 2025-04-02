import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="animation-elements">
        <div className="airplane airplane-1"></div>
        <div className="airplane airplane-2"></div>
        <div className="coin coin-1">₿</div>
        <div className="coin coin-2">Ξ</div>
        <div className="coin coin-3">$</div>
        <div className="coin coin-4">₿</div>
        <div className="coin coin-5">Ξ</div>
        <div className="cube cube-1"></div>
        <div className="cube cube-2"></div>
        <div className="cube cube-3"></div>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn banner-content" : "banner-content"}>
                <div className="tagline-wrapper">
                  <span className="tagline">Welcome to my Portfolio</span>
                </div>
                <h1 className="hero-title">
                  <span className="hi-text">Hi! I'm Dilli Basker</span> 
                  <div className="rotate-wrapper">
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full stack web3 Developer", "Web Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </div>
                </h1>
                <p className="hero-description">I am a passionate Full-Stack Developer and Blockchain Developer, currently pursuing my B.E. in Computer Science and Engineering (CSE), 2nd year. I love building scalable and efficient web applications, exploring decentralized technologies, and solving real-world problems through code.</p>
                <button className="connect-button" onClick={() => console.log('connect')}>
                  <span className="button-text">Let's Connect</span> 
                  <ArrowRightCircle size={25} className="arrow-icon" />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn hero-image-container" : "hero-image-container"}>
                  <div className="hero-avatar">
                    <div className="avatar-inner">
                      <div className="avatar-glow"></div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .banner {
          position: relative;
          padding: 180px 0 100px;
          background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
          overflow: hidden;
          min-height: 100vh;
          perspective: 1000px;
        }

        .animation-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .airplane {
          position: absolute;
          width: 120px;
          height: 40px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.3.5c-.3.5-.2 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.5c.3.5.8.5 1.3.3l.5-.2c.4-.3.6-.8.5-1.4z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
          opacity: 0.7;
          z-index: 2;
        }

        .airplane-1 {
          top: 15%;
          left: -120px;
          animation: fly-right 20s linear infinite;
        }

        .airplane-2 {
          top: 65%;
          right: -120px;
          transform: scaleX(-1);
          animation: fly-left 30s linear infinite;
          animation-delay: 5s;
        }

        @keyframes fly-right {
          0% {
            left: -120px;
            transform: translateY(0) rotate(0deg);
          }
          10% {
            transform: translateY(30px) rotate(5deg);
          }
          20% {
            transform: translateY(-20px) rotate(-5deg);
          }
          30% {
            transform: translateY(10px) rotate(3deg);
          }
          100% {
            left: 120%;
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes fly-left {
          0% {
            right: -120px;
            transform: scaleX(-1) translateY(0) rotate(0deg);
          }
          15% {
            transform: scaleX(-1) translateY(-50px) rotate(-8deg);
          }
          25% {
            transform: scaleX(-1) translateY(30px) rotate(5deg);
          }
          40% {
            transform: scaleX(-1) translateY(-10px) rotate(-3deg);
          }
          100% {
            right: 120%;
            transform: scaleX(-1) translateY(0) rotate(0deg);
          }
        }

        .coin {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: bold;
          color: #000;
          background: linear-gradient(45deg, #FFD700, #FFC107);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
          z-index: 2;
          animation: float 12s infinite ease-in-out;
          transform-style: preserve-3d;
          transform: rotateY(0deg);
        }

        .coin::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(45deg, #B8860B, #DAA520);
          z-index: -1;
          transform: translateZ(-2px);
          animation: coin-rotate 8s infinite linear;
        }

        @keyframes coin-rotate {
          0% {
            transform: rotateY(0deg) translateZ(-2px);
          }
          100% {
            transform: rotateY(360deg) translateZ(-2px);
          }
        }

        .coin-1 {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }

        .coin-2 {
          top: 65%;
          left: 8%;
          animation-delay: 2s;
        }

        .coin-3 {
          top: 30%;
          right: 12%;
          animation-delay: 1s;
        }

        .coin-4 {
          top: 75%;
          right: 20%;
          animation-delay: 3s;
        }

        .coin-5 {
          top: 15%;
          right: 30%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotateY(0deg);
          }
          25% {
            transform: translateY(-30px) rotateY(90deg);
          }
          50% {
            transform: translateY(0) rotateY(180deg);
          }
          75% {
            transform: translateY(30px) rotateY(270deg);
          }
        }

        .cube {
          position: absolute;
          width: 60px;
          height: 60px;
          transform-style: preserve-3d;
          animation: cube-rotate 20s infinite linear;
          z-index: 1;
          opacity: 0.6;
        }

        .cube::before,
        .cube::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.5);
          transform-origin: center;
        }

        .cube::before {
          transform: rotateY(90deg);
        }

        .cube::after {
          transform: rotateX(90deg);
        }

        .cube-1 {
          top: 30%;
          left: 5%;
        }

        .cube-2 {
          top: 60%;
          right: 10%;
          animation-delay: 5s;
        }

        .cube-3 {
          top: 10%;
          right: 20%;
          animation-delay: 10s;
        }

        @keyframes cube-rotate {
          0% {
            transform: rotateX(0) rotateY(0) rotateZ(0);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.2);
          animation: pulse 15s infinite ease-in-out;
          z-index: 1;
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          top: 15%;
          left: 10%;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          bottom: 10%;
          right: 5%;
          animation-delay: 5s;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        .banner-content {
          position: relative;
          z-index: 10;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .tagline-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
          perspective: 1000px;
        }

        .tagline {
          display: inline-block;
          padding: 10px 20px;
          font-weight: 700;
          font-size: 18px;
          background: linear-gradient(90deg, #FF8A00, #FF0084);
          border-radius: 5px;
          transform: rotateX(10deg);
          transform-origin: bottom;
          animation: tag-float 5s ease-in-out infinite;
          color: white;
          letter-spacing: 1.5px;
          box-shadow: 0 10px 20px rgba(255, 138, 0, 0.3), 
                      0 0 40px rgba(255, 0, 132, 0.2);
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        @keyframes tag-float {
          0%, 100% {
            transform: rotateX(10deg) translateY(0);
          }
          50% {
            transform: rotateX(15deg) translateY(-10px);
          }
        }

        .hero-title {
          font-size: 52px;
          font-weight: 700;
          margin-bottom: 30px;
          color: white;
          display: flex;
          flex-direction: column;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .hi-text {
          color: white;
          margin-bottom: 15px;
          animation: hi-move 5s ease-in-out infinite;
          transform-origin: left;
        }

        @keyframes hi-move {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .rotate-wrapper {
          position: relative;
          height: 70px;
          overflow: hidden;
        }

        .txt-rotate {
          font-weight: 700;
          background: linear-gradient(90deg, #00F5A0, #00D9F5);
          -webkit-background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }

        .txt-rotate .wrap {
          border-right: 4px solid #00F5A0;
          padding-right: 10px;
          animation: blinking-cursor 0.8s step-end infinite;
        }

        @keyframes blinking-cursor {
          from, to { border-color: transparent }
          50% { border-color: #00F5A0 }
        }

        .hero-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 40px;
          position: relative;
          max-width: 90%;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          animation: fade-in-up 1s ease-out forwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .connect-button {
          background: linear-gradient(45deg, #00F5A0, #00D9F5);
          border: none;
          color: #121212;
          font-weight: 700;
          font-size: 18px;
          padding: 15px 32px;
          position: relative;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.5s ease;
          display: flex;
          align-items: center;
          gap: 15px;
          transform-style: preserve-3d;
          transform: perspective(1000px);
          box-shadow: 0 10px 20px rgba(0, 245, 160, 0.3),
                      0 0 30px rgba(0, 217, 245, 0.2);
          overflow: hidden;
          z-index: 1;
        }

        .connect-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #00F5A0, #00D9F5);
          opacity: 0.7;
          z-index: -1;
          transition: transform 0.5s ease;
          transform: translateZ(-1px);
        }

        .connect-button:hover {
          transform: perspective(1000px) translateY(-5px) translateZ(10px);
          box-shadow: 0 15px 30px rgba(0, 245, 160, 0.4),
                      0 0 50px rgba(0, 217, 245, 0.3);
        }

        .connect-button:hover::before {
          transform: translateZ(-1px) scale(1.1);
        }

        .connect-button:hover .arrow-icon {
          transform: translateX(5px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .hero-image-container {
          position: relative;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .hero-avatar {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          animation: avatar-float 8s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .avatar-inner {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }

        .avatar-glow {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(
            circle,
            rgba(0, 245, 160, 0.8) 0%,
            rgba(0, 217, 245, 0.8) 25%,
            rgba(255, 255, 255, 0) 70%
          );
          animation: glow-rotate 10s linear infinite;
          opacity: 0.4;
        }

        @keyframes glow-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes avatar-float {
          0%, 100% {
            transform: translateY(0) rotateY(0deg);
          }
          25% {
            transform: translateY(-20px) rotateY(5deg);
          }
          50% {
            transform: translateY(0) rotateY(0deg);
          }
          75% {
            transform: translateY(20px) rotateY(-5deg);
          }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 42px;
          }
          
          .hero-avatar {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .banner {
            padding: 120px 0 60px;
          }
          
          .hero-avatar {
            width: 250px;
            height: 250px;
            margin-top: 50px;
          }

          .hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 480px) {
          .banner {
            padding: 100px 0 50px;
          }
          
          .hero-title {
            font-size: 28px;
          }
          
          .hero-description {
            font-size: 16px;
          }
          
          .hero-avatar {
            width: 200px;
            height: 200px;
          }
          
          .tagline {
            font-size: 14px;
            padding: 8px 16px;
          }
          
          .connect-button {
            font-size: 16px;
            padding: 12px 24px;
          }
        }
      `}</style>
    </section>
  )
}