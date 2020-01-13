
<?php
$name = $_POST["name"];    //利用POST超全局变量 获取表单信息
$phone_number = $_POST["phone_number"];
$email = $_POST["email"];
$servername = "localhost";        //以下四行为数据库信息
$user = "root";            //用户名
$password = "123456";            //密码
$data = "php";                //要使用的数据库名称
 
$con = new mysqli($servername,$user,$password,$data);        //连接到数据库(面向对象)
if($con->connect_error){
	die("连接失败".$con->connect_error);
}
echo "连接成功"."<br/>";        //连接数据库成功显示的信息
$sql = "insert into myguest(name,phone,email) values ('$name','$phone','$email')";  //插入数据到数据库语句
if($con->query($sql)===true){        //插入成功显示的信息
	echo "data insert success";
}else {
	echo "data insert fail"."<br/>".$con->error;
}
$con->close();
?>
