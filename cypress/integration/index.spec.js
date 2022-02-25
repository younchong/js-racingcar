describe("Racing Test", () => {
  it("n대의 자동차 이름을 입력 받을 수 있다.", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("porch, audi, bmw, bentz");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(4);
    cy.get(".car-counter").find("button").click();
    cy.get(".car-result");
  })

  it ("자동차 이름은 5글자 이하로 입력해야 한다. 아니면 alert", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("porche, audi, bmw, bentz");
    cy.get(".car-name-button").click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains("5자 이하의 이름을 입력해주세요.");
    });
  })
})

//  입력받기
// - [x]  자동차 이름은 `쉼표(,)`를 기준으로 구분하며 이름은 5자 이하만 가능하다.
// - [ ] 주어진 횟수를 input(number)으로 입력받을 수 있다.(사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다)
// - [ ] 주어진 횟수동안에 자동차는 전진 또는 멈출 수 있다.