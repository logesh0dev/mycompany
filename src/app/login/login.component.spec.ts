


function add(a,b){
  var c= a + b;
  return c
}

it("my sample test",()=>{
  var result =add(10,20)
  var expresult=30;

  expect(result).toBe(expresult)

} );