const list = document.querySelector("#list");
const liDOM = document.querySelectorAll("li");
const close = document.getElementsByClassName('close')

// Yeni Görev oluşturma
const newElement =()=> {

  let li = document.createElement("li");
  let getInputTask = document.getElementById("task").value;
  let taskContent = document.createTextNode(getInputTask);
  li.appendChild(taskContent);

  //Boş görev girilemez.
  if( getInputTask === ""){
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    list.appendChild(li);
  }
  document.getElementById("task").value = "";

  //çarpı ikonu ekleme
  let span = document.createElement("span");
  let spanContent = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(spanContent);
  li.appendChild(span)

  //Yeni görevleri silme
  for (let i = 0; i < close.length; i++) {
    // console.log(close[i].parentElement)
    close[i].addEventListener('click', function(){
      let parentElement = this.parentElement;
      console.log(parentElement)
      parentElement.style.display = "none"
    })
    
  }

}

//TÜM ELEMANLARA ÇARPI İKONU EKLEME
liDOM.forEach( item => {
  // console.log(item)
  let span = document.createElement("span");
  let spanContent = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(spanContent);
  item.appendChild(span)

  //Li'lere tıklanınca checked classı ekleme
  item.addEventListener('click', function(e){
    console.log("item:",item)
    item.classList.toggle('checked')
  })
})

//Yeni eklenen görevler için checked classı ekleme
list.addEventListener("click",function (e) {
  console.log("list:",e.target.tagName)
    if (e.target.tagName === "li" || e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  }
);


