
const users=[
    {
        "Name":"Tanvir",
        "age":20,
        "numbers": [ {Home:"0136965455"},
        {Office:"0155765464"}]
    },
    {
        "Name":"Raju",
        "age":200,
        "numbers": [ {Home:"013698784"},
        {Office:"015575544774"}]
    },
    {
        "Name":"Rohim",
        "age":300,
        "numbers":
           [ {Home:"0136976942"},
            {Office:"01557641651"}]
        
    },
]

const NastedList = () => {
  return <div>
    <h1>Nested list</h1>

    {users.map((user,index)=>{
      return (<div key={index}> 
        <h1>Name : {user.Name}</h1>
        <h1>Age : {user.age}</h1>
       {user.numbers.map((number)=>(
         <div>
            <h1>Home nb : {number.Home}</h1>
            <h1>Office nb : {number.Office}</h1>
        </div>
       ))}
      </div>)
    }
    )}
  </div>
}

export default NastedList