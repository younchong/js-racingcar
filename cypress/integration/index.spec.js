describe("Racing Test", () => {
  it("n대의 자동차 이름을 입력 받을 수 있다.", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("porch, audi, bmw, bentz");
    cy.get(".car-name-button").click();
  })

  it ("자동차 이름은 5글자 이하로 입력해야 한다. 아니면 alert", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("porche, audi, bmw, bentz");
    cy.get(".car-name-button").click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains("5자 이하의 이름을 입력해주세요.");
    });
  })

  it ("자동차 이름을 입력받은 후에 레이싱 횟수를 입력받을 수 있다.", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("a, b, c, d");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(4);
  });

  it ("전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("a, b, c, d");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(4);
    cy.get(".car-counter").find("button").click();
    cy.get(".car-player-name").contains("a")
    cy.get(".car-player-name").contains("b")
    cy.get(".car-player-name").contains("c")
    cy.get(".car-player-name").contains("d")
  })

  it ("경주가 완료되면 우승자를 알려준다.", () => {
    cy.visit("/");
    cy.get(".car-name-input").type("a, b, c, d");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(10);
    cy.get(".car-counter").find("button").click();
    cy.get(".car-winner").contains("최종 우승자");
  })
})


// ### 🎯 step1
//  입력받기
// - [x] 주어진 횟수를 input(number)으로 입력받을 수 있다.(사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다)
// - [x] n대의 자동차를 input으로 입력받을 수 있고, 자동차에 이름을 부여할 수 있다. 자동차 이름은 `쉼표(,)`를 기준으로 구분하며 이름은 5자 이하만 가능하다.
// - [x] 주어진 횟수동안에 자동차는 전진 또는 멈출 수 있다.
//  경주
// - [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// - [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
//  완료
// - [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// - [x] 우승자가 여러명일 경우 `,`를 이용하여 구분한다.
// TDD를 곁들인...
//  입력받기
// - [x]  자동차 이름은 `쉼표(,)`를 기준으로 구분하며 이름은 5자 이하만 가능하다.
// - [x] 주어진 횟수를 input(number)으로 입력받을 수 있다.(사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다)
// - [ ] 주어진 횟수동안에 자동차는 전진 또는 멈출 수 있다.