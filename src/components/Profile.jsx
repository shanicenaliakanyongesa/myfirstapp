function Profile(){
    //Here is where you write js code
    let name="Shanis Naliaka";
    let role="Software Developer";
    let phone="0734567891";
    let email="sh@gmail.com";
    let img="pic.jpg"

    return(
        <div style={{
            border:"1px solid grey",
            borderRadius:"10px",
            margin:"auto",
            padding:"40px",
            justifyContent:"center",
            width:"250px",
        }}>
            <h4>My Profile</h4>
            <img src={img} alt="" style={{borderRadius:"50%", width:"100px"}}  />
            <p>{name}</p>
            <p>{role}</p>
            <p>{phone}</p>
            <p>{email}</p>




        </div>
    )
}
export default Profile;