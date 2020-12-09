/* eslint-disable */
import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './Login.scss';

const API = "http://3.35.19.3:8000/account/signup";

class Login extends React.Component{
	constructor(){
		super();
		this.state = {
			id:"",
			password:"",
			hiddenPW:true,
	
		};
	}
	//id---로그인 기능
	handleIdChange = (e) => {
		this.setState({id:e.target.value});
	};
	//pw---로그인 기능
	handlePasswordChange=(e) => {
		this.setState({password: e.target.value});
	};
	
	checkValidation = (e) => {
		e.preventDefault();

		fetch("http://3.35.19.3:8000/account/signup",{
			method:"POST",
			body:JSON.stringify({
				email:this.state.userID,
				password:this.state.userPW,
		}),
	})
			.then(response => response.json())
			.then(result => console.log(result));

		const { id, password} = this.state;
		if(id.includes ("@") && password.length >= 4){
			window.location.href='http://localhost:3000/main'
		}
		if(!id.includes("@")){
			alert("id는 @ 필요합니다");
		}
		if(!password.length >= 4){
			alert("비밀번호는 4자리 이상");
		}

	};

	//show password --> 비밀번호 보여주기
	// showPassword = () =>{
	// 	//toggle식 true <->false
	// 	this.setState({hiddenPW: !this.state.hiddenPW});
	// }
	
	//15~22줄 심화 버전
	// handleInputValueChange = (e) => {
	// 	//구조분해 할당 = 비구조화
	// 	const [id, value] = e.target;
	// 	this.setState({[id] : value})
	// };


  render(){

		// console.log("아이디", this.state.id, "pwd", this.state.password);
		const activateBtn = 
			(this.state.id.length && this.state.password.length) !== 0;
		return(
				<div className="super_log_main">
					<div className="header_log">westagram</div>
					<div className="main_log_page">
						<div className="log_te_id">
							<input 
								id="id" 
								type="text" 
								placeholder="&nbsp;&nbsp;&nbsp;전화번호,사용자 이름 또는 이메일" 
								// value={id} 
								onChange={this.handleIdChange}
							/>				  
						</div>
						<div className="log_te_pw">
							<input 
								id="password" 
								type={this.state.hiddenPW ? "password" : "text"}
								placeholder="&nbsp;&nbsp;&nbsp;비밀번호" 
								// value={password}
								onChange={this.handlePasswordChange}
							/>  
							{/* show // hide */}
							{/* <span className="showPw" onClick={this.showPassword}>Show
								{this.state.hiddenPW ? "Show" ! "Hide"}
							</span> */}
						</div>
					
						<div className="log_page_main_btn">
							<Link to="/main">	
								<button 
									className="main_page_btn"  
									type="button" 
									id="btn"
									style={{
										backgroundColor: activateBtn ? "#045cb5" : "#9ebbe6"
									}}
									onClick={this.checkValidation}
									>로그인</button>
							</Link>
						</div>
						</div>
						<div className="log_page_footer">비밀번호를 잊으셨나요?</div>
			</div>
	)
}
}
export default Login;