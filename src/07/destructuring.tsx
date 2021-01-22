import {useState} from "react";

type PropsType = {
    title:string
    man:ManType
    food:string[]
    car:{model:string}
}

export type ManType = {
    name: string
    age: number
    lessons:Array<{title:string}>
    address:{
        street:{
            title:string
        }
    }
}

function useDimychState(m:string){
    return [m,function(){} ]
}

/*function useDimychState2(m:string){
    return {message:m,setMessage:function(){} }         2
}*/


const ManComponent:React.FC<PropsType> = (props) => {   //  ({title,man})  --- ({title,man:{name})
                                        // в случае остатка props(чтобы могли вызвать) (({title,man, ...props})
    const {title,man}=props
//    const {title,man:{name}}=props    - title, man - просто name
//    const {name}=props.man
//    const {title}=props             аналог выше


    const [message,setMessage]=useDimychState('hello')   // useState
// 2    const {message,setMessage}=useDimychState2('hello')   // useState

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}