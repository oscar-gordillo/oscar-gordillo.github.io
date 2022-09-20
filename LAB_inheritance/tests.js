describe(" filter function on the String object", function () {
    
        it("Filtering This house is not nice!", function () {
            assert.equal("This house is not nice!".filter('not'),"This house is nice!");
        });
    
    });

    describe(" bubble sort on arrays", function () {
    
        it("[6,4,0, 3,-2,1].bubbleSort()", function () {
            assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(),[-2, 0, 1, 3, 4, 6]);
        });
    
    });    

    describe("create the class Teacher and a method teach", function () {
    
        it("him.teach(\"Inheritance\")", function () {
            assert.equal(him.teach("Inheritance"),"Adam is now teaching Inheritance");
        });
    
    });  