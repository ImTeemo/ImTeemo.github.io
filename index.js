<script>
//【便签】
	//保存便签
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
	//查找便签
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
	//删除便签
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


//【自动回滚到顶部】
	/*自动回滚到顶部*/
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

//【拖放操作】
	/*拖放操作相关函数*/
	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}

//【更改颜色】
	//改变id为demo的元素为红色
	function changeColor()
	{
		x=document.getElementById("demo");
		x.style.color="red";
	}
</script>