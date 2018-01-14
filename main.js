import { DsSinhVien } from "./Dssinhvien.js";
import {SinhVien} from "./Sinhvien.js";
//dong goi css 
require('./style.css');
require('./style.scss');
var dssv = new DsSinhVien();
function Themsinhvien (){
	var masv = document.getElementById('masv').value;
	var hoten = document.getElementById('hoten').value;
	var cmnd = document.getElementById('cmnd').value;
	var email = document.getElementById('email').value;
	var dienthoai = document.getElementById('dienthoai').value;

	var sv = new SinhVien(masv,hoten,cmnd,email,dienthoai);
	dssv.ThemSV(sv);
}

	function Setstorage(){
	var jsonDSSV = JSON.stringify(dssv.mangSinhVien);
	localStorage.setItem("dssv",jsonDSSV);
	alert("dsafdsa");
}	
window.set = Setstorage;
	function Getstorage(){
		//lay 
		dssv.mangSinhVien=JSON.parse(localStorage.getItem("dssv"));
		 Capnhatsv();
	}
	function Capnhatsv() { 

			var tbodySinhVien= document.getElementById('tbodysinhvien');
			tbodySinhVien.innerHTML='';
			for(var i = 0 ;i<dssv.mangSinhVien.length;i++){
				var sv = dssv.mangSinhVien[i];
				var trSV = document.createElement('tr');
				var ckbSV = document.createElement('input');
				ckbSV.setAttribute('type','checkbox');
				ckbSV.value = sv.masv;
				ckbSV.className = 'ckbSV';

				var tdCheckbox = document.createElement('td');
				tdCheckbox.appendChild(ckbSV);
				trSV.appendChild(tdCheckbox);

				var tdMSSV = TaoTD('mssv',sv.masv);
				var tdHoten = TaoTD('hoten',sv.hoten);
				var tdCMND = TaoTD('cmnd',sv.cmnd);
				var tdeMAIL = TaoTD('email',sv.email);
				var tdDienthoai = TaoTD('dienthoai',sv.dienthoai);
				trSV.appendChild(tdMSSV);
				trSV.appendChild(tdHoten);
				trSV.appendChild(tdCMND);
				trSV.appendChild(tdeMAIL);
				trSV.appendChild(tdDienthoai);
				tbodySinhVien.appendChild(trSV);
			}

	}
	function TaoTD(className,value){
		var td =document.createElement('td');
		td.className=className; 
		td.innerHTML=value;
		return td; 
	}
	