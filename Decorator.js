//Eu como usuário, quero lançar os dados para defender os meus territórios//


class DiceRoll {
    roll() {
        throw new Error('Método abstrato e deve ser implementado pelas subclasses.');
    }
}

// Implementação da classe para o lançamento dos dados
class BasicDiceRoll extends DiceRoll {
    roll() {
        return Math.floor(Math.random() * 6) + 1; // Simula o lançamento do dado
    }
}

// Decorator para lançamentos dos dados
class DiceRollDecorator extends DiceRoll {
    constructor(diceRoll) {
        super();
        this.diceRoll = diceRoll;
    }

    roll() {
        return this.diceRoll.roll();
    }
}



const basicRoll = new BasicDiceRoll();
console.log("Lançamento básico:", basicRoll.roll());



module.exports={DiceRoll, BasicDiceRoll, DiceRollDecorator};
