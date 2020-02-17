import React from "react";

export default class FindNumber extends React.Component {

      constructor(props) {
            super(props);
            this.randomNb = this.generateNb();
            this.number = 0;
      }

      generateNb() {
            let rdm = Math.floor(Math.random() * 100);
            console.log(rdm);
            return rdm;
      };

      submit(event) {
            event.preventDefault();
            this.number = event.target[0].value;
            this.game(this.number);
            console.log(this.number);
      };

      restart(event) {
            event.preventDefault();
            this.randomNb = this.generateNb();
            console.log('perdu');
      };

      game(number) {
            if (this.randomNb > number) {
                  console.log('plus petit')
            }
            else if (this.randomNb < number) {
                  console.log('plus grand')
            }
            else {
                  console.log('Gagné')
                  this.randomNb = this.generateNb();
            }
      }

      render() {
            return (
                  <div>
                        <form onSubmit={event => this.submit(event)}>
                              <input type="text"></input>
                              <button>Envoyer</button>
                        </form>

                        <button onClick={event => this.restart(event)}>Recommencer</button>
                  </div>
            )
      }

}