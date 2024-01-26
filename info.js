import Info from './App.js';
export function UserName()
{
    const user={
        name:'william'
    }
  return(
      <h3>Name:{user.name}</h3>
  )
}
export default function Name(){
    return(
       <UserName/>
    )
}