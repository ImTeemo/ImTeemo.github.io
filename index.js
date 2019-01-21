<script>
  
	//保存留言
	function save(){
		var site=new Object;
		site.keyNum = document.getElementById("keyNum").value;
		site.MSGFrom = document.getElementById("MSGFrom").value;
		site.MSGContent = document.getElementById("MSGContent").value;
		site.MSGTime = document.getElementById("MSGTime").value;
		var str =JSON.stringify(site);// 将对象转换为字符串
		localStorage.setItem(site.keyNum,str);
		alert("添加成功！");
	}
	//查找留言
	function find(){
		var search_NUM = document.getElementById("search_NUM").value;
		var str = localStorage.getItem(search_NUM);
		var find_result = document.getElementById("find_result");
		var site = JSON.parse(str);

		find_result.innerHTML = "["+site.MSGTime+" "+site.MSGFrom+"]："+site.MSGContent;
		// 输入管理员密码后载入所有存储在localStorage的数据
		if(search_NUM == "adminzhy"){
			//alert("welcome,admin!");
			loadAll();
		}
	}
	//删除留言
	function deleteMSG(tempid){
		alert(tempid);
		localStorage.removeItem(tempid); 
		this.Storage.writeData();
	}
	
	//将所有存储在localStorage中的对象提取出来，并展现到界面上
	// 确保存储的 keyname 对应的值为转换对象，否则JSON.parse会报错
	function loadAll(){
		var list = document.getElementById("list");
		if(localStorage.length>0){
			var result = "<table border='1'>";
			var result2;
			result += "<tr><td>NAME:</td><td>MSG</td><td>DATE</td><td><input type='button' onclick='find()' value='全删'/></td></tr>";
			for(var i=0;i<localStorage.length;i++){
				var keyNum = localStorage.key(i);
				var str = localStorage.getItem(keyNum);
				var site = JSON.parse(str);
				result2 += keyNum;
				result += "<tr><td>"+site.MSGFrom+"</td><td>"+site.MSGContent+"</td><td>"+site.MSGTime+"</td><td><input type='button' onclick=\"deleteMSG(\"+keyNum+\")\" value='删除'/></td></tr>";
			}
			result +="</table>";
			list.innerHTML = result;
			alert(result2);
		}
		else{
			list.innerHTML = "找不到你的留言！";
		}
	}
</script>
<script>
function returnTop(){
	var getTop = document.getElementById("ItsBackToHEAD");
	var head = document.getElementById("ItsTitle");
	getTop.onclick = function () {
		var time = setInterval(function () {
			document.body.scrollTop = document.body.scrollTop - 50;
			if (document.body.scrollTop === 0) {
				clearInterval(time);
			}
		}, 1);

	};
}
</script>