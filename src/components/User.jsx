const User = ({key, user}) => {
    return(
        <>
            {/* 렌더링 시 사용하는 key값 작성해줘야 오류 X */}
            <tr key={key}>  
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            </tr>
        </>
    )
}

export default User;