import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const SearchContainter = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "5px" })}
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;
// const Center = styled.div`
//     flex: 1;
//     display: flex;
//     align-items: flex-end;
// `;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ display: "none" })}
`;
const LogoSmall = styled.h1`
    font-weight: bold;
    font-size: 12px;
    display: none;
    ${mobile({ display: "block", marginLeft: "10px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"  })}
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)

    const navigate = useNavigate();
    const homeClick = () => {
        navigate("/");
    };
  return (
    <Container>
        <Wrapper>
            <Left onClick={homeClick} style={{cursor:"pointer"}}>
                <Logo>Weber Machine Works</Logo>
                <LogoSmall>Weber Machine Works</LogoSmall>
            </Left>
            <Right>
                <SearchContainter>
                    <Input placeholder='Search'/>
                    <Search style={{color:"gray", fontSize:"16px"}}/>
                </SearchContainter>
                {user !== <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
                </Link>}
                <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar