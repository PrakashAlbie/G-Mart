import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Error = styled.div`
	margin-top: 15px;
	width: 70%;
	color: red;
	font-weight: bold;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	const [inputs, setInputs] = useState({});
	const [error, setError] = useState("");
	const dispatch = useDispatch();

	const handleInput = (e) => {
		setError("");
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleRegister = (e) => {
		e.preventDefault();
		if (
			// !inputs.firstname ||
			// !inputs.lastname ||
			!inputs.username ||
			!inputs.email ||
			!inputs.password ||
			!inputs.confirmPassword
		) {
			setError("Enter all fields to proceed !");
		} else if (inputs.password !== inputs.confirmPassword) {
			setError("password and confirm password does not match!!");
		} else {
			try {
				register(dispatch, inputs);
			} catch (err) {
				console.log(err.message);
			}
		}
	};

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					{/* <Input
						name="firstname"
						onChange={handleInput}
						placeholder="name"
					/>
					<Input
						name="lastname"
						onChange={handleInput}
						placeholder="last name"
					/> */}
					<Input
						name="username"
						onChange={handleInput}
						placeholder="username"
					/>
					<Input
						name="email"
						onChange={handleInput}
						placeholder="email"
					/>
					<Input
						name="password"
						type="password"
						onChange={handleInput}
						placeholder="password"
					/>
					<Input
						name="confirmPassword"
						type="password"
						onChange={handleInput}
						placeholder="confirm password"
					/>
					{error && <Error>{error}</Error>}
					<Agreement>
						By creating an account, I consent to the processing of
						my personal data in accordance with the{" "}
						<b>PRIVACY POLICY</b>
					</Agreement>

					<Button onClick={handleRegister}>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
