import {ManType} from "./destructuring";


type LessonsType = {
    title:string                    // else  str:-19- lessons:Array<{title:string}>
}
type AddressType = {
    street:TitleType
}
type TitleType = {
    title:string

}

let props:ManType


beforeEach( ()=> {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'},{title: '3'}],
        address: {
            street: {
                title: 'Nezavisimost'
            }
        }
    }
})

test( '',()=>{

  //  const age = props.age
   // const lesson = props.lesson
    const {age,lessons }=props                      // repeat Up         ---- деструкторизация Объекта
 //   const {age:a,lessons:l }=props                      // псевдонимы
 //   const title = props.address.street.title   // repeat Down
   const {title}= props.address.street


    const a = props.age
    const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(a).toBe(32)
    expect(l.length).toBe(3)
    expect(title).toBe("Nezavisimost")

})

test( '',()=>{
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const [ls1,ls2]= props.lessons        // аналог выше    - деструкторизация массива
    const [,,ls3]= props.lessons        //   - присваивание к 3му обьекта массива ( если он будет)
    const[s1, ...restLessons]= props.lessons

    expect (l1.title).toBe("1")
    expect (l2.title).toBe("2")

    expect (ls1.title).toBe("1")
    expect (ls2.title).toBe("2")
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe("2")
})