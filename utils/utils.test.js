const utils = require('./utils');
const expect = require('expect');


describe("Utils tests",() => {

    describe("#sync",() => {

        it("Should add two numbers",()=>{

            let val = utils.add(10,15);
            expect(val).toBe(25);


            //  if(val !== 25) {
            //     throw new Error(`Value not correct. expected 25, but got ${val}`);
            // }
        });

        it("Should square the number",() =>{
            let val = utils.square(3);
            expect(val).toBe(9);
            //  if(val !== 9) {
            //     throw new Error(`Value not correct. expected 9, but got ${val}`);
            // }
        });

    });
    //testing async functions. if i wont put the done callback , the test will finish testing after the async function starts , but would`nt ->
    // ->w8 until it finishes , therefore the test would`nt be correct.

    describe("#async",() => {
        it("Should add two numbers async",(done) =>{
            utils.asyncAdd(5,6, (sum) =>{
                expect(sum).toBe(11);
                done();
            })
        });

//with promise there is no difference..
        it("Should add two numbers async (Promise)",(done) =>{
            utils.asyncAddPromise(5, 6)
                .then((sum) =>{
                    expect(sum).toBe(11);
                    done();
                })
        });



        it("should square the number async", (done) => {
            utils.asyncSquare(5,(square) => {
                expect(square).toBe(25);
                done();
            })
        });

        it("should square the number async promise", (done) => {
            utils.asyncSquarePromise(5)
                .then((square) => {
                    expect(square).toBe(25);
                    done();
                })
        });



    });


});



// it("Should verify that first and last names are set."){
//     const user = utils.setName({location:"Tel aviv",age: 21},"Saar Ziv");
//     expect(user).toInclude({
//         firstName: "Saar",
//         lastName: "Ziv"
//     });
// }
