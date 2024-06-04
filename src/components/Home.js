import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles/Home.css';
import image from './styles/assests/logo.jpeg';
function Home() {
  return (
    <section id='home'>
      <div className="home-container">
      <div className="leftside">
        <h1>Hey, Srikrrishn here</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                'I am a Roboticist',
                'I am a Aviator',
                'I am a programmer',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </h3>
        <p> Hello! I am Srikrrishn, With an insatiable thirst for knowledge and a fervent passion for robotics and technology, I am a lifelong learner driven by an unwavering curiosity to explore the unknown. 
. </p>
        <a href="https://www.linkedin.com/in/srikrrishn-choudhary-883a1a185/">Connect with me</a>
      </div>

      <div className="rightside">
        <img src={image} alt="image"/>
      </div>
    </div>
    </section>
  );
}

export default Home;