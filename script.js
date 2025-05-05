javsDef = document.getElementById("def")
javsDef.textContent = "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. Ninety-nine percent of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code."
featAndUses = document.getElementById ("container")
featAndUses.innerHTML = "<h3>KEY FEATURES AND USES</h3>"
featAndUses = document.getElementById ("pics")
featAndUses.innerHTML = '<img id ="javaimg" src="https://images.pexels.com/photos/1972464/pexels-photo-1972464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="700" alt="JavaScript" />'
featAndUses.innerHTML += `<fieldset>
                <legend>DATA TYPES IN JAVASCRIPT</legend>
                <ul>
                    <li>String</li>
                    <li>Numbers</li>
                    <li>Boolean</li>
                    <li>Null</li>
                    <li>Undefined</li>
                </ul>
            </fieldset>`
const picture = document.getElementById("javaimg")
picture.style.margin = "20px"
const features = {"Web Development": "JavaScript is the foundation for interactive and dynamic web applications, allowing users to interact with web pages in real-time", 
"Frontend Development": "It's used to create the user interface and user experience of websites, handling events like button clicks, form submissions, and animations", 
"Backend Development": "Through frameworks like Node.js, JavaScript can also be used to build server-side applications and APIs",
"Mobile App Development": "Frameworks like React Native allow developers to create cross-platform mobile applications using JavaScript",
"Game Development": "JavaScript can be used for creating simple and complex web-based games",
"Other Applications":"JavaScript is also used in areas like virtual reality (VR), artificial intelligence (AI), and server-side development"} //list of features and uses to be added to the page
const keys = Object.keys(features);
let index = 0;
let alladded = false

document.getElementById("btn").addEventListener("click", function() {
    if (!alladded){   // to keep adding elements until all are added
        if (index < keys.length) {
            const key = keys[index];
            const value = features[key];

            const heading = document.createElement("h4");
            heading.textContent = key;
            heading.style.color = "blue";
            heading.style.fontSize = "20px"

            const paragraph = document.createElement("p");
            paragraph.textContent = value;

            document.getElementById("container").appendChild(heading);
            document.getElementById("container").appendChild(paragraph);

            index++;
  }
        if (index===keys.length){
            alladded=true
            document.getElementById("btn").textContent="CLEAR ALL"
           
        }
 } else { // to clear all elements when the button is clicked again
    index=0
    alladded=false
    document.getElementById("container").innerHTML=""
    document.getElementById("btn").textContent="ADD NEXT KEY FEATURES"    
  }
});

const head1 = document.getElementsByTagName("h1")[0] // to select the first h1 element in the document and change its color to red
head1.style.color = "red"
