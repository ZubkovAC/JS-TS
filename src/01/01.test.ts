import {sum, splitIntoWords} from './01'
import {mult} from './01'

let a :number
let b :number
let c :number

//beforeEach - задать переменным точные значение - не изменяемые в тестах
beforeEach( ()=>{

    a = 5;
    b = 4;
    c = 7;
})


test ('sum', ()=>{

    const result = sum(a,b);
    const result1 = sum(c,b);

    expect (result).toBe(9);
    expect (result1).toBe(11);
})

test ('mult', ()=>{

    const result2 = mult(a,b);
    const result3 = mult(c,b);
    const result4 = mult(a,c);

    expect (result2).toBe(20);
    expect (result3).toBe(28);
    expect (result4).toBe(35);
})
test ('splitting into words shoud be correct', () =>{
    const sentOne = 'Hello my friend!'
    const sentTwo = 'Js - the best  programming language'


    const resultText1 = splitIntoWords(sentOne)
    const resultText2 = splitIntoWords(sentTwo)

    //action
    expect(resultText1.length).toBe(3)
    expect(resultText1[0]).toBe('hello')
    expect(resultText1[1]).toBe('my')
    expect(resultText1[2]).toBe('friend')


    expect(resultText2.length).toBe(5)
    expect(resultText2[0]).toBe('js')
    expect(resultText2[1]).toBe('the')
    expect(resultText2[2]).toBe('best')
    expect(resultText2[3]).toBe('programming')
    expect(resultText2[4]).toBe('language')

})