function talk(){
    var know = {
    "tags" : "HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.",
    "heading" : "You can create a header with the header tags --> h1 (being the biggest) -> h6(being the smallest)",
    "header" : "You can create a header with the header tags --> h1 (being the biggest) -> h6(being the smallest)",
    "hyperlink" : "Use &lt;a href> tag ",
    "hyperlinks" : "Use &lt;a href> tag ",
    "style" : "A style sheet is used to build a consistent, transportable, and well-designed style template. You can add these templates on several different web pages.",
    "stylesheet" : "A style sheet is used to build a consistent, transportable, and well-designed style template. You can add these templates on several different web pages.",
    "section":"Using the div tage you can separate",
    "background":"&lt;body background = 'image.jpg'> ",
    "image":"&lt;img src = *Image URL*>",
    "picture":"&lt;img src = *Image URL*>",
    "photo":"&lt;img src = *Image URL*>",
    "doctype":"&lt;!DOCTYPE html> is used to instruct the web browser about the HTML page. The browser will not be able to identify that it is an HTML document and HTML 5 tags do not function properly",
    "button":"The button tag is used in HTML 5. It is used to create a clickable button within the HTML form on the web page.",
    "tag" : "HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.",
    "founder":"Bianca Nwosu",
    "creator":"Bianca Nwosu",
    "coder":"You can become a coder through practice and hardwork",
    "css":"cascading style sheet",
    "font":"You can change the font by using the css code 'font-family: *font name*'. You can change the font size with the css code 'font-size: *measurement*' ",
    "hack":"Learning to hack is unfortunately not included in this website",
    "hacker":"Learning to hack is unfortunately not included in this website",
    "hacking":"Learning to hack is unfortunately not included in this website",
    "website":"follow this link if you want to learn how to make a website <a href = 'home.html'>link</a>",
    "js":"JS stands for JavaScript",
    "html" : "HTML stands for HyperText Markup Language",
    };
    var contin = false
    var word = ' '
    var user = document.getElementById('userBox').value;
    
    document.getElementById('chatLog').innerHTML = user + "<br>";
    user = user.toLowerCase();
    var user2 = user.split(" ");

    for (const i in know){
        for (j in user2){
            if (i == user2[j]){
                word = user2[j];
                contin = true;
                break;}
          
        }
        
        if (contin == true){
            
            break;
        }

        
    }
    
    if (contin == true){
        
        document.getElementById('chatLog').innerHTML = know[word] + "<br>";
    }
    else{
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    
}