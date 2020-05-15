var oTab = document.getElementById('tab'),
    tabList = oTab.getElementsByTagName('li'),
    divList=oTab.getElementsByTagName('div');

function changeTab(curIndex){
    for (var i = 0;i<tabList.length ; i++){
        tabList[i].className=divList[i].className='';
    }
    tabList[curIndex].className='active';
    divList[curIndex].className='active';
}

for (var i = 0; i<tabList.length ; i++){
    tabList[i].myIndex = i;
    tabList[i].onclick=function(){
        changeTab(this.myIndex);
    }
}


