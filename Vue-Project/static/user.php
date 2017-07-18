<?php
$user=$_GET['user'];
$pwd=$_GET['pwd'];
$action=$_GET['login'];
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
}
?>