/*
ts: Use for typescript file
tsx for react component

There are two ways of creating component:
 1. js classcomponent 
 2.function base component (more concise and easy to write)
*/ 

function Message(){
    // JSX
    const name = "Sahrfear"
    return <h1>Hello {name}</h1>
}
export default Message