/*
function  insert(text){
   document.form.textview.toptext;
}


const memo = new Map();
memo.forEach((value,key) => 
  console.log(text)
);

if (toptext.length => 0){
    document.form.textiew.toptext;
}
*/
/*
function insert(text){
    document.form.textview.topview;
}

if (toptext.length => 0){
    document.form.textview.toptext;
}
*///memoはtask
//trashはゴミ箱done
//favsは★お気に入り

const memosInput =document.querySelector('input.toptext');
const list =document.querySelector('.list');


const favsSection=document.querySelector('.favs'); //Selectorは()内のclassを持つ要素のうち、最初のものを返す
const favsTitle = document.querySelector('.favs h3');
const favs =document.querySelector('.favs ul');
const favsItems = favs.children;

const memosSection =document.querySelector('.memo');
const memosTitle =document.querySelector('.memos h3');
const memos = document.querySelector('memos ul');
const memosItems = memos.children;

if (favsitem.length ===0){ //もしふぁぼのとこなにも記入されてなかったらnone
    favsSection.style.display == 'none';
};

if (trashitem.length ===0){ //もしごみのとこなにも記入されてなかったらnone
    trashSection.style.display == 'none';
};

taskInput.addEventListener= ('key',(e)=>{
    if (key ===13){
      let  li=document.createElement('li');
      if (taskInput.value ===""){ //何も追加されなかったら"追加して"、を出す
          alert ("please add a task");
      }else{ //なにかしら追加されたら以下のようになる
          li.textContent =textInput.value;　//上のテキストになにか追加されたら値をいれる
          attachButton(li);　　//リストとして表示される
          memos.appendachild(li);　//taskのよこにそえる　
          memosTitle.style.display ='';　//わからん
          memosInput.value ='';　//わからん

          memosTitle.textcontent ="Inbox"; //inboxのタイトル表示
          memosSection.style.display ="";　//わからん
      }
    }
});

lists.addEventListener('click',(event) => { //わからん

    const tag = event.target.tagName;
    const basevalue = event.target.className.bassval;

    const clickArea1 =event.target.parentNode.parentNode.parentNode.parentNode.classname;
    const clickArea2 =event.target.parentNode.parentNode.parentNode.parentNode.parentNode.className;
    const clickArea3 =event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className; 

    //checking if buttons inside tasks section is clicked=

    if(clickArea1 ==='memos' || clickArea2 ==='memos' || clickArea3 ==='memos') {
        if (tag ==='svg'){
            if (bassvalue === 'delete' || basevalue ==='can' || basevalue ==='cap' || basevalue ==='bin'){
                let li =event.target.parentNode.parentNode;
            }
        }
    }

})

