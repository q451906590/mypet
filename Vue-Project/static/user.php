<?php
$user=$_GET['user'];
$pwd=$_GET['pwd'];
$action=$_GET['action'];
$prod=$_GET['prod']
$conn=@mysqli_connect(SAE_MYSQL_HOST_M.":".SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB);
$conn->query("set names utf8");
if($action=="regist"){
	$sql="INSERT INTO user(user,password) VALUES ('{$user}','{$pwd}')";
	$conn->query($sql);
	if(mysqli_affected_rows($conn)>0){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
}elseif($action=="check"){
	$sql="SELECT * FROM user WHERE user='{$user}'";
	$result=$conn->query($sql);
	if(mysqli_num_rows($result)>0){
		echo "可以注册";
	}else{
		echo "用户名已存在";
	}
}elseif($action=="login"){
	$sql="SELECT * FROM user WHERE user='{$user}'";
	$result=$conn->query($sql);
	if(mysqli_num_rows($result)>0){
		$row=$result->fetch_assoc();
		if($row['password']==$pwd){
			echo "密码正确",
		}else{
			echo "密码错误"
		}
	}else{
		echo "用户名错误";
	}
}elseif($action=="add"){
	$sql="SELECT * FROM person WHERE user='{$user}'";
	$result=$conn->query($sql);
	if(mysqli_num_rows($result)>0){
		$row=$result->fetch_assoc();
		$str=$row["pro"].$prod;
		$str=$str."|";
		$sql="UPDATE user SET prod='{$str}' WHERE user = '{$user}'";
		$conn->query($sql);
		if(mysqli_affected_rows($conn)>0){
			echo "更新成功";
		}else{
			echo "更新失败";
		}
	}
}elseif($action=="select"){
	$sql="SELECT * FROM user WHERE user='{$user}'";
	$result=$conn->query($sql);
	if(mysqli_num_rows($result)>0){
		$row=$result->fetch_assoc();
		echo $row['prod'];
	}
}
?>