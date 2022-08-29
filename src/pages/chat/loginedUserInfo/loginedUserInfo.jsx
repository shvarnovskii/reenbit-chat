import './loginedUserInfo.scss';

const LoginedUserInfo = ({ loginedUserInfo }) => {
	return (
		<div className="logined-user-info">
			<img src={loginedUserInfo?.photo} alt="" />
			{+loginedUserInfo?.online ? (
				<span className="author-online"></span>
			) : null}
			<h5>{loginedUserInfo?.fullname}</h5>
		</div>
	);
};

export default LoginedUserInfo;
