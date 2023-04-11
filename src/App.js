import './App.css';
import { Routes,Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체 상품페이지, 로그인, 상품상세페이지
//1-1. navigation bar 만들기
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일 을 눌렀으나, 로그인이 안되있을경우 로그인 페이지가 먼저 나온다
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수있다
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃 되면 상품 디테일 페이지를 볼 수없다, 다시 로그인 페이지가 보인다
//8. 로그아웃이 보이면 로그인 되고 로그인이 보이면 로그아웃된다
//9. 상품을 검색할 수 있다 

function App() {

  const [ authenticate,setAuthenticate ] = useState(false);

  useEffect(()=>{
    console.log("인증",authenticate);
  },[]);

  return (
    <div>

      <Navigation authenticate={authenticate} setAuthenticate={setAuthenticate}/>

      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
