		var start_index;
		var end_index;
		//�ϳ�ͼƬ
		function dragStart(event){
			console.log("dragStart:"+event.target.id);
			start_index=event.target.id;   //��ô���Ԫ�ص�id
		}
		function dragEnd(event){
			event.preventDefault();   //ȡ���¼���Ĭ�϶�����
		}
		function dropOver(event){
			event.preventDefault();   //ȡ���¼���Ĭ�϶�����
		}
		//����ͼƬ
		function drop(event){
			event.preventDefault;     //ȡ���¼���Ĭ�϶�����
			console.log("drop:"+event.target.id);
			end_index=event.target.id;
			exchange(start_index,end_index,"src");
			check();
		}
		//����id1��id2����Ԫ�ص�attri����ֵ
		function exchange(id1,id2,attri){
			ele1=document.getElementById(id1);
			ele2=document.getElementById(id2);
			var i=ele1.getAttribute(attri);
			ele1.setAttribute(attri,ele2.getAttribute(attri));
			ele2.setAttribute(attri,i);
		}
		// ���ƴͼ�Ƿ�����ɣ��������ʾ��Ӧ�ı�
		function check(){
				// ��Ӵ��룺���ƴͼ�Ƿ�����ɣ��������ʾ��Ӧ�ı�
				
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
				var elem=document.getElementById("main");//��ȡ�ؼ�
				elem.style.position = "relative";//���þ��Զ�λ��������Զ�λ��
				elem.style.left = "180px";//����left��ֵ
				elem.style.cssFloat="left";
				//elem.style.top = "10px";//����top��ֵ
			}
		}