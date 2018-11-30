// Mini-framework 'fwAges'
// Description: Update every day your ages
// Author: Adenilson Santos
// adenilson-santos.github.io
// mrgeekti.tech

class DateConversor {
  constructor(age) {
    this.currentDate = new Date();
    this.userDate = new Date(age.split("/"));
  }

  conversor() {
    if (
      this.currentDate.getDate() >= this.userDate.getDate() &&
      this.currentDate.getMonth() + 1 >= this.userDate.getMonth() + 1
    ) {
      console.log(this.currentDate.getDate());
      console.log(this.userDate.getDate());
      console.log(this.currentDate.getMonth() + 1);
      console.log(this.userDate.getMonth() + 1);
      return this.currentDate.getFullYear() - this.userDate.getFullYear();
    } else {
      return this.currentDate.getFullYear() - this.userDate.getFullYear() - 1;
    }
  }
}

class AgesController {
  constructor(age, seletor) {
    this.toDate(age, seletor);
  }

  toDate(age, seletor) {
    if (seletor && age) {
      document.querySelector(seletor).textContent = this.updateAge(age);
    } else if (!seletor || !age) {
      console.warn("Você não inseriu um dos parâmetros.");
      console.warn(
        `insira seu código no formato: new Age("aaaa/mm/dd", "seletor");`
      );
      console.warn("Por enquanto o resultado é: ", this.updateAge(age));
    }
  }

  updateAge(age) {
    return new DateConversor(age).conversor();
  }
}

class Age {
  constructor(age, seletor) {
    new AgesController(age, seletor);
  }
}
