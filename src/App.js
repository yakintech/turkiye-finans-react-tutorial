import ClickComp from "./propsSample/ClickComp"
import UserProfile from "./propsSample/UserProfile";

function App() {

  const merhaba = () => {
    alert('Hello PROPS!!')
  }


  const calc = (price) => {
    alert(price * 1.18);
  }

  return (<>
    {/* <ClickComp hello={merhaba} calc={calc}></ClickComp> */}
    <UserProfile name='Çağatay'/>
  </>)


}

export default App