import React from 'react';

const About = () => {
  return (
    <div className="about-container bg-dark vh-100 text-secondary">
      <header className="about-header" style={{ textAlign: 'center', padding: '20px' }}>
        <h1 className='text-light'>About Us</h1>
      </header>
      <section className="about-content" style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
        <h2>Who We Are</h2>
        <p>
          Welcome to our platform! We are a dedicated team passionate about delivering exceptional solutions tailored to meet your needs. Our mission is to provide outstanding value and build lasting relationships with our community.
        </p>
        <h2>Our Values</h2>
        <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
          <li><strong>Integrity:</strong> We prioritize honesty and transparency in everything we do.</li>
          <li><strong>Innovation:</strong> We embrace creativity and leverage cutting-edge technologies to stay ahead.</li>
          <li><strong>Customer Focus:</strong> Your satisfaction is at the heart of our operations.</li>
        </ul>
        <h2>Our Journey</h2>
        <p>
          Since our beginning, we’ve worked diligently to establish ourselves as a trusted name in the industry. We are proud of our achievements and excited about the future as we continue to grow and innovate.
        </p>
      </section>
      <footer className="about-footer" style={{ textAlign: 'center', padding: '10px' }}>
        <p>          Copyright &copy; 2024 Employee Manager. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
