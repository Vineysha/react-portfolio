export default function About() {
  return (
    <div className="about" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About</h1>
      <img
        src={require('../../assets/icon.jpg')}
        alt="Vineysha icon"
        className="rounded-circle"
        style={{ width: '300px', height: '300px' }}
      />
      <p className="content is-italic mt-4">
        Hi! My name is Vineysha and I'm a computer science graduate who is looking to further her knowledge in this field.
      </p>
      <p className="content">
        I'm happy to show a selection of projects that showcase my passion for coding. Please contact me for any questions and feedback.
      </p>
    </div>
  );
}



