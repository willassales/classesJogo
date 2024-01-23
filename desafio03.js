class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque indefinido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  let heroiMago = new Heroi("Gandalf", 1000, "mago");
  let heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
  
  heroiMago.atacar(); // Saída: O mago Gandalf atacou usando magia
  heroiGuerreiro.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
  