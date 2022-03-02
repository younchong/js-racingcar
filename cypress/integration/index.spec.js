describe("Step 1 test", () => {
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
      expect(text).to.contains("0글자 이상 5글자 이하의 자동차 이름을 입력해주세요.");
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
    cy.clock();
    cy.get(".car-name-input").type("a, b, c, d");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(4);
    cy.get(".car-counter").find("button").click();
    cy.tick(1000 * 4);
    cy.get(".car-winner").contains("최종 우승자");
  })
})

describe("Step2 test", () => {
  it("자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행되는지 테스트 한다.", () => {
    cy.visit("/");
    cy.clock();
    cy.get(".car-name-input").type("a, b, c, d");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(3);
    cy.get(".car-counter").find("button").click();
    cy.tick(1000);
    cy.get(".forward-icon").contains("⬇️️");
    cy.tick(1000);
    cy.get(".forward-icon").contains("⬇️️");
    cy.tick(1000);
    cy.get(".forward-icon").contains("⬇️️");
  });

  it("정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.", () => {
    cy.visit("/");
    cy.clock();
    cy.get(".car-name-input").type("a, b, c, d");
    cy.get(".car-name-button").click();
    cy.get(".car-counter").find("input").type(3);
    cy.get(".car-counter").find("button").click();
    cy.tick(1000 * 3 + 1000 * 2);
    cy.on('window:alert', (text) => {
      expect(text).to.contains("축하합니다");
    });
  })
})
