import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHeart,faStar } from '@fortawesome/free-regular-svg-icons';
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navigation = ({authenticate,setAuthenticate}) => {

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "스포츠",
    "Sale",
    "지속가능성",
  ]

  const [width,setWidth] = useState(0);

  const navigate = useNavigate();

  const goLogin=()=>{
    navigate("/login");
  }

  const goLogout=()=>{
    setAuthenticate(false);
  }

  const goMain=()=>{
    navigate("/");
  }

  const productSearch=(event)=>{

    if(event.key === 'Enter'){

    let keyword = event.target.value;

    console.log("키워드",keyword);

    navigate(`/?q=${keyword}`);  // + url을 바꿔준다. 

  }


  }


  return (

    <Container>

      <div className='side-menu' style={{ width : width }}>
        <button className='close-button' onClick={()=> setWidth(0)}>
          &times;
        </button>

        <div className='side-menu-list'>
          {menuList.map((menu,index)=>(
            <button key={index}>{menu}</button>
          ))}
        </div>

      </div>

      <div className='top'>

        <div className='top-left'>
          <div className='top-left-box'>고객 서비스</div>
          <div className='top-left-box'>뉴스레터</div>
          <div className='top-left-box'>매장 찾기</div>
        </div>

        <div className='top-right'>

        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)}/>
        </div>

          {authenticate===false? 
          <div className='top-right-box' onClick={goLogin}><FontAwesomeIcon icon={faUser} /> 로그인</div>
          :
          <div className='top-right-box' onClick={goLogout}><FontAwesomeIcon icon={faUser} /> 로그아웃</div>  }
          
          
          <div className='top-right-box'><FontAwesomeIcon icon={faHeart} /> 즐겨찾기</div>
          <div className='top-right-box'><FontAwesomeIcon icon={faStar} /> 쇼핑백</div>
        </div>

      </div>

      <div className='middle' onClick={goMain}>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png?20130107164928'/>
      </div>
      
      <div className='bottom'>
        <ul className='bottom-menuList'>
        { menuList.map( (list)=>(<li>{list}</li>) ) }
        </ul>

        <div className='bottom-right'>
        <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event)=>productSearch(event)} placeholder='Search'/>
        </div>
      </div>
    </Container>
  )

}

export default Navigation
