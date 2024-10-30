import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
	return (
		<div className="flex h-screen justify-center items-center">
			<SignUp />
		</div>
	);
};

export default SignupPage;
