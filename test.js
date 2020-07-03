describe("my test",function(){
    it("given separate Adam and Inheritance,  and returns  Adam is now teaching Inheritance  ", function(){

        Person.prototype.initialize("Adam", 45);
        
        assert.equal("Adam is now teaching Inheritance",Teacher.prototype.teach("Inheritance"));
    });

    it("[6,4,0, 3,-2,1] sort it and returns [-2,0,1,3,4,6]", function(){
        
        assert.equal('-2,0,1,3,4,6',([6,4,0,3,-2,1].bubbleSort().toString()))
    });

    it("Given, This house is not nice!, returns This house is nice!  ", function(){

        Person.prototype.initialize("Adam", 45);
        
        assert.equal("This house is  nice!","This house is not nice!".filter('not'));
    });

    
});