function job(){
    window.location.href="file:///Users/sunchao/Desktop/%E6%96%B0%E8%AE%A4%E7%9F%A5%E5%AE%98%E7%BD%91/html/six.html";
}
function ajax_submit(user) {
    var username = $("#username").val();//获取表单的输入值;
    var phone_number = $("#phone_number").val();//获取表单的输入值;
    var email = $("#phone_number").val();//获取表单的输入值;
    var workexp = $("#workexp").val();//获取表单的输入值;
    var company_name = $("#company_name").val();//获取表单的输入值;
    var work_describe = $("#work_describe").val();//获取表单的输入值;
    $.ajax({
        type: "post",  //数据提交方式（post/get）
        url: "/editPassword",  //提交到的url
        data: {"username":username,"phone_number":phone_number,"email":email,"workexp":workexp,"company_name":company_name,"work_describe":work_describe},//提交的数据
        dataType: "json",//返回的数据类型格式
        success: function (result) {
            console.log(result);//打印服务端返回的数据(调试用)
            if (result.resultCode == 200) {
                alert("SUCCESS");
            };
        },
        error : function() {
            alert("异常！");
        }
    });
}
function login1() {
    window.location.href="file:///Users/sunchao/Desktop/%E6%96%B0%E8%AE%A4%E7%9F%A5%E5%AE%98%E7%BD%91/html/six.html";
    $.ajax({
        type: "post",  //数据提交方式（post/get）
        url: "file:///Users/sunchao/Desktop/%E6%96%B0%E8%AE%A4%E7%9F%A5%E5%AE%98%E7%BD%91/html/six.html",  //提交到的url
        data: $('#form1','#form2').serialize(), //提交的数据
        dataType: "json",//返回的数据类型格式
        success: function (result) {
            console.log(result);//打印服务端返回的数据(调试用)
            if (result.resultCode == 200) {
                alert("SUCCESS");
            };
        },
        error : function() {
            alert("异常！");
        }
    });
}
