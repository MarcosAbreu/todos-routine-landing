import { Main, Logout, Header, Text, UserName, Image } from "./styles";
import imageSrc from '../../assets/home-sample.png'
import Button from "../../components/Button";
import { Colors } from "../../helpers/themes";
import { useEffect, useState } from "react";

function SampleHome(){
    const [user, setUser] = useState(null);

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };

    useEffect(()=>{
        const getUser = ()=> {
            fetch('http://localhost:5000/auth/login/success', {
                method: 'GET',
                credentials: 'include',
                headers:{
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                }
            }).then((response)=>{
                if(response.status === 200) return response.json();
                throw new Error("Authentication has been failed!")
            }).then(resObj => {
                console.log(resObj)
                setUser(resObj.user)
            }).catch((err)=>console.log(err))
        }
        getUser();
    },[]);

    useEffect(()=>{
        console.log(user);
    },[user]);
    return (
          <Main>
            <Header> 
                <Logout>
                    <Button 
                        title='Logout'
                        width='100px'
                        height='50px'
                        backgroundColor={Colors.textPrimary}
                        fontSize='1em'
                        fontWeight='500'
                        border='none'
                        color={Colors.secondary}
                        hover={Colors.secondary}
                        onClick={logout}/>
                </Logout>
                {
                    user !== null 
                        ?   <>
                                <Text>Hi</Text> 
                                <UserName>{user.displayName}</UserName>
                            </>
                        : ''
                }
                <Text>This is an example of logged in home page</Text>
            </Header>
            <Image src={imageSrc}/>
          </Main>
    )
}

export default SampleHome;