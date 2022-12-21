describe("testing the dev.reky.se hemsida", () => {
    beforeEach(() => {
      cy.visit("https://dev.reky.se/");
      cy.get("#rcc-confirm-button").click();
      cy.intercept("POST", "https://reky.azurewebsites.net/api/apply-test");
    });
  
    // test 1
    it("should show specialområde val", () => {
      cy.getByTestId("yrke-systemutvecklare").click();
  
      cy.getByTestId("python").click();
      cy.getByTestId("expertise-next-button").click();
      cy.getByTestId("place-textbox-textbox").type("Borås");
      cy.getByTestId("location-step-next-button").click();
      cy.getByTestId("contact-name-textbox").type("Osku Penaldo");
      cy.getByTestId("contact-email-textbox").type("Oskargaymer@hotmale.com");
      cy.getByTestId("contact-tel-textbox").type("1337");
      cy.getByTestId("send-form-button").click();
      // cy.getByTestId("klart-text").contains('KLART');
    });
    
    // test 2
    it("should show specialområde val", () => {
        cy.getByTestId("yrke-redovisningsekonom").click();
        cy.getByTestId("moms").click();
        cy.getByTestId("expertise-next-button").click();
        cy.getByTestId("place-textbox-textbox").type("Jockesmamma");
        cy.getByTestId("location-step-next-button").click();
        cy.getByTestId("contact-name-textbox").type("Simon Pimon");
        cy.getByTestId("contact-email-textbox").type("SimonYebat@korv.se");
        cy.getByTestId("contact-tel-textbox").type("1337");
        cy.getByTestId("send-form-button").click();
        // cy.getByTestId("klart-text").contains('KLART');
      });

        // test 3 
    it("should show specialområde val", () => {
        cy.getByTestId("yrke-annat").click();
        cy.getByTestId("yrke-fritext").type("Kebabsvarvare");
        cy.getByTestId('yrke-fritext').parent().find('button').click();
        cy.getByTestId("place-textbox-textbox").type("Boårs");
        cy.getByTestId("location-step-next-button").click();
        cy.getByTestId("contact-name-textbox").type("Joakim Vanström ");
        cy.getByTestId("contact-email-textbox").type("Jockeboi@hotmale.com");
        cy.getByTestId("contact-tel-textbox").type("1337");
        cy.getByTestId("send-form-button").click();
        // cy.getByTestId("klart-text").contains('KLART');
    });

    // test 4
    it("should show specialområde val", () => {
        cy.getByTestId("yrke-annat").click();
        cy.getByTestId("yrke-fritext").type("Anime enjoyer");
        cy.getByTestId('yrke-fritext').parent().find('button').click();
        cy.getByTestId("place-textbox-textbox").type("Boårs");
        cy.getByTestId("location-step-next-button").click();
        cy.getByTestId("contact-name-textbox").type(" Erik ");
        cy.getByTestId("contact-email-textbox").type("Atcheboy@weeb.se");
        cy.getByTestId("contact-tel-textbox").type("1337");
        cy.getByTestId("send-form-button").click();
        // cy.getByTestId("klart-text").contains('KLART');
    });

    // test 5
    it("should show specialområde val", () => {
        cy.getByTestId("yrke-annat").click();
        cy.getByTestId("yrke-fritext").type("Korvgubbe");
        cy.getByTestId('yrke-fritext').parent().find('button').click();
        cy.getByTestId("place-textbox-textbox").type("Stockholm");
        cy.getByTestId("location-step-next-button").click();
        cy.getByTestId("contact-name-textbox").type("David Lundholm ");
        cy.getByTestId("contact-email-textbox").type("Dååååvid@gmail.com");
        cy.getByTestId("contact-tel-textbox").type("1337");
        cy.getByTestId("send-form-button").click();
        // cy.getByTestId("klart-text").contains('KLART');
    });
  });