		var start_index;
		var end_index;
		//拖出图片
		function dragStart(event){
			console.log("dragStart:"+event.target.id);
			start_index=event.target.id;   //获得触发元素的id
		}
		function dragEnd(event){
			event.preventDefault();   //取消事件的默认动作。
		}
		function dropOver(event){
			event.preventDefault();   //取消事件的默认动作。
		}
		//放入图片
		function drop(event){
			event.preventDefault;     //取消事件的默认动作。
			console.log("drop:"+event.target.id);
			end_index=event.target.id;
			exchange(start_index,end_index,"src");
			check();
		}
		//交换id1和id2两个元素的attri属性值
		function exchange(id1,id2,attri){
			ele1=document.getElementById(id1);
			ele2=document.getElementById(id2);
			var i=ele1.getAttribute(attri);
			ele1.setAttribute(attri,ele2.getAttribute(attri));
			ele2.setAttribute(attri,i);
		}
		// 检查拼图是否已完成，若完成显示对应文本
		function check(){
				// 添加代码：检查拼图是否已完成，若完成显示对应文本
				
			//var img_list=document.getElementsByTagName("img");
			var img_list=document.getElementsByClassName("puz");
			var img_src,dot_index,img_index;
			var flag=true;
			for(var i=0;i<9;i++){
				img_src=img_list[i].getAttribute("src");
				dot_index=img_src.lastIndexOf(".");
				img_index=Number(img_src.slice(dot_index-1,dot_index));
				console.log("img_index:"+img_index);
				if(img_index!=i+1) {
					flag=false;
					console.log(flag);
				}
			}
			if(flag==true){
				var success=document.getElementById("success");
				success.style.display="block";
				var elem=document.getElementById("main");//获取控件
				elem.style.position = "relative";//设置绝对定位（或者相对定位）
				elem.style.left = "180px";//设置left数值
				elem.style.cssFloat="left";
				//elem.style.top = "10px";//设置top数值
			}
		}