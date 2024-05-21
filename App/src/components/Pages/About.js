export default function About() {
    return (
        <div className="about">
          <h1>About</h1>
        <img src={require('../../assets/icon.jpg')} alt="Joy Halliday photo" className="rounded-circle"/>
        <p className="content is-italic mt-4">
          My name is Vineysha
        </p>
        <p className="content">
        I'm a computer science graduate
        </p>
      </div>
    );
  }

