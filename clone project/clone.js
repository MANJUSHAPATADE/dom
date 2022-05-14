alert("welcome");

var form = document.getElementById("myform")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value
    alert(search)

     var originalName = search.split(' ').join('')

     document.getElementById("result").innerHTML=""


    fetch("https://api.github.com/users/"+originalName)
     .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML ="<a target='_blank' href=`http://api.github.com/${orignalName}`> <img src=`${data.avatar-url}`/> </a>"   
        

     })
})
    