// App.js (composant basé sur une classe avec état)
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      personne: {
        fullName: 'Makhlouf Ahlem',
        bio: 'WebDesigner passionnée par le design et le développement web.',
        imgSrc: '/ahlem.jpg', 
        profession: 'WebDesigneuse',
      },
      montre: false, 
      elapsedTime: 0,
    };
    this.interval = null; 
  }

  // Méthode pour basculer la visibilité du profil
  toggleMontre = () => {
    this.setState(prevState => ({ montre: !prevState.montre }));
  };

  // Méthode pour démarrer le chronomètre
  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000); // Met à jour toutes les secondes
  };

  // Méthode pour arrêter le chronomètre
  stopTimer = () => {
    clearInterval(this.interval);
  };

  // Méthode appelée après que le composant a été monté
  componentDidMount() {
    this.startTimer(); // Démarre le chronomètre lorsque le composant est monté
  }

  // Méthode appelée avant que le composant ne soit démonté
  componentWillUnmount() {
    this.stopTimer(); // Arrête le chronomètre lorsque le composant est démonté
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { montre, elapsedTime } = this.state; // Ajoutez elapsedTime ici

    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Hello ! </h1>
        <button className="button" onClick={this.toggleMontre}>
          {montre ? 'Masquer' : 'Afficher'} les détails
        </button>
        
        {montre && (
          <div>
            <img className="image" src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>{profession}</strong></p>
          </div>
        )}
        
        {/* Affichage du temps écoulé */}
        <div className='elapsed-time' >
          Temps écoulé : {elapsedTime} seconde{elapsedTime !== 1 ? 's' : ''}
        </div>
      </div>
    );
  }
}

export default App;
