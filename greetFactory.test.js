let greet = Greet()
describe("Tests greeting the user in the correct language selected.", function () {


    it("Should greet the username Ammaar in English.", function () {
        let greeting = Greet();
        var userName = "Ammaar"
        var language = "English";
        assert.equal(greeting.languageChoice(language, userName), "Hello , Ammaar");
    });
    it("Should greet the username Thomas in Afrikaans.", function () {
        let greeting = Greet();
        var userName = "Thomas"
        var language = "Afrikaans";
        assert.equal(greeting.languageChoice(language, userName), "Halo , Thomas");
    });
    it("Should greet the username John in Xhosa.", function () {
        let greeting = Greet();
        var userName = "John";
        var language = "Xhosa";
        assert.equal(greeting.languageChoice(language, userName), "Molo , John");
    });


});
describe("Tests if username textbox is empty or if no language is selected.", function () {
    it("Should return a message to inform the user to select a language and enter a username.", function () {
        let greeting = Greet();
        var language = "";
        var userName = "";
        assert.equal(greeting.validate(language, userName), "Please Select A Language And  Enter A Username.")
    });
    it("Should return a message to inform the user to enter a username.", function () {
        let greeting = Greet();
        var language = "English";
        var userName = "";
        assert.equal(greeting.validate(language, userName), "Please enter a username.")
    })
    it("Should return a message to inform the user to select a language.", function () {
        let greeting = Greet();

        var language = "";
        var userName = "Thomas";
        assert.equal(greeting.validate(language, userName), "Please Select A Language")
    })

});
describe("Tests if counting function works correctly.", function () {
    it("Should count 3 names", function () {
        var names = { "Ammaar": 1, "John": 1, "Timothy": 1 }
        assert.equal(greet.countNamesStorage(names), 3);

    })
    it("Should count 4 names.", function () {
        var names = { "Mecayle": 1, "Andrew": 1, "Lewis": 1, "Thabo": 1 }
        assert.equal(greet.countNamesStorage(names), 4);
    })
    it("Should count 1 name.", function () {
        var names = { "Melissa": 1 };
        assert.equal(greet.countNamesStorage(names), 1)
    })
})
describe("Shows the names being stored in the object.", function () {
    it(" Should return {Ammaar:1,John:1,Timothy:1}", function () {
        var names = { Ammaar: 1, John: 1, Timothy: 1 }
        assert.deepEqual(greet.nameStorage(names), { Ammaar: 1, John: 1, Timothy: 1 })
    })
    it("Should return {Mecayle:1,Andrew:1,Lewis:1,Thabo:1}", function () {
        var names = { Mecayle: 1, Andrew: 1, Lewis: 1, Thabo: 1 }
        assert.deepEqual(greet.nameStorage(names), { Mecayle: 1, Andrew: 1, Lewis: 1, Thabo: 1 })
    })
    it("Should return {Melissa:1}", function () {
        var names = { Melissa: 1 };
        assert.deepEqual(greet.nameStorage(names), { Melissa: 1 })
    })
})