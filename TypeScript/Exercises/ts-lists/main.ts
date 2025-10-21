let myList = new CustomArrayList<string>();
// let myList = new CustomArrayList<string>();

myList.add("Hello")
myList.add("World")

for(let i = 0; i < myList.length(); i++) {
    console.log(myList.get(i))
}