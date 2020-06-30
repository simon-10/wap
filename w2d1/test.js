describe("my test",function(){
    it("sum given arrays elements", function(){
        assert.equal(10,sum([1,2,3,4]));
    });

    it("Multiply given array elements", function(){
        assert.equal(120,multiply([2,3,4,5]))
    });

    it("Reverses a given string", function(){
        assert.equal('retupmoc',reverse('computer'))
    });

    it("Filters long words", function(){
        assert.equal('abcd',filterLongWords(['a','abc','abcd','aa'],3));
    });

    it("Find longest word",function(){
        assert.equal('simon',findLongestWord(['car','id','day','simon']));
    });
});