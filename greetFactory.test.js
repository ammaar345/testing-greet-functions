let greet=Greet()
describe("Tests greeting the user in the correct language selected.", function () {


    it("Should greet the username Ammaar in English.", function () {
        let greeting=Greet();
        var userName ="Ammaar"
        var language="English";
        assert.equal(greeting.languageChoice(language,userName), "Hello , Ammaar" );
    });
    it("Should greet the username Thomas in Afrikaans.", function () {
        let greeting=Greet();
        var userName ="Thomas"
var language="Afrikaans";
        assert.equal(greeting.languageChoice(language,userName), "Halo , Thomas");
    });
    it("Should greet the username John in Xhosa.", function () {
        let greeting=Greet();
       var userName="John";
var language="Xhosa";
        assert.equal(greeting.languageChoice(language,userName),"Molo , John");
    });

   
});
describe("Tests if username textbox is empty or if no language is selected.", function () {
   it("Should return a message to inform the user to select a language and enter a username.",function(){
let greeting=Greet();
 var language="";
 var userName="";
  assert.equal(greeting.validate(language,userName),"Please Select A Language And  Enter A Username.") });
   it("Should return a message to inform the user to enter a username.",function(){
    let greeting=Greet();
    var language="English";
    var userName="";
    assert.equal(greeting.validate(language,userName),"Please enter a username.")
   })
   it ("Should return a message to inform the user to select a language",function(){
    let greeting=Greet();

    var language="";
    var userName="Thomas";
   assert.equal(greeting.validate(language,userName),"Please Select A Language")
   })

});