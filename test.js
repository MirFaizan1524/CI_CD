

// Performing basic testing with jest:
const {performAddition,performSubtraction} = require('./testMethods.js');

// test("Performing Test Case for Numbers and Strings",()=>{
// expect("Hello World").toBe("Hello World");
    
// })

// test("Performing Addition  and Subtraction in different functions",()=>{
//     expect(performAddition(4,6)).toBe(10);
//     // expect(performAddition(10,10)).toBe(40);
//     expect(performSubtraction(10,5)).toBe(5);


// });

// test("Test case for FAIZ_OBJ",()=>{

//    let data = {
//     name:"xyz"
//    }
//    data['Designation'] = "SDE 2";
//   expect(data).toEqual({name:"xyz",Designation:"SDE 2"}); 


// })
const app = require('./app.js');
const request  = require('supertest');



describe("Testing  API'S",()=>{
  // Case 1.
    test('checking the reponse of / route',async()=>{

         let response  = await request(app).get("/");
         
         let jsonResponse = await JSON.parse(response.text);
          expect(jsonResponse).toMatchObject({success:true});
    })     

})




