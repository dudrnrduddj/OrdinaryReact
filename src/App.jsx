import { useState } from 'react';
import './App.css'
import User from './components/User';
import InputWrap from './components/InputWrap';

function App() {

  

  const [userList, setUserList] = useState([
    {name:"유저1", age:24, gender:"남자", phone:"010-1234-1234"},
    {name:"유저2", age:25, gender:"여자", phone:"010-2222-1234"},
    {name:"유저3", age:26, gender:"남자", phone:"010-3333-1234"}
  ]);

  // const [newUser, setNewUser] = useState(
  //   {
  //     name :"",
  //     age:"",
  //     gender:"",
  //     phone:""
  //   }
  // );

  // const inputChange = (event) => {
  //   const {name, value} = event.target;
  //   setNewUser({...newUser, [name]:value});
  // }


// 새로운 방식
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState("");
const [phone, setPhone] = useState("");



// 새로운 방식
  const registerUser = () =>{
    const user = {name, age, gender, phone};
    userList.push(user);
    setUserList([...userList]);
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  }

  // const registerUser = () => {
  //   userList.push(newUser);
  //   setUserList([...userList]);
  //   // setUserList([...userList, newUser]);

  //   setNewUser({
  //     name :"",
  //     age:"",
  //     gender:"",
  //     phone:""
  //   })
  // }

  return (
    <>
      <h1>회원 정보 출력</h1>
      <hr />
      <table className="user_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index)=>(
            <User user={user} key={"user"+index}/>
          ))}
        </tbody>
      </table>
      <div id='addContainer'>
        <h3>회원 정보 등록</h3>
        <hr />
        {/*  
        <InputWrap text={"이름"} name={'name'} data={newUser.name} inputChange={inputChange}/>
        <InputWrap text={"나이"} name={'age'} data={newUser.age} inputChange={inputChange}/>
        <InputWrap text={"성별"} name={'gender'} data={newUser.gender} inputChange={inputChange}/>
        <InputWrap text={"전화번호"} name={'phone'} data={newUser.phone} inputChange={inputChange}/> */}
        
        {/* 새로운 방식 */}
        <InputWrap text={"이름"} data={name} inputChange={setName}/>
        <InputWrap text={"나이"} data={age} inputChange={setAge}/>
        <InputWrap text={"성별"} data={gender} inputChange={setGender}/>
        <InputWrap text={"전화번호"} data={phone} inputChange={setPhone}/>
        
      </div>
      <button type="button" onClick={registerUser}>회원등록</button>
    </>
  )
}

export default App
